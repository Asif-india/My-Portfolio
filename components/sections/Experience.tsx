'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaReact, FaServer, FaRocket } from 'react-icons/fa';

const timelineData = [
  {
    year: '2021 - 2023',
    title: 'HVAC Project Engineer',
    icon: FaGraduationCap,
    description: 'Managed HVAC project execution, site coordination, technical documentation, and quality compliance while ensuring timely project delivery.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2023',
    title: 'Learning Web Development',
    icon: FaLaptopCode,
    description: 'Started self-learning web development. Mastered HTML, CSS, and JavaScript fundamentals. Built first static websites.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '2024',
    title: 'React Development',
    icon: FaReact,
    description: 'Deepened knowledge in React ecosystem. Built multiple single-page applications with state management and routing.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2025',
    title: 'Full Stack Development',
    icon: FaServer,
    description: 'Expanded to backend development with Node.js and Express. Integrated databases and built RESTful APIs.',
    color: 'from-orange-500 to-red-500',
  },
  {
    year: '2026 - Present',
    title: 'Real Projects',
    icon: FaRocket,
    description: 'Working on real-world projects and delivering production-ready applications. Continuously learning and improving skills.',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The path that led me to become a Full Stack Developer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'} text-left`}
                  >
                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                      {/* Year */}
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                        className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-3 text-left"
                      >
                        {item.year}
                      </motion.span>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
                      >
                        {item.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Central Icon */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.15 }}
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"

                    >
                      <Icon className="text-white text-3xl" />
                    </motion.div>
                  </div>

                  {/* Empty Space for Layout */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8 mt-12">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-5 rounded-xl shadow-lg">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
