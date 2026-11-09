import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StarBackground: React.FC = () => {
    const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; delay: number }[]>([]);

    useEffect(() => {
        const starCount = 150;
        const newStars = Array.from({ length: starCount }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="star-container">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white rounded-full opacity-30"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0.1, 0.4, 0.1],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: star.delay,
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014]"></div>
        </div>
    );
};

export default StarBackground;
