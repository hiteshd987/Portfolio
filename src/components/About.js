"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-4 text-gray-900 dark:text-white" id="about">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I am an AI/ ML Engineer building and researching about various domains through AI.
        </p>
      </motion.div>
    </section>
  );
}