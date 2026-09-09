'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Benefits', href: '/#benefits' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      className="navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        {/* Logo */}
        <Link
          href="/"
          className="navbar-logo"
          style={{ fontWeight: 700, letterSpacing: '2px' }}
        >
          PRAMANA
        </Link>

        {/* Center Nav Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="navbar-cta">
          <Link href="/contact" className="btn-primary">
            Get Started Now
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            style={{
              transform: mobileMenuOpen
                ? 'rotate(45deg) translate(5px, 5px)'
                : 'none',
              transition: 'all 0.3s ease',
            }}
          />
          <span
            style={{
              opacity: mobileMenuOpen ? 0 : 1,
              transition: 'all 0.2s ease',
            }}
          />
          <span
            style={{
              transform: mobileMenuOpen
                ? 'rotate(-45deg) translate(5px, -5px)'
                : 'none',
              transition: 'all 0.3s ease',
            }}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              overflow: 'hidden',
              background: 'rgba(8, 12, 20, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div
              className="container"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '20px 24px 28px',
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    padding: '6px 0',
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  justifyContent: 'center',
                  marginTop: '8px',
                  width: '100%',
                }}
              >
                Get Started Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
