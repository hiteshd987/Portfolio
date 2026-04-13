"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";
import { useTheme } from "./ThemeContext";

export default function Timeline() {
  const { resolved } = useTheme();
  const isDark = resolved === "dark";

  // Theme-aware card styles
  const workStyle = {
    background: isDark ? "#2d1b00" : "#fff3e0",
    color:      isDark ? "#ffd9a0" : "#1a1a1a",
    boxShadow:  isDark
      ? "0 4px 24px rgba(255,152,0,0.15)"
      : "0 4px 16px rgba(255,152,0,0.12)",
  };
  const eduStyle = {
    background: isDark ? "#002b30" : "#e0f7fa",
    color:      isDark ? "#a0eff8" : "#00363a",
    boxShadow:  isDark
      ? "0 4px 24px rgba(0,188,212,0.15)"
      : "0 4px 16px rgba(0,188,212,0.12)",
  };
  const workIcon = { background: "#ff9800", color: "#fff" };
  const eduIcon  = { background: "#00bcd4", color: "#fff" };

  return (
    <section
      className="py-20 relative overflow-hidden
                 text-gray-900 dark:text-white"
      id="timeline"
    >
      {/* ── Blob background ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[40rem] h-[40rem] -left-40 -top-24
                        bg-cyan-400 dark:bg-cyan-500
                        rounded-full opacity-15 dark:opacity-20
                        filter blur-3xl transform -rotate-12" />
        <div className="absolute w-[36rem] h-[36rem] -right-32 -bottom-20
                        bg-pink-300 dark:bg-pink-400
                        rounded-full opacity-15 dark:opacity-18
                        filter blur-3xl transform rotate-12" />
        <div className="absolute w-[48rem] h-[48rem] left-1/2 top-1/3 -translate-x-1/2
                        bg-teal-300 dark:bg-teal-400
                        rounded-full opacity-10
                        filter blur-[6rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 dark:via-black/10 to-black/10 dark:to-black/30 opacity-40" />
      </div>

      <h2 className="text-3xl font-bold text-center mb-12">Timeline</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={workStyle}
          iconStyle={workIcon}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Research Assistant ML / AI</h3>
          <p>Fraunhofer IDMT (Jan 2026 – Mar 2026)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={workStyle}
          iconStyle={workIcon}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Research Assistant ML / AI</h3>
          <p>Fraunhofer IDMT (Sept 2025 – Dec 2025)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={eduStyle}
          iconStyle={eduIcon}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Technical University Ilmenau</h3>
          <p>{`Master's Degree in CS (2022–2026)`}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={eduStyle}
          iconStyle={eduIcon}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-bold">NTNU</h3>
          <p>{`Master's Degree in CS (Exchange semester 2024)`}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={workStyle}
          iconStyle={workIcon}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Software Engineer</h3>
          <p>Agathsya Technology pvt. ltd. (2021–2022)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={workStyle}
          iconStyle={workIcon}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Software Engineer</h3>
          <p>Cybage Software pvt. ltd. (2018–2021)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={eduStyle}
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