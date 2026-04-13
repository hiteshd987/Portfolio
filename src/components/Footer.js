import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 relative overflow-hidden text-gray-800 dark:text-white">

      {/* ── Blob background ── */}
      <div className="absolute w-[40rem] h-[40rem] -left-40 -top-24
                      bg-indigo-300 dark:bg-indigo-400
                      rounded-full opacity-15 dark:opacity-20
                      filter blur-3xl transform -rotate-12 pointer-events-none" />
      <div className="absolute w-[36rem] h-[36rem] -right-32 -bottom-20
                      bg-purple-300 dark:bg-purple-400
                      rounded-full opacity-15 dark:opacity-18
                      filter blur-3xl transform rotate-12 pointer-events-none" />
      <div className="absolute w-[48rem] h-[48rem] left-1/2 top-1/3 -translate-x-1/2
                      bg-violet-200 dark:bg-violet-300
                      rounded-full opacity-10
                      filter blur-[6rem] pointer-events-none" />

      <div className="relative flex justify-center space-x-6 mb-2">
        <a
          href="https://github.com/hiteshd987"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/hitesh-derkar-151aa7147/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <p className="relative text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Hitesh Derkar
      </p>
    </footer>
  );
}