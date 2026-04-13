"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "system",
  setTheme: () => {},
  resolved: "dark",
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("system");
  const [resolved, setResolved] = useState("dark");

  // On mount, load stored preference
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored) setTheme(stored);
  }, []);

  // Apply theme class to <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const active = theme === "system" ? (systemDark ? "dark" : "light") : theme;

    setResolved(active);
    root.classList.toggle("dark", active === "dark");

    if (theme === "system") {
      localStorage.removeItem("portfolio-theme");
    } else {
      localStorage.setItem("portfolio-theme", theme);
    }
  }, [theme]);

  // Watch system preference changes (only when in "system" mode)
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      document.documentElement.classList.toggle("dark", e.matches);
      setResolved(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolved }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);