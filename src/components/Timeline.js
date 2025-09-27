// 4. Timeline.js

"use client";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool, MdWork } from 'react-icons/md';

export default function Timeline() {
return (
<section className="py-20 relative overflow-hidden text-white"
// bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700
 id="timeline">

<div className="absolute inset-0 -z-10 pointer-events-none">
  {/* Top-left cyan blob */}
  <div className="absolute w-[40rem] h-[40rem] -left-40 -top-24 bg-cyan-500 rounded-full opacity-20 filter blur-3xl transform -rotate-12" />

  {/* Bottom-right pink/purple blob */}
  <div className="absolute w-[36rem] h-[36rem] -right-32 -bottom-20 bg-pink-400 rounded-full opacity-18 filter blur-3xl transform rotate-12" />

  {/* Center teal blob */}
  <div className="absolute w-[48rem] h-[48rem] left-1/2 top-1/3 -translate-x-1/2 bg-teal-400 rounded-full opacity-10 filter blur-4xl" />

  {/* subtle overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 opacity-40" />
</div>


<h2 className="text-3xl font-bold text-center mb-12">Timeline</h2>
<VerticalTimeline>

<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#ffe0b2', color: '#000' }} iconStyle={{ background: '#ff9800', color: '#fff' }} icon={<MdWork />}>
<h3 className="vertical-timeline-element-title">Research Assistant ML / AL</h3>
<p>Fraunhofer IDMT (Sept 2025 - Present)</p>
</VerticalTimelineElement>
<VerticalTimelineElement className="vertical-timeline-element--education" contentStyle={{ background: '#e0f7fa', color: '#000' }} iconStyle={{ background: '#00bcd4', color: '#fff' }} icon={<MdSchool />}>
<h3 className="vertical-timeline-element-title">Technical University Ilmenau</h3>
<p>{`Master's Degree in CS (2022-2026)`}</p>
</VerticalTimelineElement>
<VerticalTimelineElement className="vertical-timeline-element--education" contentStyle={{ background: '#e0f7fa', color: '#000' }} iconStyle={{ background: '#00bcd4', color: '#fff' }} icon={<MdSchool />}>
<h3 className="vertical-timeline-element-title">NTNU</h3>
<p>{`Master's Degree in CS (Exchange semester 2024)`}</p>
</VerticalTimelineElement>


<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#ffe0b2', color: '#000' }} iconStyle={{ background: '#ff9800', color: '#fff' }} icon={<MdWork />}>
<h3 className="vertical-timeline-element-title">Software Engineer </h3>
<p>Agathsya Technology pvt. ltd. (2021 - 2022)</p>
</VerticalTimelineElement>
<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#ffe0b2', color: '#000' }} iconStyle={{ background: '#ff9800', color: '#fff' }} icon={<MdWork />}>
<h3 className="vertical-timeline-element-title">Software Engineer</h3>
<p>Cybage Software pvt. ltd. (2018 - 2021)</p>
</VerticalTimelineElement>
<VerticalTimelineElement className="vertical-timeline-element--education" contentStyle={{ background: '#e0f7fa', color: '#000' }} iconStyle={{ background: '#00bcd4', color: '#fff' }} icon={<MdSchool />}>
<h3 className="vertical-timeline-element-title">Nagpur University</h3>
<p>{`Bachelor's Degree in CS (2015-2018)`}</p>
</VerticalTimelineElement>

</VerticalTimeline>
</section>
);
}
