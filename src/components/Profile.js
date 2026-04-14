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
        unoptimized={true}
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
        /* Swapped 'py-12' for a massive top padding (pt-28/32/40) 
           to guarantee the image never touches the fixed navbar. */
        className="relative min-h-screen flex flex-col items-center justify-center text-center 
                   px-4 pb-12 text-white z-10 w-full
                   pt-28 md:pt-32 lg:pt-36 xl:pt-40
                   landscape:pt-24 lg:landscape:pt-36"
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
                       
                       /* Image Scaling */
                       w-[180px] md:w-[240px] lg:w-[240px] xl:w-[260px] 2xl:w-[320px]
                       landscape:w-[130px] 
                       lg:landscape:w-[240px] xl:landscape:w-[260px] 2xl:landscape:w-[320px]
                       
                       /* Spacing */
                       mb-6 md:mb-6 lg:mb-6 xl:mb-8 2xl:mb-10 
                       landscape:mb-2 lg:landscape:mb-6 xl:landscape:mb-8 2xl:landscape:mb-10 
                       h-auto"
            width={320}
            height={320}
            priority
          />
        </motion.div>

        {/* ── 1. The Name (Largest) ── */}
        <motion.h1
          className="font-bold tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]
                     /* Portrait & Base Sizes */
                     text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-7xl 
                     /* Landscape & Laptop Restore */
                     landscape:text-2xl lg:landscape:text-4xl xl:landscape:text-5xl 2xl:landscape:text-7xl
                     
                     mb-4 md:mb-4 lg:mb-4 xl:mb-6 2xl:mb-8
                     landscape:mb-1 lg:landscape:mb-4 xl:landscape:mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {`Hi, I'm Hitesh Derkar`}
        </motion.h1>

        {/* ── 2. Flashing Text (Medium) ── */}
        <div className="font-semibold drop-shadow-md text-cyan-300
                        /* Subtitle Sizes */
                        text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-4xl 
                        landscape:text-lg lg:landscape:text-xl xl:landscape:text-2xl 2xl:landscape:text-4xl">
          <Typewriter
            options={{
              strings: ["AI / ML Enthusiast"],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>

        {/* ── 3. Description (Smallest) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-100 font-medium leading-relaxed drop-shadow-sm mx-auto
                     /* Spacing */
                     mt-6 md:mt-8 lg:mt-6 xl:mt-8 2xl:mt-12
                     landscape:mt-2 lg:landscape:mt-6 xl:landscape:mt-8 2xl:landscape:mt-12
                     
                     /* THE FIX: Shrunk Text Sizes for Laptops */
                     text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl 
                     landscape:text-xs lg:landscape:text-sm xl:landscape:text-base 2xl:landscape:text-xl
                     
                     /* Narrowed Max Width so small text doesn't stretch too far */
                     max-w-xl md:max-w-2xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl 
                     landscape:max-w-lg lg:landscape:max-w-xl xl:landscape:max-w-2xl 2xl:landscape:max-w-4xl"
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