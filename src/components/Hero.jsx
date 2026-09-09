'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const brands = [
  { name: 'SnapShot', icon: '⚡' },
  { name: 'Luminous', icon: '✦' },
  { name: 'Product', icon: '◈' },
  { name: 'Automation', icon: '⚙' },
  { name: 'Starter', icon: '▲' },
  { name: 'SnapShot', icon: '⚡' },
  { name: 'Luminous', icon: '✦' },
  { name: 'Product', icon: '◈' },
  { name: 'Automation', icon: '⚙' },
  { name: 'Starter', icon: '▲' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="hero-badge">YOUR BUSINESS GROWTH PARTNER</div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="hero-title"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Scale your business with{' '}
            <span className="gradient-text">ease now</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="hero-subtitle">
            Result-driven approach empowers you to confidently face challenges,
            embrace new opportunities, and achieve business growth.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="hero-buttons">
            <Link href="/contact" className="btn-secondary">
              <span role="img" aria-label="people">
                👥
              </span>
              <span>Book Free Demo</span>
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Started Free
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Logo Ticker */}
      <motion.div
        className="logo-ticker"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="ticker-track">
          {brands.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="ticker-item">
              <span className="ticker-icon">{brand.icon}</span>
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
