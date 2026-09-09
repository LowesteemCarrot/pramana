'use client';

import { motion } from 'framer-motion';

export default function BenefitsDetails() {
  const barHeights = [60, 80, 70, 90, 50];
  const barLabels = ['Q1', 'Q2', 'Q3', 'Q4', 'YTD'];

  const orbitalIcons = [
    { icon: '🔗', label: 'Integration', top: '2px', left: '82px', delay: 0 },
    { icon: '💡', label: 'Innovation', top: '60px', left: '148px', delay: 0.4 },
    { icon: '🎯', label: 'Precision', top: '150px', left: '132px', delay: 0.8 },
    { icon: '📦', label: 'Delivery', top: '138px', left: '38px', delay: 1.2 },
    { icon: '🛡️', label: 'Reliability', top: '56px', left: '12px', delay: 1.6 },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="benefits-details section" id="benefits-details">
      <div className="container">
        <div className="benefits-details-grid">
          {/* Card 1: Measurable Impact */}
          <motion.div
            className="benefit-detail-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3 className="benefit-detail-title">Measurable Impact</h3>
              <p className="benefit-detail-desc">
                We track performance metrics, optimize campaigns, and ensure steady
                growth across every channel with measurable, lasting impact.
              </p>
            </div>

            <div>
              {/* Bar chart with 5 teal gradient bars */}
              <div className="chart-container">
                {barHeights.map((height, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <motion.div
                      className="chart-bar"
                      style={{ width: '100%' }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          top: '-22px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          fontSize: '11px',
                          fontWeight: 600,
                          color: 'var(--accent)',
                        }}
                      >
                        {height}%
                      </span>
                    </motion.div>
                    <span
                      style={{
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                      }}
                    >
                      {barLabels[index]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Legend: Profit (green dot), Loss (gray dot) */}
              <div className="chart-legend" style={{ marginTop: '16px' }}>
                <div className="chart-legend-item">
                  <span className="chart-legend-dot profit" />
                  <span>Profit</span>
                </div>
                <div className="chart-legend-item">
                  <span className="chart-legend-dot loss" />
                  <span>Loss</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Long-Term Partnership */}
          <motion.div
            className="benefit-detail-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3 className="benefit-detail-title">Long-Term Partnership</h3>
              <p className="benefit-detail-desc">
                We build lasting collaborations focused on shared goals.
              </p>
            </div>

            {/* Orbital / circular design */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 0',
              }}
            >
              <div className="orbital-container" aria-label="Collaboration network">
                {/* 3 Rings */}
                <div className="orbital-ring" />
                <div className="orbital-ring" />
                <div className="orbital-ring" />

                {/* Center Core */}
                <div
                  style={{
                    position: 'absolute',
                    width: '44px',
                    height: '44px',
                    top: '78px',
                    left: '78px',
                    borderRadius: '50%',
                    background: 'var(--accent-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '18px',
                    boxShadow: '0 0 24px rgba(62, 207, 142, 0.45)',
                    zIndex: 2,
                  }}
                  title="PRAMANA Core"
                >
                  ✦
                </div>

                {/* Icons positioned around rings: 🔗 💡 🎯 📦 🛡️ */}
                {orbitalIcons.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="orbital-icon"
                    style={{
                      top: item.top,
                      left: item.left,
                      zIndex: 3,
                    }}
                    title={item.label}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: item.delay,
                      ease: 'easeInOut',
                    }}
                  >
                    <span role="img" aria-label={item.label}>
                      {item.icon}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginTop: '12px',
                }}
              >
                {orbitalIcons.map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
