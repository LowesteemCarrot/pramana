'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Performance Marketing',
    description:
      'We plan and manage data-backed campaigns that drive measurable business growth across search, social, and digital platforms.',
    emoji: '💻',
  },
  {
    title: 'Brand Strategy',
    description:
      'We will help you define your positioning, voice, and messaging.',
    emoji: '🏢',
  },
  {
    title: 'Creative & Content',
    description:
      'From visuals to storytelling, we create scroll-stopping content that builds trust.',
    emoji: '✍️',
  },
  {
    title: 'Web & Conversion Design',
    description:
      'We design high-performing websites that blend aesthetics with conversion, turning visitors into loyal customers.',
    emoji: '📊',
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label">
            <span className="label-icon" role="img" aria-label="settings">
              ⚙️
            </span>
            <span>SERVICES</span>
          </div>
          <h2 className="section-title">Our services at a glance</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Make your day-to-day smoother and your business stronger
          </p>
        </motion.div>

        {/* 2x2 Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 45, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.015 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Image Placeholder Div with Emoji */}
              <div
                className="service-card-image"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '52px',
                  background:
                    'radial-gradient(circle at center, rgba(62, 207, 142, 0.12) 0%, #f8f9fa 70%)',
                  borderBottom: '1px solid var(--border-color)',
                  userSelect: 'none',
                }}
              >
                <span role="img" aria-label={service.title}>
                  {service.emoji}
                </span>
              </div>

              {/* Card Content */}
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <Link href="/contact" className="btn-outline">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="services-cta-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>Need customized services built just for your business growth strategy?</p>
          <Link href="/contact" className="btn-primary">
            Reach Out To Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
