'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Asif-india' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/asif-zamil-a07b83206' },
  { name: 'X', icon: FaXTwitter, href: null },
  { name: 'Email', icon: FaEnvelope, href: 'mailto:asifzamil07@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;

              if (!link.href) {
                return (
                  <span
                    key={link.name}
                    className="text-gray-600 dark:text-gray-400 cursor-default"
                    aria-label={`${link.name} - coming soon`}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                );
              }

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
