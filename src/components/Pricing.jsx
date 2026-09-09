'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 800,
    yearlyPrice: 560,
    description: 'Built for new brands taking their first big step into digital growth.',
    isPopular: false,
    buttonClass: 'btn-secondary',
    features: [
      'Social media setup & management',
      'Basic SEO optimization',
      'Monthly performance report',
      'Email marketing setup',
      'Brand identity guidelines',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 1700,
    yearlyPrice: 1190,
    description: 'Perfect for growing teams needing consistent marketing momentum.',
    isPopular: true,
    buttonClass: 'btn-primary',
    features: [
      'Everything in Starter plus',
      'Advanced paid advertising',
      'Content strategy & creation',
      'Conversion rate optimization',
      'Dedicated account manager',
      'Weekly strategy calls',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 4700,
    yearlyPrice: 3290,
    description: 'Designed for established brands seeking full-service partnership.',
    isPopular: false,
    buttonClass: 'btn-secondary',
    features: [
      'Everything in Pro plus',
      'Custom marketing roadmap',
      'Multi-channel campaign management',
      'Advanced analytics & reporting',
      'Priority support & consulting',
      'Quarterly business reviews',
    ],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 110,
        damping: 20,
      },
    },
  };

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        {/* Header */}
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="label-icon">💰</span>
            <span>PRICING</span>
          </div>

          <h2 className="section-title">Plans Built To Scale</h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Flexible pricing plans that fit your budget & scale with needs.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="pricing-toggle" role="tablist" aria-label="Billing frequency">
            <button
              type="button"
              className={`pricing-toggle-btn ${!isYearly ? 'active' : ''}`}
              onClick={() => setIsYearly(false)}
              role="tab"
              aria-selected={!isYearly}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`pricing-toggle-btn ${isYearly ? 'active' : ''}`}
              onClick={() => setIsYearly(true)}
              role="tab"
              aria-selected={isYearly}
            >
              Yearly
            </button>
            <button
              type="button"
              className="pricing-toggle-badge"
              onClick={() => setIsYearly(true)}
              title="Switch to yearly to save 30%"
            >
              30% off
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="pricing-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pricingPlans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="pricing-card-header">
                  <span className="pricing-plan-name">{plan.name}</span>
                  {plan.isPopular && (
                    <span className="popular-badge">
                      <span>⭐</span> Popular
                    </span>
                  )}
                </div>

                <div className="pricing-price">
                  <span className="pricing-amount">${price}</span>
                  <span className="pricing-period">/month</span>
                </div>

                <p className="pricing-desc">{plan.description}</p>

                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check" aria-hidden="true">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={plan.buttonClass}>
                  Get Started
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Philanthropy / Value Note */}
        <motion.div
          className="pricing-note"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="note-icon" aria-hidden="true">🌿</span>
          <span>We donate 2% of your Pro membership to orphan wellbeing</span>
        </motion.div>
      </div>
    </section>
  );
}
