"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  { 
    name: "Datahack", 
    desc: [ "Collaborated in a team to address real-world challenges in sports innovation using AI/ML, computer vision, and generative music tools.",
            "Applied Alibaba Cloud AI stack (InspireMusic, AnalyticDB) to build scalable solutions for data analysis, model training, and deployment.",
            "Researched and prototyping methods for music generation aligned with figure skating performance, ensuring emotional impact and copyright safety.",
            "Analyzing video footage and movement patterns using computer vision to map choreography to rhythm, beat, and mood in generated music.",
            "Working with mentors and domain experts in music information retrieval, AI/ML, and multimedia analysis to refine technical and creative approaches."
     ], 
    img: "/images/datahack-group.jpg" 
  },
  {
    name: "DnD Spell Generator",
    desc: [
      "Fine-tuned Llama 3.2 in Python using Open5e official spells and homebrew spells to produce balanced, rule-compliant Dungeons & Dragons spells.",
      "Built an interactive NPC system in Unity using GPT 4.1 to dynamically generate D&D spells. ",
      "Designed a human evaluation survey to guess spells between the mix of human and AI generated.",
      "Applied BLEU and BERTScore for quality assessment"
    ],
    img: "/images/Dnd-spell.png" 
  },
  { 
    name: "Fleet Management",
    desc: [
      "Developed key modules for real-time vehicle tracking, trip booking, and bid management for a Dubai Technology fleet management platform.",
      "Built reusable UI components using Ant Design and implemented Redux for scalable and maintainable state management.",
      "Collaborated in Agile sprints with cross-functional teams, using Git and Jira to deliver high-quality, testable code.",
      "Improved operational eﬃciency for logistics clients by delivering a seamless and user-friendly fleet management and bidding platform."
    ],
    img: "/images/fleet-management.png" },
];

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevProject = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const nextProject = () =>
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <section
      className="py-20 relative overflow-hidden text-white"
      id="projects"
    >
      {/* -----------------------------
          Blurred mesh / blob background
         ----------------------------- */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

  <div className="absolute w-[40rem] h-[40rem] -left-40 -top-24 bg-purple-500 rounded-full opacity-20 filter blur-3xl transform -rotate-12" />


  <div className="absolute w-[36rem] h-[36rem] -right-32 -bottom-20 bg-pink-500 rounded-full opacity-18 filter blur-3xl transform rotate-12" />


  <div className="absolute w-[48rem] h-[48rem] left-1/2 top-1/3 -translate-x-1/2 bg-blue-400 rounded-full opacity-10 filter blur-4xl" />


  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 opacity-40" />
</div>

      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto"> */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="relative rounded-xl overflow-hidden cursor-pointer
                       bg-white/8 border border-white/10 backdrop-blur-md
                       shadow-lg transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => openModal(idx)}
          >
            {/* Image: cover the card area */}
            {/* <div className="w-full h-80">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div> */}

            <div className="w-full h-80 relative">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover rounded-t-lg" // keeps aspect & rounded corners if you want
                priority={false} // set to true for above-the-fold images
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="font-bold text-xl text-white">{project.name}</h3>
              <p className="mt-2 text-gray-200">
                {Array.isArray(project.desc) ? project.desc[0] + "..." : project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-10 w-11/12 md:w-3/4 max-w-3xl flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-xl font-bold transition"
                onClick={closeModal}
              >
                &times;
              </button>

              {/* Modal content */}
              <h3 className="font-bold text-2xl md:text-3xl mb-6 text-gray-900 dark:text-gray-100">
                {projects[currentIndex].name}
              </h3>

              <div className="max-h-[60vh] overflow-y-auto px-2 w-full">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 text-left">
                  {projects[currentIndex].desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Navigation arrows */}
              <div className="flex justify-between items-center w-full mt-8">
                <button
                  className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-xl font-bold shadow-md transition text-gray-800 dark:text-gray-200"
                  onClick={prevProject}
                >
                  &#8592; Prev
                </button>

                <button
                  className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-xl font-bold shadow-md transition text-gray-800 dark:text-gray-200"
                  onClick={nextProject}
                >
                  Next &#8594;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
