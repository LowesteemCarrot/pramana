'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navigationLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Campaigns', href: '/#case-study' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Privacy', href: '#' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'Twitter/X', href: 'https://x.com' },
  { name: 'Youtube', href: 'https://youtube.com' },
];

const blogResources = [
  {
    id: 1,
    title: "Supercharge Your Marketing Agency's Sustainable Growth",
    date: 'November 24, 2024',
    href: '/#blog',
  },
  {
    id: 2,
    title: 'Launching Our New AI Marketing Automation Suite',
    date: 'December 28, 2023',
    href: '/#blog',
  },
  {
    id: 3,
    title: "A B2B Agency's Guide to Generating High-Quality Leads",
    date: 'November 22, 2022',
    href: '/#blog',
  },
];

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        {/* Large Hero Statement Linking to Contact */}
        <Link href="/contact" style={{ textDecoration: 'none', display: 'block' }}>
          <motion.div
            className="footer-hero-text"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ cursor: 'pointer' }}
          >
            GET IN <span className="gradient-text">TOUCH</span>
          </motion.div>
        </Link>

        {/* 3-Column Grid */}
        <motion.div
          className="footer-columns"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Column 1: Navigation */}
          <motion.div className="footer-column" variants={columnVariants}>
            <h3 className="footer-column-title">NAVIGATION</h3>
            <ul>
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Socials */}
          <motion.div className="footer-column" variants={columnVariants}>
            <h3 className="footer-column-title">SOCIALS</h3>
            <ul>
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div className="footer-column" variants={columnVariants}>
            <h3 className="footer-column-title">RESOURCES</h3>
            <div>
              {blogResources.map((post) => (
                <div key={post.id} className="resource-item">
                  <Link href={post.href}>{post.title}</Link>
                  <span className="resource-date">{post.date}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom Bar */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>© 2024 PRAMANA. All rights reserved.</div>
          <div>Designed with ♥</div>
        </motion.div>
      </div>
    </footer>
  );
}
