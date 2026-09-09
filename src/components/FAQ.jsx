'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqList = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'We provide a full suite of digital marketing services including social media management, paid ads, SEO, branding, content creation, and email marketing.',
  },
  {
    id: 2,
    question: 'What makes your agency different?',
    answer:
      'We focus on data-driven results, creative problem-solving, and long-term growth — not just vanity metrics. Our approach blends strategy, creativity, and performance marketing to deliver real ROI.',
  },
  {
    id: 3,
    question: 'How long does it take to see results?',
    answer:
      'Most clients see initial improvements within the first 30-60 days. Significant growth typically happens within 3-6 months of consistent strategy execution.',
  },
  {
    id: 4,
    question: 'Okay, How can we get started?',
    answer:
      'Simply click the Get Started button or reach out to us through the contact form. We will schedule a discovery call to understand your goals and craft a custom plan.',
  },
  {
    id: 5,
    question: 'Do you work with businesses of all sizes?',
    answer:
      'Yes! We work with startups, growing businesses, and established enterprises. Our flexible plans are designed to scale with your needs.',
  },
  {
    id: 6,
    question: 'Do you offer custom marketing plans?',
    answer:
      'Absolutely! We understand every business is unique. We create tailored marketing strategies based on your specific goals, industry, and target audience.',
  },
  {
    id: 7,
    question: 'Do I need technical expertise to work with you?',
    answer:
      'Not at all! We handle all the technical aspects of your marketing campaigns. You just need to share your business goals and we take care of the rest.',
  },
  {
    id: 8,
    question: 'Can you help with rebranding or website design?',
    answer:
      'Yes! Along with marketing, we also help businesses refresh their brand identity and design high-converting websites that align with their marketing goals.',
  },
];

export default function FAQ() {
  // Allow multiple FAQ items to be opened or toggle individual ones
  const [openItems, setOpenItems] = useState([1]); // First item open initially

  const toggleFaq = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        {/* Header */}
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="label-icon">❓</span>
            <span>FAQS</span>
          </div>

          <h2 className="section-title">Questions & Answers!</h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Find some quick answers to the most common questions.
          </p>
        </motion.div>

        {/* 2-Column FAQ Grid */}
        <motion.div
          className="faq-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqList.map((faq) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <motion.div
                key={faq.id}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                variants={itemVariants}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="faq-answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Email Banner */}
        <motion.div
          className="faq-email-banner"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="email-icon" aria-hidden="true">📧</span>
          <span>
            Feel free to mail us for any inquiries :{' '}
            <a href="mailto:agencya@support.com">agencya@support.com</a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
