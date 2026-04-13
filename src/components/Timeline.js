"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";
import { useTheme } from "./ThemeContext";

export default function Timeline() {
  const { resolved } = useTheme();
  const isDark = resolved === "dark";

  // ── UPDATED: Theme-aware card styles with Borders ──
  const workStyle = {
    background: isDark ? "#2d1b00" : "#fff3e0",
    color:      isDark ? "#ffd9a0" : "#1a1a1a",
    // Added themed border
    border:     isDark ? "1px solid rgba(255,152,0,0.3)" : "1px solid rgba(255,152,0,0.2)",
    boxShadow:  isDark
      ? "0 4px 24px rgba(255,152,0,0.15)"
      : "0 4px 16px rgba(255,152,0,0.12)",
  };

  const eduStyle = {
    background: isDark ? "#002b30" : "#e0f7fa",
    color:      isDark ? "#a0eff8" : "#00363a",
    // Added themed border
    border:     isDark ? "1px solid rgba(0,188,212,0.3)" : "1px solid rgba(0,188,212,0.2)",
    boxShadow:  isDark
      ? "0 4px 24px rgba(0,188,212,0.15)"
      : "0 4px 16px rgba(0,188,212,0.12)",
  };

  const workIcon = { background: "#ff9800", color: "#fff" };
  const eduIcon  = { background: "#00bcd4", color: "#fff" };

  return (
    <section
      className="py-20 relative overflow-hidden text-gray-900 dark:text-white"
      id="timeline"
    >
      {/* ── Optimized Responsive Blob background ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Cyan Blob */}
        <div className="absolute rounded-full transform -rotate-12
                        w-64 h-64 -left-20 -top-12 opacity-15 filter blur-2xl
                        md:w-[40rem] md:h-[40rem] md:-left-40 md:-top-24 md:opacity-15 
                        md:dark:opacity-20 md:blur-3xl
                        bg-cyan-400 dark:bg-cyan-500" />
        
        {/* Pink Blob */}
        <div className="absolute rounded-full transform rotate-12
                        w-64 h-64 -right-16 -bottom-10 opacity-15 filter blur-2xl
                        md:w-[36rem] md:h-[36rem] md:-right-32 md:-bottom-20 md:opacity-15 
                        md:dark:opacity-18 md:blur-3xl
                        bg-pink-300 dark:bg-pink-400" />
        
        {/* Center Teal Blob */}
        <div className="absolute rounded-full left-1/2 top-1/3 -translate-x-1/2
                        w-80 h-80 opacity-10 filter blur-[4rem]
                        md:w-[48rem] md:h-[48rem] md:blur-[6rem]
                        bg-teal-300 dark:bg-teal-400" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 dark:via-black/10 to-black/10 dark:to-black/30 opacity-40" />
      </div>

      <h2 className="text-3xl font-bold text-center mb-12">Timeline</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={workStyle}
          contentArrowStyle={{ borderRight: isDark ? '7px solid #2d1b00' : '7px solid #fff3e0' }}
          iconStyle={workIcon}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Intern</h3>
          <p>Fraunhofer IDMT (Jan 2026 – Mar 2026)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={workStyle}
          contentArrowStyle={{ borderRight: isDark ? '7px solid #2d1b00' : '7px solid #fff3e0' }}
          iconStyle={workIcon}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Research Assistant ML / AI</h3>
          <p>Fraunhofer IDMT (Sept 2025 – Dec 2025)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={eduStyle}
          contentArrowStyle={{ borderRight: isDark ? '7px solid #002b30' : '7px solid #e0f7fa' }}
          iconStyle={eduIcon}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Technical University Ilmenau</h3>
          <p>{`Master's Degree in CS (2022–2026)`}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={eduStyle}
          contentArrowStyle={{ borderRight: isDark ? '7px solid #002b30' : '7px solid #e0f7fa' }}
          iconStyle={eduIcon}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-bold">NTNU</h3>
          <p>{`Master's Degree in CS (Exchange semester 2024)`}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={workStyle}
          contentArrowStyle={{ borderRight: isDark ? '7px solid #2d1b00' : '7px solid #fff3e0' }}
          iconStyle={workIcon}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Software Engineer</h3>
          <p>Agathsya Technology pvt. ltd. (2021–2022)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={workStyle}
          contentArrowStyle={{ borderRight: isDark ? '7px solid #2d1b00' : '7px solid #fff3e0' }}
          iconStyle={workIcon}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Software Engineer</h3>
          <p>Cybage Software pvt. ltd. (2018–2021)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={eduStyle}
          contentArrowStyle={{ borderRight: isDark ? '7px solid #002b30' : '7px solid #e0f7fa' }}
          iconStyle={eduIcon}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Nagpur University</h3>
          <p>{`Bachelor's Degree in CS (2015–2018)`}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}