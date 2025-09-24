// 7. Footer.js
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
export default function Footer() {
return (
<footer className="py-8 relative overflow-hidden text-white">
    {/* bg-gray-800 text-white"> */}
    <div className="absolute w-[40rem] h-[40rem] -left-40 -top-24 bg-indigo-400 rounded-full opacity-20 filter blur-3xl transform -rotate-12" />
    <div className="absolute w-[36rem] h-[36rem] -right-32 -bottom-20 bg-purple-400 rounded-full opacity-18 filter blur-3xl transform rotate-12" />
    <div className="absolute w-[48rem] h-[48rem] left-1/2 top-1/3 -translate-x-1/2 bg-violet-300 rounded-full opacity-10 filter blur-4xl" />

<div className="flex justify-center space-x-6 mb-4">
<a href="https://github.com/hiteshd987" target="_blank"><FaGithub size={24}/></a>
<a href="https://www.linkedin.com/in/hitesh-derkar-151aa7147/" target="_blank"><FaLinkedin size={24}/></a>
{/* <a href="#" target="_blank"><FaTwitter size={24}/></a> */}
</div>
</footer>
);
}