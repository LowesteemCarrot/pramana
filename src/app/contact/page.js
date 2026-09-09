'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const serviceOptions = [
  'Performance Marketing',
  'Brand Strategy',
  'Creative & Content',
  'Web & Conversion Design',
  'AI Marketing Suite',
  'Full Partnership',
];

const budgetOptions = ['< $5k', '$5k - $15k', '$15k - $50k', '$50k+'];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState([
    'Performance Marketing',
  ]);
  const [selectedBudget, setSelectedBudget] = useState('$5k - $15k');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        {/* Contact Hero Header */}
        <section className="contact-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="badge inline-flex items-center gap-2">
                <span>💬</span> GET IN TOUCH
              </div>
              <h1 className="contact-hero-title">
                Let’s build something <span className="gradient-text">extraordinary</span> together.
              </h1>
              <p className="contact-hero-subtitle">
                Have a project in mind, need strategic growth advice, or ready to scale your market presence? Reach out and our strategy team will connect within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="contact-content section">
          <div className="container">
            <div className="contact-grid">
              {/* Left Column: Direct Info & Value Proposition */}
              <motion.div
                className="contact-info-col"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="contact-info-card">
                  <h2 className="info-card-title">Talk to a Growth Specialist</h2>
                  <p className="info-card-desc">
                    We partner with ambitious founders, marketing leads, and scaling brands to engineer data-driven marketing engines.
                  </p>

                  <div className="contact-details-list">
                    <div className="contact-detail-item">
                      <span className="detail-icon">📧</span>
                      <div>
                        <div className="detail-label">Email Us</div>
                        <a href="mailto:hello@pramana.com" className="detail-value">
                          hello@pramana.com
                        </a>
                      </div>
                    </div>

                    <div className="contact-detail-item">
                      <span className="detail-icon">📞</span>
                      <div>
                        <div className="detail-label">Call Us</div>
                        <a href="tel:+15552345678" className="detail-value">
                          +1 (555) 234-5678
                        </a>
                      </div>
                    </div>

                    <div className="contact-detail-item">
                      <span className="detail-icon">📍</span>
                      <div>
                        <div className="detail-label">Headquarters</div>
                        <div className="detail-value">
                          San Francisco, CA & Global Remote
                        </div>
                      </div>
                    </div>

                    <div className="contact-detail-item">
                      <span className="detail-icon">⚡</span>
                      <div>
                        <div className="detail-label">Guaranteed Response</div>
                        <div className="detail-value">
                          Within 24 Business Hours
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Highlights */}
                  <div className="contact-trust-box">
                    <div className="trust-badge-row">
                      <span className="star-rating">★★★★★</span>
                      <span className="trust-text">4.9/5 Rating across 200+ Reviews</span>
                    </div>
                    <p className="trust-subtext">
                      "PRAMANA transformed our funnel architecture in under 60 days, doubling our inbound deal velocity."
                    </p>
                    <span className="trust-author">— Alex V., CMO at TechPulse</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Interactive Booking & Inquiry Form */}
              <motion.div
                className="contact-form-col"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="contact-form-card">
                  <AnimatePresence mode="wait">
                    {formSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="form-success-state text-center"
                      >
                        <div className="success-icon">🎉</div>
                        <h2>Message Received!</h2>
                        <p>
                          Thank you for reaching out, <strong>{formData.name || 'there'}</strong>! Our senior strategy team is reviewing your project details and will email you back shortly at <strong>{formData.email || 'your email'}</strong>.
                        </p>
                        <button
                          className="btn-primary mt-4"
                          onClick={() => {
                            setFormSubmitted(false);
                            setFormData({
                              name: '',
                              email: '',
                              phone: '',
                              company: '',
                              message: '',
                            });
                          }}
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 1 }}
                        className="contact-form"
                      >
                        <h2 className="form-title">Tell Us About Your Project</h2>
                        <p className="form-subtitle">
                          Fill out the details below so we can prepare tailored growth insights for your call.
                        </p>

                        {/* Name & Email Row */}
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input
                              type="text"
                              id="name"
                              required
                              placeholder="e.g. Sarah Jenkins"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="email">Work Email *</label>
                            <input
                              type="email"
                              id="email"
                              required
                              placeholder="sarah@company.com"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                            />
                          </div>
                        </div>

                        {/* Phone & Company Row */}
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              placeholder="+1 (555) 000-0000"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="company">Company / Website</label>
                            <input
                              type="text"
                              id="company"
                              placeholder="company.com"
                              value={formData.company}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  company: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        {/* Services Needed */}
                        <div className="form-group mt-3">
                          <label>What services are you looking for?</label>
                          <div className="pill-grid">
                            {serviceOptions.map((service) => (
                              <button
                                type="button"
                                key={service}
                                className={`pill-item ${
                                  selectedServices.includes(service)
                                    ? 'active'
                                    : ''
                                }`}
                                onClick={() => toggleService(service)}
                              >
                                {service}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Budget Range */}
                        <div className="form-group mt-3">
                          <label>Estimated Monthly Budget</label>
                          <div className="pill-grid">
                            {budgetOptions.map((budget) => (
                              <button
                                type="button"
                                key={budget}
                                className={`pill-item ${
                                  selectedBudget === budget ? 'active' : ''
                                }`}
                                onClick={() => setSelectedBudget(budget)}
                              >
                                {budget}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Message Textarea */}
                        <div className="form-group mt-3">
                          <label htmlFor="message">Project Details / Goals</label>
                          <textarea
                            id="message"
                            rows={4}
                            placeholder="Tell us about your target goals, timeline, and current marketing challenges..."
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>

                        {/* Submit CTA Button */}
                        <button type="submit" className="btn-primary form-submit-btn">
                          Send Request & Book Consultation <span>→</span>
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
