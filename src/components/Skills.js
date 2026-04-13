"use client";

import { motion } from "framer-motion";

const skills = [
  "Machine Learning", "Deep Learning", "Computer Vision", "Gen AI", "Python",
  "React.js", "Next.js", "JavaScript", "TypeScript", "Redux",
  "Git", "Docker", "Storybook", "Jira",
];

export default function Skills() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      id="skills"
    >
      {/* ── Blob background ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[40rem] h-[40rem] -left-40 -top-24
                        bg-orange-300 dark:bg-orange-400
                        rounded-full opacity-25 dark:opacity-20
                        filter blur-3xl transform -rotate-12" />
        <div className="absolute w-[36rem] h-[36rem] -right-32 -bottom-20
                        bg-cyan-300 dark:bg-cyan-400
                        rounded-full opacity-20 dark:opacity-18
                        filter blur-3xl transform rotate-12" />
        <div className="absolute w-[48rem] h-[48rem] left-1/2 top-1/3 -translate-x-1/2
                        bg-yellow-200 dark:bg-yellow-300
                        rounded-full opacity-15 dark:opacity-10
                        filter blur-[6rem]" />
      </div>

      {/* Section heading */}
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-6 max-w-7xl mx-auto px-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="
              rounded-xl p-4 md:p-5 text-center font-semibold text-sm md:text-base
              cursor-default select-none border transition-colors duration-300
              
              /* Light Mode: Yellow Base -> Cyan Hover */
              bg-[#fff3e0] text-[#1a1a1a] border-[#ffb74d] shadow-sm
              hover:bg-[#e0f7fa] hover:text-[#00363a] hover:border-[#4dd0e1] hover:shadow-md
              
              /* Dark Mode: Transparent Base -> Subtle Transparent Hover (Overrides Blue) */
              dark:bg-transparent dark:text-white dark:border-white/20 dark:shadow-none
              dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white/40 dark:hover:shadow-none
            "
            whileHover={{ scale: 1.08, y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}