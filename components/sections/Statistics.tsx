'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaProjectDiagram, FaCode, FaGithub, FaClock } from 'react-icons/fa';

const statistics = [
  {
    icon: FaProjectDiagram,
    value: 10,
    label: 'Projects Completed',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaCode,
    value: 15,
    label: 'Technologies Learned',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FaGithub,
    value: 20,
    label: 'GitHub Repositories',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaClock,
    value: 2000,
    label: 'Coding Hours',
    color: 'from-orange-500 to-red-500',
  },
];

function CountUp({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-yellow-300">Statistics</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Numbers that reflect my dedication and growth
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:border-white/40 transition-all"
              >
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ rotate: 360 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-white to-white/80 rounded-full mb-6"
                >
                  <Icon className="w-8 h-8 text-indigo-600" />
                </motion.div>

                {/* Count */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-5xl sm:text-6xl font-bold text-white mb-2"
                >
                  <CountUp value={stat.value} duration={2} />
                  {stat.value >= 1000 && '+'}
                </motion.div>

                {/* Label */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-white/90 font-medium"
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
