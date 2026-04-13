"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { resolved } = useTheme();
  const sections = ["profile", "projects", "timeline", "skills"];

  useEffect(() => {
    const handleScroll = () => {
      // THE FIX: Instead of 50px, we check if we've scrolled past ~90% of the viewport height.
      // This ensures the color only changes as you leave the Profile background image.
      const threshold = window.innerHeight * 0.9; 
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text color stays white with a shadow while on the Profile image.
  // Once we hit Projects, it becomes dark in light mode or stays white in dark mode.
  const linkTextColor = scrolled 
    ? "text-gray-800 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400" 
    : "text-white hover:text-cyan-200 drop-shadow-lg";

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-700 
        ${scrolled 
          ? "bg-white/40 dark:bg-black/40 backdrop-blur-xl py-3 shadow-sm border-b border-gray-200/20" 
          : "bg-transparent py-6"
        }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logo */}
        <Link to="profile" smooth={true} className="cursor-pointer">
          <motion.h1
            className={`font-bold text-2xl tracking-tighter transition-colors duration-500
              ${scrolled ? "text-cyan-600 dark:text-cyan-400" : "text-white drop-shadow-md"}`}
            whileHover={{ scale: 1.05 }}
          >
            HD<span className={scrolled ? "text-gray-900 dark:text-white" : "text-cyan-300"}>.</span>
          </motion.h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-semibold">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className={`cursor-pointer relative group transition-colors duration-500 ${linkTextColor}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all group-hover:w-full
                ${scrolled ? "bg-cyan-500" : "bg-white"}`} 
                style={{ width: '0%' }}
              />
            </Link>
          ))}
          <ThemeToggle scrolled={scrolled} />
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle scrolled={scrolled} />
          <MobileMenu sections={sections} scrolled={scrolled} />
        </div>
      </div>
    </motion.nav>
  );
}

/* ── Theme Toggle (Responsive Design) ──────────────── */
function ThemeToggle({ scrolled }) {
  const { theme, setTheme } = useTheme();

  const cycle = () => {
    const next = { system: "light", light: "dark", dark: "system" };
    setTheme(next[theme] ?? "system");
  };

  const config = {
    system: { icon: <FaDesktop size={14} />, label: "Auto" },
    light:  { icon: <FaSun    size={14} />, label: "Light" },
    dark:   { icon: <FaMoon   size={14} />, label: "Dark" },
  };

  const { icon, label } = config[theme] ?? config.system;

  return (
    <button
      onClick={cycle}
      className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 border
        ${scrolled 
          ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400" 
          : "bg-white/10 border-white/20 text-white hover:bg-white/20"
        } text-xs font-bold uppercase tracking-wider`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

/* ── Mobile Menu ─────────────────────────────────── */
function MobileMenu({ sections, scrolled }) {
  const [open, setOpen] = useState(false);

  // Hamburger lines adapt their color to the background
  const burgerColor = scrolled || open ? "bg-gray-800 dark:bg-white" : "bg-white";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col w-6 h-5 justify-between items-end focus:outline-none z-50 relative"
      >
        <span className={`h-0.5 rounded-full transition-all duration-300 ${open ? "w-full rotate-45 translate-y-2" : "w-full"} ${burgerColor}`} />
        <span className={`h-0.5 rounded-full transition-all duration-300 ${open ? "opacity-0" : "w-2/3"} ${burgerColor}`} />
        <span className={`h-0.5 rounded-full transition-all duration-300 ${open ? "w-full -rotate-45 -translate-y-2.5" : "w-full"} ${burgerColor}`} />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 top-12 w-56 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-3 z-40"
        >
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="block w-full text-left py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-600 rounded-xl font-medium transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}