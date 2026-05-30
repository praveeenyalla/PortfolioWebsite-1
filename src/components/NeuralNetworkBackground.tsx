import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  neighbors: number[];
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number; // 0 to 1
  speed: number;
}

const NeuralNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    const maxDistance = 150;
    const maxPulses = 20;

    // Handle resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    // Initialize nodes based on viewport size
    const initNodes = () => {
      nodes = [];
      pulses = [];
      const density = 18000; // area per node
      const nodeCount = Math.min(
        Math.floor((canvas.width * canvas.height) / density),
        90
      );

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1.5,
          neighbors: []
        });
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Main animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains('dark');
      const nodeColor = isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.25)';
      const lineColor = isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(37, 99, 235, 0.05)';
      const activeLineColor = isDark ? 'rgba(96, 165, 250, 0.15)' : 'rgba(30, 64, 175, 0.08)';
      const pulseColor = isDark ? 'rgba(96, 165, 250, 0.85)' : 'rgba(37, 99, 235, 0.7)';
      const shadowColor = isDark ? '#60a5fa' : '#2563eb';

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep inside bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        // Clear neighbors array for re-calculation
        node.neighbors = [];
      }

      // Calculate neighbors and draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            nodeA.neighbors.push(j);
            nodeB.neighbors.push(i);

            // Draw line
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1 - dist / maxDistance;
            ctx.stroke();
          }
        }
      }

      // Spawn electrical signals (pulses) occasionally
      if (pulses.length < maxPulses && Math.random() < 0.04 && nodes.length > 0) {
        const fromIndex = Math.floor(Math.random() * nodes.length);
        const fromNode = nodes[fromIndex];
        if (fromNode.neighbors.length > 0) {
          const toIndex = fromNode.neighbors[Math.floor(Math.random() * fromNode.neighbors.length)];
          
          // Check if pulse already exists between these nodes to prevent duplicates
          const exists = pulses.some(
            p => (p.fromNode === fromIndex && p.toNode === toIndex) ||
                 (p.fromNode === toIndex && p.toNode === fromIndex)
          );

          if (!exists) {
            pulses.push({
              fromNode: fromIndex,
              toNode: toIndex,
              progress: 0,
              speed: Math.random() * 0.015 + 0.008
            });
          }
        }
      }

      // Update and draw active pulses (signals traveling)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        
        // Safety checks for indices
        if (pulse.fromNode >= nodes.length || pulse.toNode >= nodes.length) {
          pulses.splice(i, 1);
          continue;
        }

        const from = nodes[pulse.fromNode];
        const to = nodes[pulse.toNode];

        // Increment progress
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          // Pulse arrived! Remove it
          pulses.splice(i, 1);
          
          // Chain reaction: trigger new pulse from destination node with some probability
          if (pulses.length < maxPulses && Math.random() < 0.65 && to.neighbors.length > 0) {
            const nextNode = to.neighbors[Math.floor(Math.random() * to.neighbors.length)];
            // Don't bounce immediately back to the source node
            if (nextNode !== pulse.fromNode) {
              pulses.push({
                fromNode: pulse.toNode,
                toNode: nextNode,
                progress: 0,
                speed: Math.random() * 0.015 + 0.008
              });
            }
          }
        } else {
          // Calculate pulse location
          const px = from.x + (to.x - from.x) * pulse.progress;
          const py = from.y + (to.y - from.y) * pulse.progress;

          // Draw highlighted line segment underneath pulse for tracing effect
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(px, py);
          ctx.strokeStyle = activeLineColor;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Draw glowing pulse dot
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = pulseColor;
          ctx.shadowColor = shadowColor;
          ctx.shadowBlur = 6;
          ctx.fill();
          
          // Reset shadow config immediately to preserve fast rendering for other canvas items
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
    />
  );
};

export default NeuralNetworkBackground;
