'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discover & Define',
    desc: 'We analyze your goals and identify new growth opportunities for success.',
  },
  {
    number: '02',
    title: 'Strategize & Plan',
    desc: 'We craft tailored marketing strategies aligned perfectly with your business goals.',
  },
  {
    number: '03',
    title: 'Execute & Optimize',
    desc: 'We launch and continuously optimize campaigns to maximize performance growth.',
  },
  {
    number: '04',
    title: 'Measure & Grow',
    desc: 'We track key metrics and refine marketing strategies for long-term growth.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="process-content">
          {/* Left Column */}
          <motion.div
            className="process-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label">
              <span className="label-icon" role="img" aria-label="rocket">
                🚀
              </span>
              <span>PROCESS</span>
            </div>
            <h2 className="section-title">Simple & Scalable</h2>
            <p className="section-subtitle">
              A simple framework designed to plan, execute, and scale efficiently
              for lasting growth.
            </p>
            <Link href="/contact" className="btn-primary">
              <span role="img" aria-label="people">
                👥
              </span>
              <span>Get Started</span>
            </Link>
          </motion.div>

          {/* Right Column: 2x2 Grid of Step Cards */}
          <div className="process-steps">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="process-step"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
