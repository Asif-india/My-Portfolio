'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaFire, FaChartBar, FaVuejs, FaServer } from 'react-icons/fa';
import { Code, Database, Layout, Cpu, Zap, Layers, Globe, Box } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  isLive?: boolean;
  isAvailable?: boolean;
}

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  
  // React Icons
  if (techLower.includes('react')) return FaReact;
  if (techLower.includes('node')) return FaNodeJs;
  if (techLower.includes('database') || techLower.includes('mongo') || techLower.includes('mysql') || techLower.includes('postgres')) return FaDatabase;
  if (techLower.includes('firebase')) return FaFire;
  if (techLower.includes('chart')) return FaChartBar;
  if (techLower.includes('vue')) return FaVuejs;
  if (techLower.includes('express') || techLower.includes('server')) return FaServer;
  
  // Lucide Icons
  if (techLower.includes('next')) return Layout;
  if (techLower.includes('type')) return Code;
  if (techLower.includes('tailwind')) return Layers;
  if (techLower.includes('jwt') || techLower.includes('auth')) return Zap;
  if (techLower.includes('prisma')) return Database;
  if (techLower.includes('socket')) return Globe;
  if (techLower.includes('d3') || techLower.includes('data')) return Cpu;
  if (techLower.includes('motion')) return Box;
  
  // Default
  return Code;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Student Management System (MERN)',
    description: 'Production-ready MERN Student Management System featuring JWT authentication, role-based access control, student & teacher management, attendance tracking, analytics dashboard, and responsive UI.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/Asif-india/student-management-system',
    liveUrl: 'https://student-management-system-frontend-sage.vercel.app',
    isLive: true,
    isAvailable: true,
  },
  {
    id: 2,
    title: 'Employee Management System',
    description: 'Full-featured HR management system with payroll, leave management, and employee performance tracking.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    githubUrl: '',
    liveUrl: '',
    isAvailable: false,
  },
  {
    id: 3,
    title: 'Lead Management Dashboard',
    description: 'Real-time dashboard for tracking sales leads with analytics, reporting, and automated follow-up systems.',
    techStack: ['React', 'Firebase', 'Chart.js', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    githubUrl: '',
    liveUrl: '',
    isAvailable: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website with dark mode, animations, and contact form integration.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/Asif-india/My-Portfolio',
    liveUrl: 'https://my-portfolio-three-indol-17.vercel.app',
    isLive: true,
    isAvailable: true,
  },
  {
    id: 5,
    title: 'CRM Application',
    description: 'Customer Relationship Management system with contact management, deal tracking, and email automation.',
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    githubUrl: '',
    liveUrl: '',
    isAvailable: false,
  },
  {
    id: 6,
    title: 'Admin Dashboard',
    description: 'Powerful admin dashboard with data visualization, user management, and real-time analytics.',
    techStack: ['React', 'D3.js', 'Express', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    githubUrl: '',
    liveUrl: '',
    isAvailable: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.25, ease: 'easeOut' }}
              whileHover={{ 
                y: -4,
                boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
                
                {/* Permanent Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                
                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Live Badge */}
                {project.isLive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.15 }}
                    className="absolute top-3 right-3 z-10"
                  >
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-green-600 dark:text-green-400 text-[9px] font-semibold rounded-full shadow-sm">
                      <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                      Live
                    </span>
                  </motion.div>
                )}

              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight tracking-tight"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-gray-600 dark:text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.techStack.map((tech, techIndex) => {
                    const TechIcon = getTechIcon(tech);
                    return (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 + techIndex * 0.05 }}
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
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="flex gap-3 mt-auto"
                >
                  {project.isAvailable ? (
                    <>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
                        whileTap={{ scale: 0.98 }}
                        whileFocus={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-md hover:shadow-lg"
                      >
                        <FaGithub className="w-4 h-4" />
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                        whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)' }}
                        whileTap={{ scale: 0.98 }}
                        whileFocus={{ scale: 1.02, boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)' }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-md hover:shadow-lg"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    </>
                  ) : (
                    <>
                      <motion.button
                        disabled
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-medium opacity-50 cursor-not-allowed shadow-md"
                      >
                        <FaGithub className="w-4 h-4" />
                        Coming Soon
                      </motion.button>
                      <motion.button
                        disabled
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium opacity-50 cursor-not-allowed shadow-md"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Coming Soon
                      </motion.button>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
