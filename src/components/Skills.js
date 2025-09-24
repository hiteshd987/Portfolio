// // 5. Skills.js

"use client";

import { motion } from 'framer-motion';

const skills = [
  'Machine Learning', 'Deep Learning', 'Computer Vision', 'Gen AI', 'Python',
  'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Redux', 'Git', 'Docker', 'Storybook', 'Jira'
];

export default function Skills() {
  return (
    <section
      className="py-20 relative overflow-hidden text-white"
      // px-6 md:px-16 lg:px-32 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white"
      id="skills"
    >

    <div className="absolute w-[40rem] h-[40rem] -left-40 -top-24 bg-orange-400 rounded-full opacity-20 filter blur-3xl transform -rotate-12" />
<div className="absolute w-[36rem] h-[36rem] -right-32 -bottom-20 bg-pink-300 rounded-full opacity-18 filter blur-3xl transform rotate-12" />
<div className="absolute w-[48rem] h-[48rem] left-1/2 top-1/3 -translate-x-1/2 bg-yellow-200 rounded-full opacity-10 filter blur-4xl" />

      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-8 max-w-7xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="
              rounded-xl p-4 md:p-6 text-center font-medium text-white
              shadow-lg border border-white/20
              bg-white/10 backdrop-blur-lg
              hover:bg-white/20 hover:scale-110 transition
            "
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
