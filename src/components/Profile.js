"use client";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export default function Profile() {
  const { resolved } = useTheme();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/profile-bg.webp"
        alt="Background"
        fill
        priority
        sizes="100vw"
        quality={80}
        className="object-cover transition-opacity duration-500"
        style={{ opacity: resolved === "dark" ? 0.6 : 0.7 }}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" 
      />

      <div 
        className={`absolute inset-0 z-0 transition-colors duration-500
          ${resolved === "dark" ? "bg-black/60" : "bg-black/30"} 
          backdrop-blur-[2px]`} 
      />

      <section
        id="profile"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 text-white z-10 w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/profile_picc.jpg"
            alt="Profile"
            className="shadow-2xl object-cover object-top mx-auto aspect-square ring-4 ring-white/10
                       rounded-tl-[40px] md:rounded-tl-[60px] 
                       rounded-tr-[10px] md:rounded-tr-[15px] 
                       rounded-br-[40px] md:rounded-br-[60px] 
                       rounded-bl-[10px] md:rounded-bl-[15px]
                       
                       /* ── THE FIX: Explicit Variant Stacking ── */
                       /* 1. Base Sizes (Portrait) */
                       w-[180px] md:w-[280px] lg:w-[300px] xl:w-[360px]
                       /* 2. Shrink for ALL landscape screens */
                       landscape:w-[130px] 
                       /* 3. Force Desktop & Laptops back to large size */
                       lg:landscape:w-[300px] xl:landscape:w-[300px]
                       
                       mb-6 md:mb-8 lg:mb-10 
                       landscape:mb-2 lg:landscape:mb-10 
                       h-auto"
            width={420}
            height={420}
            priority
          />
        </motion.div>

        <motion.h1
          className="font-bold tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]
                     /* Portrait & Base Sizes */
                     text-4xl md:text-6xl lg:text-7xl xl:text-8xl 
                     /* Landscape Shrink -> Desktop Restore */
                     landscape:text-2xl lg:landscape:text-5xl xl:landscape:text-5xl
                     
                     mb-4 md:mb-6 landscape:mb-1 lg:landscape:mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {`Hi, I'm Hitesh Derkar`}
        </motion.h1>

        <div className="font-semibold drop-shadow-md text-cyan-300
                        text-xl md:text-3xl lg:text-4xl 
                        landscape:text-lg lg:landscape:text-3xl">
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
          className="text-gray-100 font-medium leading-relaxed drop-shadow-sm mx-auto
                     mt-6 md:mt-10 lg:mt-12
                     landscape:mt-2 lg:landscape:mt-12
                     
                     text-base md:text-xl lg:text-2xl 
                     landscape:text-sm lg:landscape:text-xl
                     
                     max-w-2xl lg:max-w-4xl 
                     landscape:max-w-xl lg:landscape:max-w-4xl"
        >
          {`Master's student in Research in Computer and Systems Engineering at Technical University Ilmenau.
            Proficient in Python and JavaScript, with a focus on Deep Learning.`}
        </motion.div>

        <div className="flex justify-center space-x-6 md:space-x-8 
                        mt-8 md:mt-12 landscape:mt-4 lg:landscape:mt-12">
          <a
            href="https://github.com/hiteshd987"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-cyan-400 hover:scale-110 transition-all duration-300 drop-shadow-lg"
          >
            <FaGithub className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 
                                 landscape:w-6 landscape:h-6 lg:landscape:w-12 lg:landscape:h-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/hitesh-derkar-151aa7147/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300 drop-shadow-lg"
          >
            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 
                                   landscape:w-6 landscape:h-6 lg:landscape:w-12 lg:landscape:h-12" />
          </a>
        </div>
      </section>
    </div>
  );
}