"use client";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export default function Profile() {
  const { resolved } = useTheme();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/images/profile-bg.webp"
        alt="Background"
        fill
        priority
        /* ── OPTIMIZATIONS ── */
        sizes="100vw" // Tells the browser this image always fills the full width
        quality={80}  // 80 is the sweet spot between sharp quality and low file size
        /* ────────────────── */
        className="object-cover transition-opacity duration-500"
        style={{ opacity: resolved === "dark" ? 0.6 : 0.7 }}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" 
      />

      {/* ── Overlay Layer ── */}
      {/* This layer ensures text is readable. Backdrop-blur makes it look high-end. */}
      <div 
        className={`absolute inset-0 z-0 transition-colors duration-500
          ${resolved === "dark" ? "bg-black/60" : "bg-black/30"} 
          backdrop-blur-[2px]`} 
      />

      <section
        id="profile"
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 text-white z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/profile_picc.jpg"
            alt="Profile"
            /* ── UPDATED SHAPE ── */
            /* We changed rounded-full to modern, asymmetrical corners. */
            /* We also added object-top so the face doesn't get cut off on rectangle crop */
            className="mb-6 shadow-2xl object-cover object-top mx-auto
                       
                       /* Shape definitions */
                       aspect-square ring-4 ring-white/10
                       rounded-tl-[40px] rounded-tr-[10px] rounded-br-[40px] rounded-bl-[10px]
                       
                       /* Responsive sizes */
                       w-[200px] md:w-[280px] lg:w-[320px] h-auto"
            width={320}
            height={320}
            priority
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {`Hi, I'm Hitesh Derkar`}
        </motion.h1>

        <div className="text-xl md:text-3xl font-semibold drop-shadow-md text-cyan-300">
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
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-lg md:text-xl max-w-2xl text-gray-100 font-medium leading-relaxed drop-shadow-sm"
        >
          {`Master's student in Research in Computer and Systems Engineering at Technical University Ilmenau.
            Proficient in Python and JavaScript, with a focus on Deep Learning.`}
        </motion.div>

        <div className="flex justify-center space-x-6 mt-10">
          <a
            href="https://github.com/hiteshd987"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-cyan-400 hover:scale-110 transition-all duration-300 drop-shadow-lg"
          >
            <FaGithub size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/hitesh-derkar-151aa7147/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300 drop-shadow-lg"
          >
            <FaLinkedin size={35} />
          </a>
        </div>
      </section>
    </div>
  );
}