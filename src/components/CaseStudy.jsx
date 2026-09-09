'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  {
    id: 1,
    hasIcon: true,
    number: '+320%',
    label: 'Instagram Followers Growth',
  },
  {
    id: 2,
    hasIcon: false,
    number: '250%',
    label: 'Engagement Rate Increase',
  },
  {
    id: 3,
    hasIcon: false,
    number: '+45%',
    label: 'Conversion Rate Boost',
  },
  {
    id: 4,
    hasIcon: false,
    number: '4.9/5',
    label: 'Client Satisfaction Rating',
  },
];

export default function CaseStudy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="case-study" id="case-study">
      <div className="container">
        <div className="case-study-content">
          {/* Left Column: Story & CTA */}
          <motion.div
            className="case-study-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label">
              <span className="label-icon">✦</span>
              <span>CAMPAIGN – INVERT LIVING</span>
            </div>

            <h2 className="section-title">Social Media Growth Sprint</h2>

            <p className="section-subtitle">
              We helped a lifestyle brand scale its Instagram presence through a
              data-backed content strategy and ad optimization. The result?
              Explosive growth in followers and sales.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                marginTop: '32px',
              }}
            >
              <Link href="/contact" className="btn-outline">
                Learn More →
              </Link>

              {/* Additional Stat: 10x ROI */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 20px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '100px',
                  transition: 'all var(--transition-normal)',
                }}
              >
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    color: 'var(--accent)',
                    lineHeight: 1,
                  }}
                >
                  10x
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.2px',
                  }}
                >
                  Return On Investment
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Stat Cards Grid */}
          <motion.div
            className="case-study-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="case-stat-card"
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {stat.hasIcon && (
                  <div
                    className="case-stat-icon"
                    title="Invert Living Brand"
                    aria-label="Invert Living Brand"
                  >
                    <span className="dot" />
                  </div>
                )}
                <div className="case-stat-number">{stat.number}</div>
                <div className="case-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
