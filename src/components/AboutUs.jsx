'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', damping: 22, stiffness: 130 },
    },
  };

  return (
    <section className="about-us section" id="about">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="about-header"
          style={{ textAlign: 'center', marginBottom: '48px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="label-icon" aria-hidden="true">⭐</span>
            ABOUT US
          </div>
          <h2 className="section-title">A few statistics about us</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We&apos;ve helped ambitious brands grow, connect, and achieve
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Card 1: Stat 20k+ Campaigns Delivered */}
          <motion.div className="about-card" variants={cardVariants}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}
            >
              <div className="about-stat-number">20k+</div>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(62, 207, 142, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  fontSize: '18px',
                }}
                aria-label="Growth icon"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
            </div>
            <div className="about-stat-label">Campaigns Delivered</div>
          </motion.div>

          {/* Card 2: Engagement text & SnapShot brand */}
          <motion.div
            className="about-card"
            variants={cardVariants}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}
            >
              Helping businesses successfully turn your engagement into strong,
              long-term customer relationships.
            </p>
            <div
              style={{
                marginTop: '20px',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
              }}
            >
              SnapShot
            </div>
          </motion.div>

          {/* Card 3: Quote card */}
          <motion.div
            className="about-card about-quote"
            variants={cardVariants}
          >
            <div className="quote-icon" aria-hidden="true">
              ❝
            </div>
            <p>
              Strengthening businesses through focused growth planning and
              marketing
            </p>
            <cite>— CEO Of Agencee.</cite>
          </motion.div>

          {/* Card 4: Image placeholder with audience whiteboard drawing (📊 emoji) */}
          <motion.div className="about-card" variants={cardVariants}>
            <div
              className="about-card-image"
              role="img"
              aria-label="Audience whiteboard drawing"
            >
              📊
            </div>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                textAlign: 'center',
              }}
            >
              Strategy &amp; Audience Mapping
            </p>
          </motion.div>

          {/* Card 5: Stat 98% Satisfaction Rate */}
          <motion.div className="about-card" variants={cardVariants}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}
            >
              <div className="about-stat-number">98%</div>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(62, 207, 142, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  fontSize: '18px',
                }}
                aria-label="Satisfaction check"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
            </div>
            <div className="about-stat-label">Client Satisfaction Rate</div>
          </motion.div>

          {/* Card 6: Review card with 5 teal stars */}
          <motion.div
            className="about-card about-review"
            variants={cardVariants}
          >
            <div
              className="stars"
              aria-label="5 teal stars rating"
              style={{ color: 'var(--accent)' }}
            >
              ★★★★★
            </div>
            <p>
              Within a short time, we saw improvements in lead quality &amp; more
              – <a href="#testimonials">Client Review.</a>
            </p>
          </motion.div>

          {/* Card 7: 12+ Years Experience */}
          <motion.div
            className="about-card about-experience-card"
            variants={cardVariants}
          >
            <div className="about-experience-number">12+ Years</div>
            <div className="about-experience-label">
              Experience in Brand Growth
            </div>
            <p className="about-experience-desc">
              Guiding companies with proven marketing expertise and valuable
              strategic business insights.
            </p>
          </motion.div>

          {/* Card 8: Partnership card (dark bg with meeting placeholder 🤝) */}
          <motion.div
            className="about-partnership-card about-partnership-card-span"
            variants={cardVariants}
          >
            <div className="partnership-bg" />
            <div
              className="partnership-content"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    fontSize: '28px',
                    display: 'inline-block',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '8px 12px',
                    borderRadius: '12px',
                  }}
                  role="img"
                  aria-label="Partnership meeting"
                >
                  🤝
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  Trusted Collaboration
                </span>
              </div>
              <p>
                Building lasting partnerships through the transparent
                communication that drives results.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (min-width: 1025px) {
              .about-partnership-card-span {
                grid-column: span 2;
              }
            }
          `,
        }}
      />
    </section>
  );
}
