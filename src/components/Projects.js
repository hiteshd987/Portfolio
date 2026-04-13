"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projectsList = [

  {

    name: "Automatic Music Simplification",

    desc: [

      "Developed an end-to-end Machine Learning pipeline to automate the difficulty reduction of highly syncopated drum and bass charts, breaking down technical barriers for novice musicians.",

      "Collaborated with the Semantic Music Technologies group at Fraunhofer IDMT to frame rhythmic simplification as a sequence-to-sequence symbolic translation task.",

      "Engineered a custom data pipeline to ingest, parse, and quantize real-world musical scores from the Enchor.us database into 16th-note multi-hot encoded tensors.",

      "Trained and evaluated Bi-LSTM, Transformer, and 1D U-Net architectures to analyze their distinct inductive biases in mimicking human musical abstraction.",

      "Demonstrated that the 1D U-Net's hierarchical feature compression successfully outperformed other models, preserving structural downbeats while intelligently thinning dense note clusters."

    ],

    img: "/images/music_simplification.webp",

  },

{
    name: "Datahack",
    desc: [
      // Notice the <> at the start and </> at the end of this item!
      <>
        Won ThinkSport <a href="https://www.idmt.fraunhofer.de/en/Press_and_Media/press_releases/2026/solution-for-generating-movement-synchronized-and-license-free-music.html"
         target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline font-semibold">DataHack challenge</a> by architecting an end-to-end AI pipeline that autonomously synchronizes generative music with Olympics figure skating choreography via Computer Vision and Graph Convolutional Networks (MDR-GCN).
      </>,
      "Engineered a skeletal tracking pipeline utilizing OpenPose to isolate performer keypoints and process 500-frame video chunks, accurately predicting and timestamping complex moves (e.g., Axels, Sit Spins) into structured JSON data.",
      "Developed a dynamic prompt-generation engine that translates timestamped physical movements into contextual musical attributes, algorithmically mapping jumps to dramatic orchestrations and spins to flowing string melodies.",
      "Integrated the InspireMusic generative model using text-to-music and continuation modes to seamlessly chain 45-second audio segments, outputting continuous, high-fidelity (48kHz) synchronized soundtracks for full-length performances.",
    ],
    img: "/images/datahack.webp",
  },

  {

    name: "D&D Spell Generator",

    desc: [

      "Fine-tuned LLaMA 3.2 using LoRA (via Hugging Face transformers, peft, and trl) on consumer GPUs, training the model on Open5e SRD and homebrew data to generate balanced, rule-compliant Dungeons & Dragons spells.",

      "Architected a 4-stage automated data pipeline to fetch raw API data, synthesize design rationales using the OpenAI API, and format deduplicated records into a high-quality, instruction-tuned conversational dataset.",

      "Built an interactive NPC system in Unity utilizing GPT-4.1 to dynamically generate and deliver contextual, on-the-fly D&D spells within a live game environment.",

      "Validated generation quality quantitatively using BLEU and BERTScore metrics, and designed a Turing-style human evaluation survey to successfully benchmark the AI's output against human-authored content.",

    ],

    img: "/images/Dnd-spell.webp",

  },

  {

    name: "Fleet Management",

    desc: [

      "Prototyped a Predictive ETA and Route Optimization model leveraging historical GPS and traffic data to minimize delivery delays for a Dubai-based logistics and fleet management platform.",

      "Engineered an AI-driven Smart Bidding system using dynamic pricing algorithms to automate bid scoring, recommend optimal pricing, and detect anomalies across complex, role-based user hierarchies.",

      "Architected scalable front-end systems utilizing JavaScript, Redux, and Ant Design to build reusable UI components, effectively visualizing real-time vehicle tracking, predictive routing, and bid analytics.",

      "Streamlined operational efficiency for enterprise logistics clients by collaborating in Agile sprints to deliver a robust, user-friendly platform that optimized trip booking and fleet management workflows.",

    ],

    img: "/images/fleet-management.png",

  },

];

