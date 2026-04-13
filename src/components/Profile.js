"use client";

import { Parallax } from "react-parallax";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export default function Profile() {
  const { resolved } = useTheme();

  return (
    <Parallax bgImage="/images/profile-bg.jpg" strength={300} id="profile-parallax">
      {/* Overlay: darker in light mode for text contrast, lighter in dark mode */}
      <div
        className={`absolute inset-0 transition-all duration-300 pointer-events-none
          ${resolved === "light" ? "bg-black/50" : "bg-black/25"}`}
        style={{ zIndex: 0 }}
      />

      <section
        id="profile"
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 text-white"
        style={{ zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/profile_picc.jpg"
            alt="Profile"
            // We use fixed brackets for exact sizing: 200px on mobile, 280px on tablets, 320px on desktops
            className="rounded-full mb-6 shadow-lg ring-4 ring-white/30 object-cover mx-auto
                       w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px]"
            width={320}  // Increased to match the max desktop size so it stays sharp
            height={320} // Increased to match the max desktop size so it stays sharp
            priority
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {`Hi, I'm Hitesh Derkar`}
        </motion.h1>

        <div className="text-xl md:text-2xl font-medium drop-shadow">
          <Typewriter
            options={{
              strings: ["AI / ML Enthusiast"],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 text-lg md:text-xl max-w-2xl text-gray-100 text-center drop-shadow"
        >
          {`Master's student in Research in Computer and Systems Engineering at Technical University Ilmenau.
            Proficient in Python and JavaScript, with a focus on Deep Learning.`}
        </motion.div>

        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://github.com/hiteshd987"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:scale-110 transition-transform drop-shadow"
          >
            <FaGithub size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/hitesh-derkar-151aa7147/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:scale-110 transition-transform drop-shadow"
          >
            <FaLinkedin size={35} />
          </a>
        </div>
      </section>
    </Parallax>
  );
}