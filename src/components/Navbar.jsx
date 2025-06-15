import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* <a href="#home" className="font-mono text-xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Louis Nguyen</span>
          </a> */}

          {/* mobile navbar (hamburger) icon */}
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>

          {/* desktop menu (navbar) */}
          <div className="hidden md:flex items-center ml-auto space-x-8">
            <a href="#home" className="text-gray-300 transition-colors hover:-translate-y-1 hover:underline hover:text-white">Home</a>
            <a href="#experience" className="text-gray-300 transition-colors hover:-translate-y-1 hover:underline hover:text-white">Experience</a>
            <a href="#projects" className="text-gray-300 transition-colors hover:-translate-y-1 hover:underline hover:text-white">Projects</a>
            <a href="#interests" className="text-gray-300 transition-colors hover:-translate-y-1 hover:underline hover:text-white">Interests</a>
            <a href="#contact" className="text-gray-300 transition-colors hover:-translate-y-1 hover:underline hover:text-white">Contact</a>
            {/* <a href="https://www.linkedin.com/in/louisnguyenn/" target="_blank" className="text-gray-300 transition-colors hover:-translate-y-1 hover:underline hover:text-white">LinkedIn</a>
            <a href="https://github.com/louisnguyen7" target="_blank" className="text-gray-300 transition-colors hover:-translate-y-1 hover:underline hover:text-white">GitHub</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
