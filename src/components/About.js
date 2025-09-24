// 6. About.js

"use client";

import { motion } from 'framer-motion';
export default function About() {
return (
<section className="py-20 px-4" id="about">
<motion.div className="max-w-3xl mx-auto text-center"
initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}
>
<h2 className="text-3xl font-bold mb-4">About Me</h2>
<p>I am a passionate developer building modern web applications using Next.js, React, and Tailwind CSS. I love creating engaging UI with animations and responsive designs.</p>
</motion.div>
</section>
);
}