import { useEffect } from "react";
import { X, Menu } from "lucide-react";
import ShinyText from './ShinyText';
import FadeContent from './FadeContent'

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* mobile hamburger menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* desktop menu */}
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              className="hidden md:flex items-center ml-auto space-x-8"
            >
              <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
              <a href="#contact" className="bg-[#05091e] py-2 px-4 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-[#AA8F76] transition-all duration-300">
                <ShinyText text="Contact" disabled={false} speed={3} className='custom-class' />
              </a>
            </FadeContent>
          </div>
        </div>
      </nav>

      {/* mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* menu panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-lg border-l border-white/10 shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-xl font-bold text-white">Menu</span>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* navigation */}
              <nav className="flex-1 px-4 py-8">
                <div className="space-y-6">
                  <a
                    href="#home"
                    onClick={closeMenu}
                    className="block text-lg text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    onClick={closeMenu}
                    className="block text-lg text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    About
                  </a>
                  <a
                    href="#experience"
                    onClick={closeMenu}
                    className="block text-lg text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    onClick={closeMenu}
                    className="block text-lg text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="block w-full text-center bg-[#AA8F76] text-white py-3 px-6 rounded-full font-medium hover:bg-[#AA8F76]/90 transition-all duration-300 mt-8"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
