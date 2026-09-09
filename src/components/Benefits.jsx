'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Benefits() {
  const agencyBenefits = [
    'Build lasting brand systems for growth',
    'Provide clarity transparency and action',
    'Focus on meaningful conversions',
    'Leverage modern tech and agile collaboration',
    'Prioritize quality engagement',
    'Develop tailored strategies backed by research',
    'Continue optimizing and supporting',
  ];

  const othersComparison = [
    'Offer short-term marketing fixes',
    'Deliver reports without insights',
    'Focus on impressions',
    'Work with outdated tools',
    'Prioritize volume over value',
    'End relationships after delivery',
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="benefits-comparison section" id="benefits">
      <div className="container">
        <motion.div
          className="benefits-comparison-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Precision Over Basic</h2>
          <p className="section-subtitle">
            See how our team outperforms competitors with speed.
          </p>
        </motion.div>

        <motion.div
          className="comparison-table"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Agency Column */}
          <motion.div
            className="comparison-column comparison-column-agency"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="comparison-column-header">
              <h3>Agencya</h3>
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>

            <div className="comparison-list">
              {agencyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="comparison-item"
                  variants={itemVariants}
                >
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Others Column */}
          <motion.div
            className="comparison-column comparison-column-others"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="comparison-column-header">
              <h3>Others</h3>
            </div>

            <div className="comparison-list">
              {othersComparison.map((item, index) => (
                <motion.div
                  key={index}
                  className="comparison-item"
                  variants={itemVariants}
                >
                  <span className="cross" aria-hidden="true">
                    ✗
                  </span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
