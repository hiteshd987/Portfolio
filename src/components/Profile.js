// 2. Hero.js

"use client";

import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Profile() {
return (
    <>
<Parallax bgImage="/images/profile-bg.jpg" strength={300} id="profile-parallax">
<section id='profile' className="h-screen flex flex-col items-center justify-center text-center px-4">
{/* <motion.img
src="/images/profile-pic.png" alt="Profile" className="rounded-full w-50 h-50 mb-6 shadow-lg"
initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
/> */}

<motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/images/profile-pic.png"
        alt="Profile"
        className="rounded-full mb-6 shadow-lg"
        width={200}
        height={200}
        priority      // loads image faster
      />
    </motion.div>

<motion.h1 className="text-4xl md:text-6xl font-bold mb-4"
initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
>{`Hi, I'm Hitesh Derkar`}</motion.h1>
<Typewriter options={{ strings: ['AI / ML Enthusiast', 'Web Developer'], autoStart: true, loop: true, delay: 75 }} />

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2, duration: 1 }}
  className="mt-15 text-lg md:text-xl max-w-2xl text-gray-100 text-center"
>
    {`Master’s student in Research in Computer and Systems Engineering at Technical University Ilmenau. 
    Proficient in Python and JavaScript, with a focus on generative AI.`}
</motion.div>

<div className="flex justify-center space-x-6 mb-4 mt-4">
<a 
  href="https://github.com/hiteshd987" 
  target="_blank"
  rel="noopener noreferrer" 
  aria-label="GitHub Profile"
  >
    <FaGithub size={35}/>
</a>
<a 
  href="https://www.linkedin.com/in/hitesh-derkar-151aa7147/" 
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn Profile"
>
  <FaLinkedin size={35}/>
</a>
</div>

</section>
</Parallax>
</>
);
}