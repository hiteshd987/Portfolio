"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const sections = ["profile", "projects", "timeline", "skills"];

  return (
    <footer className="relative py-10 overflow-hidden text-gray-800 dark:text-gray-200">
      
      {/* ── Background Blobs (Kept exactly as you had them) ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute rounded-full transform -rotate-12
                        w-64 h-64 -left-20 -top-12 opacity-25 filter blur-2xl
                        md:w-[40rem] md:h-[40rem] md:-left-40 md:-top-24 md:opacity-25 
                        md:dark:opacity-20 md:blur-3xl
                        bg-orange-300 dark:bg-orange-400" />
        <div className="absolute rounded-full transform rotate-12
                        w-64 h-64 -right-16 -bottom-10 opacity-20 filter blur-2xl
                        md:w-[36rem] md:h-[36rem] md:-right-32 md:-bottom-20 md:opacity-20 
                        md:dark:opacity-18 md:blur-3xl
                        bg-cyan-300 dark:bg-cyan-400" />
        <div className="absolute rounded-full left-1/2 top-1/3 -translate-x-1/2
                        w-80 h-80 opacity-15 filter blur-[4rem]
                        md:w-[48rem] md:h-[48rem] md:opacity-15 md:dark:opacity-10 
                        md:blur-[6rem]
                        bg-yellow-200 dark:bg-yellow-300" />
      </div>

      {/* ── Floating Glass Footer Container ── */}
      <div className="relative mx-4 md:mx-12 lg:mx-24 px-6 md:px-12 py-10 
                      bg-white/20 dark:bg-black/30 backdrop-blur-xl 
                      border border-white/40 dark:border-white/10 
                      rounded-[2.5rem] shadow-2xl">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* 1. Brand & Tagline */}
          <div className="space-y-4">
            {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight cursor-default">
              HD<span className="text-cyan-500">.</span>
            </h3> */}
            <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                {`Master's student specializing in Deep Learning and AI. Building intelligent systems and seamless user experiences.`}
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer text-sm text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors capitalize font-medium"
                  >
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Connect & Socials */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h4>
            <div className="flex flex-col items-center md:items-start space-y-4">
              
              {/* Email Link (Update with your actual email) */}
              <a 
                href="mailto:hiteshder222@gmail.com" 
                className="flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                <FaEnvelope size={16} />
                <span>Get in touch</span>
              </a>

              {/* Social Buttons */}
              <div className="flex space-x-4 pt-1">
                <a
                  href="https://github.com/hiteshd987"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 dark:hover:bg-cyan-500 transition-all duration-300 shadow-sm"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hitesh-derkar-151aa7147/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 dark:hover:bg-cyan-500 transition-all duration-300 shadow-sm"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── Divider Line ── */}
        <div className="w-full h-px bg-gray-300/50 dark:bg-gray-700/50 my-8" />

        {/* ── Bottom Copyright Bar ── */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-600 dark:text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Hitesh Derkar. All rights reserved.</p>
          <p>
            Designed & Built with <span className="text-cyan-500 animate-pulse">♥</span>
          </p>
        </div>

      </div>
    </footer>
  );
}