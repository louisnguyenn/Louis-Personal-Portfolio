import { useEffect } from "react";
import ShinyText from './ShinyText';
import FadeContent from './FadeContent'

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
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <a href="#home" className="text-gray-300 hover:text-lg hover:underline hover:text-white hover:font-semibold transition-all duration-300">Home</a>
            </FadeContent>
            
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={100}>
              <a href="#about" className="text-gray-300 hover:text-lg hover:underline hover:text-white hover:font-semibold transition-all duration-300">About</a>
            </FadeContent>
            
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={200}>
              <a href="#experience" className="text-gray-300 hover:text-lg hover:underline hover:text-white hover:font-semibold transition-all duration-300">Experience</a>
            </FadeContent>
            
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={300}>
              <a href="#projects" className="text-gray-300 hover:text-lg hover:underline hover:text-white hover:font-semibold transition-all duration-300">Projects</a>
            </FadeContent>
            
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={400}>
              <a href="#contact" className="bg-[#05091e] py-2 px-4 rounded-full border border-white text-gray-300 hover:text-white hover:text-lg transition-all duration-300">
                <ShinyText text="Contact" disabled={false} speed={3} className='custom-class' />
              </a>
            </FadeContent>
          </div>
        </div>
      </div>
    </nav>
  );
};
