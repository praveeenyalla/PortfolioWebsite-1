import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Shield, Sparkles, ArrowRight, Eye, Layers, X, Github, Terminal, Globe, Activity, ZoomIn } from 'lucide-react';

interface BlueprintItem {
  name: string;
  progress: number;
}

interface DetailedSpec {
  memory: string;
  controller: string;
  optimization: string;
}

interface VisionItem {
  title: string;
  subtitle: string;
  repoName: string;
  repoUrl: string;
  icon: React.ReactNode;
  image: string;
  tags: string[];
  description: string;
  implementedTech: string[];
  architectureProgress: number;
  blueprints: BlueprintItem[];
  preprocessing: string;
  postprocessing: string;
  neuralOptimization: string;
  databaseInfrastructure: string;
}

const FuturisticVisions: React.FC = () => {
  const [selectedVision, setSelectedVision] = useState<VisionItem | null>(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  useEffect(() => {
    if (selectedVision) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVision]);

  const visions: VisionItem[] = [
    {
      title: "Brain-Inspired Cognitive Engine",
      subtitle: "Inspired by thinking-algorithm",
      repoName: "thinking-algorithm",
      repoUrl: "https://github.com/praveeenyalla/thinking-algorithm",
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      image: "/cognitive_architecture.png",
      tags: ["Python", "Memory Persistence", "Reasoning Layer"],
      description: "An agentic neural system featuring persistent managed memory mapping, custom reasoning loops, and multi-tier cognitive controllers designed to connect Large Language Models with production-grade backend databases.",
      implementedTech: ["Python", "LangChain", "SQLite", "OpenAI API", "Vector Embeddings", "FastAPI"],
      architectureProgress: 85,
      blueprints: [
        { name: "Reasoning Core", progress: 90 },
        { name: "Memory Vector Cache", progress: 80 },
        { name: "Agentic Decision Controller", progress: 85 }
      ],
      preprocessing: "Prompt template assembly, input sanitization, dynamic context assembly based on user intent.",
      postprocessing: "Response structural validation (JSON schemas parsing), raw text formatting, fallback generation triggers.",
      neuralOptimization: "Heuristic prompt engineering, context pruning to reduce latency, sliding window memory compression.",
      databaseInfrastructure: "SQLite-powered relational memory maps and hierarchical JSON key-value configurations."
    },
    {
      title: "Global Threat Mapping Console",
      subtitle: "Inspired by sentinel-terminal",
      repoName: "sentinel-terminal",
      repoUrl: "https://github.com/praveeenyalla/sentinel-terminal",
      icon: <Terminal className="w-6 h-6 text-green-500" />,
      image: "/intelligence_grid.png",
      tags: ["Java", "Distributed Mesh", "Real-Time Telemetry"],
      description: "A secure cybernetic console interface mapping distributed telemetry events, cryptographic system logs, and live server nodes. Built to handle massive concurrent event streams with zero packet loss.",
      implementedTech: ["Java", "Spring Boot", "WebSockets", "Redis Pub/Sub", "Leaflet.js Map Engine", "Maven"],
      architectureProgress: 75,
      blueprints: [
        { name: "P2P Communication Grid", progress: 80 },
        { name: "Telemetry Event Listener", progress: 70 },
        { name: "Cryptographic Node Validation", progress: 75 }
      ],
      preprocessing: "Log ingestion formatting, security level filtering, telemetry node geolocation mapping.",
      postprocessing: "Consolidated event feeds broadcasting, active warning notification triggers, stats calculation.",
      neuralOptimization: "Low-overhead thread pooling, event batching optimizations for active browser rendering.",
      databaseInfrastructure: "Redis-powered transient message queues and real-time distributed state maps."
    },
    {
      title: "Zero-Knowledge Decoupled Mesh",
      subtitle: "Inspired by ChartAI-SecureAnonymous",
      repoName: "ChartAI-SecureAnonymousCommunicationPlatform",
      repoUrl: "https://github.com/praveeenyalla/ChartAI-SecureAnonymousCommunicationPlatform",
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      image: "/secure_mesh.png",
      tags: ["TypeScript", "ZK Cryptography", "Anonymous Routing"],
      description: "A decentralized peer-to-peer anonymous communication platform. Uses multi-layered onion routing, secure zero-knowledge state validation, and multi-party key exchange to achieve untraceable communication channels.",
      implementedTech: ["TypeScript", "React", "Node.js", "WebRTC", "Elliptic Curve Cryptography (ECDH)", "TailwindCSS"],
      architectureProgress: 90,
      blueprints: [
        { name: "ECDH Key Exchange Core", progress: 95 },
        { name: "Onion Routing Protocol", progress: 85 },
        { name: "Zero-Knowledge State Checks", progress: 90 }
      ],
      preprocessing: "Message payload packetization, onion envelope encryption layers creation.",
      postprocessing: "Decryption layer unwrapping, multi-party cryptographic signature checks, ephemeral storage wipe.",
      neuralOptimization: "Dynamic routing table updates, optimized mesh connection caching for WebRTC signaling.",
      databaseInfrastructure: "Decentralized peer discovery index, transient local memory storage, no database persistence."
    },
    {
      title: "Today Autonomous Browser Agent",
      subtitle: "Inspired by Today-AI-Browser",
      repoName: "Today-AI-Browser",
      repoUrl: "https://github.com/praveeenyalla/Today-AI-Browser",
      icon: <Globe className="w-6 h-6 text-cyan-500" />,
      image: "/ai_browser.png",
      tags: ["TypeScript", "DOM Parser", "Web Automation"],
      description: "An autonomous browsing assistant that parses live web pages, translates user intent into visual DOM actions, and executes complex multi-step web flows directly.",
      implementedTech: ["TypeScript", "Puppeteer", "Claude Web API", "DOM Parser Engine", "CSS Selectors", "HTML Cleaner"],
      architectureProgress: 80,
      blueprints: [
        { name: "DOM Parsing Engine", progress: 85 },
        { name: "Intelligent Action Planner", progress: 75 },
        { name: "Browser Automation Runner", progress: 80 }
      ],
      preprocessing: "HTML DOM node cleaning, interactive element extraction, viewport element filtering.",
      postprocessing: "Action execution state check, page navigation triggers, selector validation logs.",
      neuralOptimization: "Context-aware DOM minimization, semantic layout parsing using vision model embeddings.",
      databaseInfrastructure: "Local storage for session snapshots, temporary DOM caches, cookie session maps."
    },
    {
      title: "Veen-AI Orchestration Console",
      subtitle: "Inspired by veen-ai",
      repoName: "veen-ai",
      repoUrl: "https://github.com/praveeenyalla/veen-ai",
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      image: "/veen_ai_agent.png",
      tags: ["Python", "FastAPI Core", "Tool Orchestrator"],
      description: "A containerized tool orchestration dashboard that translates natural language queries into API parameters, executes local script extensions, and coordinates agentic task workflows.",
      implementedTech: ["Python", "FastAPI", "SQLite", "Docker", "Jinja2 Templates", "Requests", "Subprocess Runner"],
      architectureProgress: 70,
      blueprints: [
        { name: "FastAPI Engine Controller", progress: 75 },
        { name: "Dynamic Tool Matcher", progress: 65 },
        { name: "Reasoning Output Builder", progress: 70 }
      ],
      preprocessing: "User query intent detection, tool parameters mapping, parameter schema validation.",
      postprocessing: "Subprocess output sanitization, UI response cards generation, result payload export.",
      neuralOptimization: "Execution thread caching, semantic similarity matcher to map user query to available python plugins.",
      databaseInfrastructure: "SQLite database storing tool registries, query logs, system performance stats, and config variables."
    },
    {
      title: "UltronAI Advanced ML Playground",
      subtitle: "Inspired by UltronAI",
      repoName: "UltronAI",
      repoUrl: "https://github.com/praveeenyalla/UltronAI",
      icon: <Activity className="w-6 h-6 text-red-500" />,
      image: "/ultron_ai_platform.png",
      tags: ["Python", "Neural Networks", "Mathematical Engine"],
      description: "An advanced machine learning playground designed to implement and visualize feed-forward neural networks, backpropagation mechanics, training performance plots, and gradient-descent optimizations.",
      implementedTech: ["Python", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "Matplotlib Data Visualizer"],
      architectureProgress: 60,
      blueprints: [
        { name: "Neural Network Layers", progress: 65 },
        { name: "Optimization Algorithms", progress: 55 },
        { name: "Performance Visualizer", progress: 60 }
      ],
      preprocessing: "Vectorized feature scaling, train-test splitting, data normalization, label encoding.",
      postprocessing: "Loss metrics calculations, model prediction evaluations, classification report mapping.",
      neuralOptimization: "Gradient-descent backpropagation formulas, dynamic learning rate decay, Adam optimization models.",
      databaseInfrastructure: "NumPy arrays for parameter weight arrays, training data loaders, CSV/Parquet file interfaces."
    }
  ];

  return (
    <section id="visions" className="py-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            Conceptual Architectures & Ideas
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Futuristic Conceptual Visions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Visualizing the future of AI engines, global intelligence networks, and cryptographic systems—inspired by active codebases and systems I design.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visions.map((vision, index) => {
            const animations = ['animate-card-fade-up', 'animate-card-slide-left', 'animate-card-scale-in'];
            const animationClass = animations[index % animations.length];
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between neon-border ${animationClass}`}
              >
                {/* Image Header with Zoom and Overlay */}
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={vision.image}
                    alt={vision.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/30 to-transparent"></div>
                  
                  {/* Icon Badge Overlay */}
                  <div className="absolute top-4 left-4 w-11 h-11 bg-white/90 dark:bg-gray-800/90 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-6">
                    {vision.icon}
                  </div>

                  {/* Subtitle Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                      {vision.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      {vision.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {vision.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-full text-[10px] font-semibold text-blue-700 dark:text-blue-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {vision.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => setSelectedVision(vision)}
                      className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-all duration-200"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      Blueprint details
                    </button>
                    <a
                      href={vision.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Dialog Popup */}
        {selectedVision && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 animate-card-scale-in relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedVision(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1"
                aria-label="Close Modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Header Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    {selectedVision.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedVision.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {selectedVision.subtitle}
                    </p>
                  </div>
                </div>

                {/* Concept Graphic */}
                <div 
                  onClick={() => setIsImageZoomed(true)}
                  className="rounded-xl overflow-hidden h-48 sm:h-64 border border-gray-200 dark:border-gray-700 relative cursor-zoom-in group/image"
                >
                  <img
                    src={selectedVision.image}
                    alt={selectedVision.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 text-white text-xs font-medium bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
                    Click image to expand
                  </div>
                </div>

                {/* Summary Description */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    System Vision & Purpose
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {selectedVision.description}
                  </p>
                </div>

                {/* Implemented Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Implemented Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedVision.implementedTech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Architecture Progress */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center justify-between">
                    <span>Core Architectural Modules</span>
                    <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">
                      Overall: {selectedVision.architectureProgress}%
                    </span>
                  </h4>
                  
                  {/* Progress bars */}
                  <div className="space-y-2 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                    {selectedVision.blueprints.map((item, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold text-gray-700 dark:text-gray-300">
                          <span>{item.name}</span>
                          <span>{item.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specific Pipeline Details */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Active Code Pipeline Specs
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <span className="font-semibold text-blue-600 dark:text-blue-400 block mb-1">Pre-processing Layer:</span>
                      <span className="text-gray-600 dark:text-gray-300">{selectedVision.preprocessing}</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <span className="font-semibold text-blue-600 dark:text-blue-400 block mb-1">Post-processing Layer:</span>
                      <span className="text-gray-600 dark:text-gray-300">{selectedVision.postprocessing}</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <span className="font-semibold text-blue-600 dark:text-blue-400 block mb-1">Neural/System Optimization:</span>
                      <span className="text-gray-600 dark:text-gray-300">{selectedVision.neuralOptimization}</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <span className="font-semibold text-blue-600 dark:text-blue-400 block mb-1">Database & Infrastructure:</span>
                      <span className="text-gray-600 dark:text-gray-300">{selectedVision.databaseInfrastructure}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={selectedVision.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Open GitHub Repository</span>
                  </a>
                  <button
                    onClick={() => setSelectedVision(null)}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl text-sm font-semibold transition-colors"
                  >
                    Close Spec
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Zoomed Image Lightbox Modal */}
        {selectedVision && isImageZoomed && (
          <div 
            onClick={() => setIsImageZoomed(false)}
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          >
            {/* Expanded Image Container */}
            <div className="relative max-w-4xl w-full flex flex-col justify-center items-center p-6 bg-gray-900/60 rounded-2xl border border-white/10 backdrop-blur-md">
              {/* Close Button on top-right of the container */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsImageZoomed(false);
                }}
                className="absolute -top-12 right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full border border-white/20 shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                aria-label="Close Zoom View"
              >
                <X className="w-4 h-4" />
                <span>Close Preview</span>
              </button>

              <img
                src={selectedVision.image}
                alt={selectedVision.title}
                className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Caption */}
              <div 
                className="mt-4 text-center text-white/90 text-xs sm:text-sm bg-black/60 px-4 py-2 rounded-full border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="font-bold text-blue-400">{selectedVision.title}</span> - {selectedVision.subtitle}
              </div>

              {/* Close Button below the caption */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsImageZoomed(false);
                }}
                className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer text-xs"
              >
                <X className="w-4 h-4" />
                Close Fullscreen
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FuturisticVisions;
