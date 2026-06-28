'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaAward } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    name: 'Full Stack Web Development',
    organization: 'Udacity',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop',
    downloadUrl: '#',
  },
  {
    id: 2,
    name: 'React - The Complete Guide',
    organization: 'Udemy',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    downloadUrl: '#',
  },
  {
    id: 3,
    name: 'MongoDB Developer',
    organization: 'MongoDB University',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop',
    downloadUrl: '#',
  },
  {
    id: 4,
    name: 'AWS Cloud Practitioner',
    organization: 'Amazon Web Services',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    downloadUrl: '#',
  },
  {
    id: 5,
    name: 'Advanced JavaScript',
    organization: 'freeCodeCamp',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=600&fit=crop',
    downloadUrl: '#',
  },
  {
    id: 6,
    name: 'TypeScript Masterclass',
    organization: 'Pluralsight',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
    downloadUrl: '#',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FaAward className="w-16 h-16 text-white opacity-50" />
                </motion.div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                {/* Certificate Name */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {cert.name}
                </motion.h3>

                {/* Organization */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-gray-600 dark:text-gray-400 mb-6 flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                  {cert.organization}
                </motion.p>

                {/* Download Button */}
                <motion.a
                  href={cert.downloadUrl}
                  download
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:from-indigo-600 hover:to-purple-600 transition-all"
                >
                  <FaDownload className="w-4 h-4" />
                  Download Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
