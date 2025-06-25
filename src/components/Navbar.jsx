import { useEffect } from "react";
import ShinyText from './ShinyText';

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* mobile navbar (hamburger) icon */}
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>

          {/* desktop menu (navbar) */}
          <div className="hidden md:flex items-center ml-auto space-x-10">
            <a href="#home" className="text-gray-300 hover:text-lg hover:underline hover:text-white hover:font-semibold transition-all duration-300">Home</a>
            {/* <a href="blog.jsx" className="text-gray-300 hover:text-lg hover:underline hover:text-white hover:font-semibold transition-all duration-300">Blog</a> */}
            <a href="#about" className="text-gray-300 hover:text-lg hover:underline hover:text-white hover:font-semibold transition-all duration-300">About</a>
            <a href="#experience" className="text-gray-300 hover:text-lg hover:underline hover:text-white hover:font-semibold transition-all duration-300">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-lg hover:underline hover:text-white hover:font-semibold transition-all duration-300">Projects</a>
            <a href="#contact" className="bg-[#05091e] py-2 px-4 rounded-full border border-white text-gray-300 hover:text-white hover:text-lg transition-all duration-300"><ShinyText text="Contact" disabled={false} speed={3} className='custom-class' /></a>
            {/* <a href="https://www.linkedin.com/in/louisnguyenn/" target="_blank" className="text-gray-300 transition-colors hover:-translate-y-1 hover:underline hover:text-white">LinkedIn</a>
            <a href="https://github.com/louisnguyen7" target="_blank" className="text-gray-300 transition-colors hover:-translate-y-1 hover:underline hover:text-white">GitHub</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
