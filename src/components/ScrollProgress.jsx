'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #10b981 0%, #34d399 50%, #059669 100%)',
        transformOrigin: '0%',
        zIndex: 99999,
        boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
      }}
    />
  );
}
