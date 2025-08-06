import { useEffect } from "react";
import { X, Menu } from "lucide-react";
import ShinyText from "./ShinyText";
import FadeContent from "./FadeContent";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-lg border-b border-pink-200/30 shadow-lg shadow-pink-100/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* mobile hamburger menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-pink-100/50 transition-colors text-pink-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              className="hidden md:flex items-center space-x-8"
            >
              <a
                href="#home"
                className="text-pink-700 hover:text-pink-900 transition-colors duration-300 text-lg font-semibold"
              >
                Louis Nguyen
              </a>
            </FadeContent>

            {/* desktop menu */}
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              className="hidden md:flex items-center ml-auto space-x-8"
            >
              <a
                href="#home"
                className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-amber-400 to-yellow-500 py-2 px-4 rounded-full text-white hover:from-amber-500 hover:to-yellow-600 hover:shadow-lg hover:shadow-amber-300/50 hover:scale-105 transition-all duration-300"
              >
                {/* <ShinyText text="Contact" disabled={false} speed={3} className='custom-class' /> */}
                Contact
              </a>
            </FadeContent>
          </div>
        </div>
      </nav>

      {/* mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-pink-900/30 backdrop-blur-sm"
            onClick={closeMenu}
          />
        </div>
      )}
    </>
  );
};