export default function Projects() {
  // --- State Definitions ---
  const [carouselItems, setCarouselItems] = useState(projectsList);
  const [selectedProject, setSelectedProject] = useState(null); // This was the missing piece!

  // --- Infinite Carousel Logic ---
  const nextSlide = () => {
    setCarouselItems((prev) => [...prev.slice(1), prev[0]]);
  };

  const prevSlide = () => {
    setCarouselItems((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
  };

  // --- Modal Logic ---
  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const prevModalProject = () => {
    const idx = projectsList.findIndex((p) => p.name === selectedProject.name);
    setSelectedProject(idx === 0 ? projectsList[projectsList.length - 1] : projectsList[idx - 1]);
  };

  const nextModalProject = () => {
    const idx = projectsList.findIndex((p) => p.name === selectedProject.name);
    setSelectedProject(idx === projectsList.length - 1 ? projectsList[0] : projectsList[idx + 1]);
  };

  return (
    <section className="py-20 relative overflow-hidden text-gray-900 dark:text-white" id="projects">
      
{/* ── Optimized Responsive Blob background ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        
        {/* Purple Blob: Reduced size/blur on mobile */}
        <div className="absolute rounded-full transform -rotate-12
                        w-64 h-64 -left-20 -top-12 opacity-20 filter blur-2xl
                        md:w-[40rem] md:h-[40rem] md:-left-40 md:-top-24 md:opacity-15 
                        md:dark:opacity-20 md:blur-3xl
                        bg-purple-400 dark:bg-purple-500" />
        
        {/* Pink Blob: Reduced size/blur on mobile */}
        <div className="absolute rounded-full transform rotate-12
                        w-64 h-64 -right-16 -bottom-10 opacity-18 filter blur-2xl
                        md:w-[36rem] md:h-[36rem] md:-right-32 md:-bottom-20 md:opacity-15 
                        md:dark:opacity-18 md:blur-3xl
                        bg-pink-400 dark:bg-pink-500" />
        
        {/* Center Blue Blob: Significantly lighter blur for mobile GPU */}
        <div className="absolute rounded-full left-1/2 top-1/3 -translate-x-1/2
                        w-80 h-80 opacity-10 filter blur-[4rem]
                        md:w-[48rem] md:h-[48rem] md:blur-[6rem]
                        bg-blue-300 dark:bg-blue-400" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent 
                        via-black/5 dark:via-black/10 
                        to-black/10 dark:to-black/30 opacity-40" />
      </div>

      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      {/* ── Infinite Carousel Section ── */}
      <div className="container mx-auto px-4 relative group">
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-110 backdrop-blur-sm"
          aria-label="Previous project"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-110 backdrop-blur-sm"
          aria-label="Next project"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Track */}
        <div className="overflow-hidden py-4">
          <motion.div className="flex flex-nowrap gap-6" layout>
            <AnimatePresence mode="popLayout" initial={false}>
              {carouselItems.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative rounded-xl overflow-hidden cursor-pointer bg-white/70 dark:bg-white/8 border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-lg shrink-0
                             w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                  whileHover={{ y: -5 }}
                  onClick={() => openModal(project)}
                >
                  <div className="w-full h-80 relative">
                    <Image
                        src={project.img}
                        alt={project.name}
                        fill
                        className="object-cover"
                        /* This tells the browser:
                          - Below 768px (Mobile): Image is 100% of the viewport width.
                          - Below 1200px (Tablet): Image is 50% of the viewport (2 columns).
                          - Above that (Desktop): Image is 33% of the viewport (3 columns).
                        */
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        
                        /* Lowering quality slightly for mobile performance */
                        quality={75}
                        priority={false}
                      />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">{project.name}</h3>
                      <div className="mt-2 text-gray-600 dark:text-gray-200 text-sm line-clamp-2 pointer-events-none">
                        {Array.isArray(project.desc) ? project.desc[0] : project.desc}
                      </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ── Responsive Mobile Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative rounded-2xl shadow-2xl p-5 md:p-10 w-full max-w-3xl flex flex-col items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 md:top-5 md:right-5 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-lg md:text-xl font-bold transition z-10"
                onClick={closeModal}
              >
                &times;
              </button>

              <h3 className="font-bold text-xl md:text-3xl mb-4 pr-6 text-center w-full">
                {selectedProject.name}
              </h3>

              <div className="overflow-y-auto px-2 w-full flex-grow mb-2">
                <ul className="list-disc list-inside text-sm md:text-base text-gray-700 dark:text-gray-300 space-y-3 text-left">
                  {selectedProject.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center w-full mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 shrink-0">
                <button
                  className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full font-bold shadow-md transition bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                  onClick={prevModalProject}
                >
                  &#8592; Prev
                </button>
                <button
                  className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full font-bold shadow-md transition bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                  onClick={nextModalProject}
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