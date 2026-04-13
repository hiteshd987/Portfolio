"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const sections = ["profile", "projects", "timeline", "skills"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          {/* Portfolio */}
        </motion.h1>

        {/* Desktop Links + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer relative group text-gray-800 hover:text-white transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded-full transition-all group-hover:w-full" />
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="flex md:hidden items-center space-x-3">
          <ThemeToggle />
          <MobileMenu sections={sections} />
        </div>
      </div>
    </motion.nav>
  );
}

/* ── Theme Toggle ────────────────────────────────── */
function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycle = () => {
    const next = { system: "light", light: "dark", dark: "system" };
    setTheme(next[theme] ?? "system");
  };

  const config = {
    system: { icon: <FaDesktop size={16} />, label: "Auto",  tip: "Following system theme — click for Light" },
    light:  { icon: <FaSun    size={16} />, label: "Light", tip: "Light mode — click for Dark" },
    dark:   { icon: <FaMoon   size={16} />, label: "Dark",  tip: "Dark mode — click for Auto" },
  };

  const { icon, label, tip } = config[theme] ?? config.system;

  return (
    <button
      onClick={cycle}
      title={tip}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                 bg-white/25 hover:bg-white/40 text-gray-800
                 text-sm font-medium transition-all duration-200 select-none"
    >
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </button>
  );
}

/* ── Mobile Hamburger ────────────────────────────── */
function MobileMenu({ sections }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col w-8 h-8 justify-between items-center focus:outline-none"
      >
        <span className={`h-1 w-full bg-gray-800 rounded-lg transform transition-all duration-300 ${open ? "rotate-45 translate-y-3" : ""}`} />
        <span className={`h-1 w-full bg-gray-800 rounded-lg transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`h-1 w-full bg-gray-800 rounded-lg transform transition-all duration-300 ${open ? "-rotate-45 -translate-y-3" : ""}`} />
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