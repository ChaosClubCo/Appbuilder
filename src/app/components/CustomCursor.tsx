import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Hide on mobile touch devices usually, but css media query is better.
  // For simplicity, we just render. pointer-events-none is crucial.

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 80,
          mass: 0.1
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
          mass: 0.5
        }}
      />
    </>
  );
}
