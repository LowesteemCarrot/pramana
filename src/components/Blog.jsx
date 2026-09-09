'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "Supercharge Your Marketing Agency's Sustainable Growth",
    category: 'Brand Strategy',
    date: 'November 24, 2024',
    readTime: '5 min read',
    icon: '📈',
    snippet:
      'Learn the essential strategies to build resilient brand equity, optimize multi-channel campaigns, and sustain top-line revenue growth.',
    content:
      'Sustainable marketing growth isn’t built on quick hacks — it requires strategic positioning, repeatable conversion funnels, and continuous audience optimization. In this deep dive, we break down how modern B2B and B2C brands construct long-term campaign roadmaps that withstand market volatility.',
  },
  {
    id: 2,
    title: 'Launching Our New AI Marketing Automation Suite',
    category: 'AI & Tech',
    date: 'December 28, 2023',
    readTime: '4 min read',
    icon: '⚡',
    snippet:
      'Discover how our newly deployed algorithmic engine optimizes paid campaign targeting, dynamic content generation, and ad spend ROI.',
    content:
      'Artificial Intelligence has transformed performance marketing from guesswork into precision engineering. Our new automation suite leverages real-time conversion signals to dynamically reallocate ad budget, refresh ad creative, and maximize customer lifetime value.',
  },
  {
    id: 3,
    title: "A B2B Agency's Guide to Generating High-Quality Leads",
    category: 'Lead Gen',
    date: 'November 22, 2022',
    readTime: '6 min read',
    icon: '🎯',
    snippet:
      'Master high-conversion funnel design, targeted outbound strategies, and automated lead scoring to convert enterprise prospects.',
    content:
      'Generating lead volume is easy; closing qualified revenue is hard. Discover the 5-stage B2B lead generation architecture that drives pipeline growth through hyper-targeted account-based marketing, value-first content offers, and automated CRM enrichment.',
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="blog section" id="blog">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="badge inline-flex items-center gap-2">
            <span>📰</span> INSIGHTS & BLOG
          </div>
          <h2 className="section-title">Latest Articles & Resources</h2>
          <p className="section-subtitle">
            Data-backed strategies, growth guides, and marketing insights to scale your business.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="blog-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="blog-card-header">
                <span className="blog-card-icon">{post.icon}</span>
                <span className="blog-card-category">{post.category}</span>
              </div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-snippet">{post.snippet}</p>
              <div className="blog-card-meta">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <button
                className="blog-card-link"
                onClick={() => setSelectedPost(post)}
              >
                Read Article <span className="arrow">→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="blog-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="blog-modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="blog-modal-close"
                onClick={() => setSelectedPost(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="badge inline-flex items-center gap-2 mb-3">
                <span>{selectedPost.icon}</span> {selectedPost.category}
              </div>
              <h2 className="blog-modal-title">{selectedPost.title}</h2>
              <div className="blog-card-meta mb-4">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <p className="blog-modal-body">{selectedPost.content}</p>
              <div className="blog-modal-footer">
                <button
                  className="btn-primary"
                  onClick={() => setSelectedPost(null)}
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
