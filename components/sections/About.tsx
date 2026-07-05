'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCalendar, FaGlobe, FaLaptopCode, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { Layout, Code, Layers, Box, Database, Cpu, Terminal } from 'lucide-react';

const careerJourney = [
  {
    year: '2023 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of scalable web applications using Next.js, React, and Node.js. Mentoring junior developers and implementing best practices.',
  },
  {
    year: '2021 - 2023',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Developed and maintained multiple client projects using MERN stack. Implemented RESTful APIs and optimized database performance.',
  },
  {
    year: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'WebCraft Agency',
    description: 'Created responsive and interactive user interfaces using React and Vue.js. Collaborated with design team to implement pixel-perfect designs.',
  },
];

const education = [
  {
    year: "2015 - 2019",
    degree: "Bachelor of Technology (Mechanical Engineering)",
    institution: "Millia Institute of Technology",
    location: "Purnea, Bihar, India",
    description:
      "Completed Bachelor's degree in Mechanical Engineering and developed strong analytical and problem-solving skills.",
    icon: FaGraduationCap,
  },
  {
    year: "2023 - Present",
    degree: "Full Stack Web Development",
    institution: "Self Learning & Professional Projects",
    location: "Delhi, India",
    description:
      "Learning and building modern web applications using React, Next.js, TypeScript, Node.js, Express.js, MongoDB, and other modern technologies.",
    icon: FaLaptopCode,
  },
];

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  
  // React Icons
  if (techLower.includes('react')) return FaReact;
  if (techLower.includes('node')) return FaNodeJs;
  if (techLower.includes('git')) return FaGitAlt;
  if (techLower.includes('github')) return FaGithub;
  if (techLower.includes('figma')) return FaFigma;
  
  // Lucide Icons
  if (techLower.includes('next')) return Layout;
  if (techLower.includes('type')) return Code;
  if (techLower.includes('tailwind')) return Layers;
  if (techLower.includes('motion')) return Box;
  if (techLower.includes('mongo')) return Database;
  if (techLower.includes('postgres')) return Database;
  if (techLower.includes('express')) return Terminal;
  if (techLower.includes('api')) return Cpu;
  if (techLower.includes('vs code')) return Code;
  if (techLower.includes('postman')) return Terminal;
  
  // Default
  return Code;
};

const techStack = [
  { category: 'Frontend', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
  { category: 'Tools', technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'] },
];

const personalInfo = [
  { icon: FaUser, label: 'Name', value: 'Asif Zamil' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Delhi, India' },
  { icon: FaEnvelope, label: 'Email', value: 'asifzamil07@gmail.com' },
  { icon: FaPhone, label: 'Phone', value: '+91 6201682653' },
  { icon: FaCalendar, label: 'Experience', value: '2+ Years' },
  { icon: FaGlobe, label: 'Languages', value: 'English, Hindi & Urdu' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my journey, skills, and what drives me as a developer
          </p>
        </motion.div>

        {/* Professional Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
              <FaCode className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Introduction</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I&apos;m a passionate Full Stack Developer with over 2+ years of experience building modern web applications. I specialize in creating scalable, performant, and user-centric solutions using cutting-edge technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in tech started with a curiosity about how things work on the web, which evolved into a deep passion for crafting exceptional digital experiences. I believe in writing clean, maintainable code and continuously learning to stay ahead in this ever-evolving field.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-8 mb-12">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-lg">
                  <FaGraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Education & Learning Journey</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The foundation of my academic background and technical growth
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full hidden md:block" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {education.map((item, index) => {
                  const Icon = item.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.3, ease: 'easeOut' }}
                      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* Content Card */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.1, duration: 0.3, ease: 'easeOut' }}
                        whileHover={{ 
                          y: -4,
                          boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                        }}
                        className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'} text-left`}
                      >
                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300">
                          {/* Year */}
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.2 }}
                            className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold rounded-full mb-3 shadow-sm"
                          >
                            {item.year}
                          </motion.span>

                          {/* Degree */}
                          <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.3 }}
                            className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight tracking-tight"
                          >
                            {item.degree}
                          </motion.h3>

                          {/* Institution */}
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.35 }}
                            className="text-indigo-600 dark:text-indigo-400 font-semibold mb-1 text-sm"
                          >
                            {item.institution}
                          </motion.p>

                          {/* Location */}
                          {item.location && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.375 }}
                              className="text-gray-400 dark:text-gray-500 text-sm mb-3"
                            >
                              {item.location}
                            </motion.p>
                          )}

                          {/* Description */}
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.4 }}
                            className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
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
                          transition={{ delay: index * 0.2 + 0.15, duration: 0.3, ease: 'easeOut' }}
                          whileHover={{ scale: 1.05 }}
                          className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-800"
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
            <div className="md:hidden space-y-6 mt-12">
              {education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3, ease: 'easeOut' }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.1, duration: 0.3, ease: 'easeOut' }}
                      whileHover={{ scale: 1.05 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-md border-4 border-white dark:border-gray-800"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.15, duration: 0.3, ease: 'easeOut' }}
                      whileHover={{ 
                        y: -4,
                        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                      }}
                      className="flex-1 bg-gray-50 dark:bg-gray-900 p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
                    >
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold rounded-full mb-2 shadow-sm">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight tracking-tight">{item.degree}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-1 text-sm">{item.institution}</p>
                      {item.location && (
                        <p className="text-gray-400 dark:text-gray-500 text-sm mb-2">{item.location}</p>
                      )}
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Technical Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-md">
              <FaCode className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Technical Overview</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStack.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.3, ease: 'easeOut' }}
                whileHover={{ 
                  y: -3,
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                }}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => {
                    const TechIcon = getTechIcon(tech);
                    return (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 + techIndex * 0.05, duration: 0.25, ease: 'easeOut' }}
                        whileHover={{ 
                          scale: 1.02,
                          y: -2,
                        }}
                        className="px-2.5 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium border border-indigo-200 dark:border-indigo-700/50 shadow-sm hover:shadow-md transition-all duration-250 cursor-default h-8 flex items-center gap-1.5"
                      >
                        <TechIcon className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{tech}</span>
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
              <FaUser className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <info.icon className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{info.label}</span>
                </div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
