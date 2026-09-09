'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ieta Sollark',
      role: 'Head of Growth at FinFlow',
      avatarEmoji: '👩‍💼',
      avatarGradient: 'linear-gradient(135deg, #e0e7ff 0%, #fae8ff 100%)',
      rating: '4.5/5',
      stars: '★★★★★',
      quote:
        'PRAMANA completely redefined our customer acquisition pipeline. Within three months, our conversion rate skyrocketed by 140%.',
    },
    {
      id: 2,
      name: 'James Bena',
      role: 'Founder & CEO, Lumina Tech',
      avatarEmoji: '👨‍💼',
      avatarGradient: 'linear-gradient(135deg, #dcfce7 0%, #ccfbf1 100%)',
      rating: '5.0/5',
      stars: '★★★★★',
      quote:
        'Working with the team was an absolute game changer. Their precision, speed, and analytical rigor unmatched in the industry.',
    },
    {
      id: 3,
      name: 'Emily Grant',
      role: 'VP Marketing, Apex Studio',
      avatarEmoji: '👩‍💻',
      avatarGradient: 'linear-gradient(135deg, #fef3c7 0%, #fee2e2 100%)',
      rating: '4.8/5',
      stars: '★★★★★',
      quote:
        'From high-level brand strategy to tactical execution, every sprint delivered measurable revenue growth and brand equity.',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="label-icon" aria-hidden="true">♥</span>
            CUSTOMERS
          </div>
          <h2 className="section-title">Our Clients Speak For Us</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Join the customers who trust us to transform their business.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Avatar placeholder div */}
              <div
                className="testimonial-avatar"
                style={{ background: item.avatarGradient }}
                role="img"
                aria-label={`${item.name} avatar`}
              >
                <span style={{ transform: 'scale(1.2)', display: 'inline-block' }}>
                  {item.avatarEmoji}
                </span>
              </div>

              {/* Name */}
              <h3 className="testimonial-name">{item.name}</h3>

              {/* Stars (yellow ★) */}
              <div
                className="testimonial-stars"
                aria-label="5 stars rating"
              >
                {item.stars}
              </div>

              {/* Rating text */}
              <div className="testimonial-rating">{item.rating}</div>

              {/* Review snippet & role */}
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginTop: '16px',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>

              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  marginTop: '10px',
                  fontWeight: 500,
                }}
              >
                {item.role}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Dots and Arrows */}
        <motion.div
          className="testimonials-navigation"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '48px',
          }}
        >
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--text-primary)';
              e.currentTarget.style.transform = 'translateX(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dots */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: activeSlide === idx ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '100px',
                  background:
                    activeSlide === idx
                      ? 'var(--accent)'
                      : 'rgba(0, 0, 0, 0.15)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--text-primary)';
              e.currentTarget.style.transform = 'translateX(2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
