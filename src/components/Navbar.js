"use client";

import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const sections = ['profile','projects','timeline','skills'
    // ,'about'
  ];

  // Detect scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed w-full z-50 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-opacity-80 backdrop-blur-md shadow-md transition-all duration-500"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4 md:px-8">
        
        {/* Logo */}
        <motion.h1
          className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Portfolio
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70} // adjust for navbar height
              className="cursor-pointer relative group text-gray-800 hover:text-white transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {/* funky underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded-full transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <MobileMenu sections={sections} />
      </div>
    </motion.nav>
  );
}

// Hamburger / Mobile Menu Component
function MobileMenu({ sections }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col w-8 h-8 justify-between items-center focus:outline-none"
      >
        <span className={`h-1 w-full bg-gray-800 rounded-lg transform transition-all duration-300 ${open ? 'rotate-45 translate-y-3' : ''}`}></span>
        <span className={`h-1 w-full bg-gray-800 rounded-lg transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
        <span className={`h-1 w-full bg-gray-800 rounded-lg transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-3' : ''}`}></span>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute right-4 top-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl shadow-xl flex flex-col space-y-4 p-6 text-white font-medium"
        >
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}
