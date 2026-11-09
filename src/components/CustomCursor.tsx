import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOut = () => setIsVisible(false);
        const handleMouseOver = () => setIsVisible(true);

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", handleMouseOut);
        document.addEventListener("mouseenter", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", handleMouseOut);
            document.removeEventListener("mouseenter", handleMouseOver);
        };
    }, [isVisible, cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Interactive Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-cyan-500/50 rounded-full"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0
                }}
            />

            {/* Glow Effect */}
            <motion.div
                className="fixed top-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0
                }}
            />
        </div>
    );
};

export default CustomCursor;
