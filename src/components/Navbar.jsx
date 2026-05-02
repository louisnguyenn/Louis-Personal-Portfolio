import { Menu, X } from 'lucide-react';
import { useEffect } from 'react';
import FadeContent from './animations/FadeContent';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // const closeMenu = () => setMenuOpen(false);  // uncomment this if decide to use mobile menu again

  return (
    <>
      <nav className="fixed top-0 w-full left-0 right-0 z-40 bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-4xl mx-auto px-16">
          <div className="flex justify-between items-center h-14">
            {/* mobile hamburger menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors absolute left-4"
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
                className="text-gray-300 hover:text-white hover:scale-103 transition-all duration-300 text-lg font-semibold"
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
              className="hidden md:flex items-center space-x-14"
            >
              {/* <a
                href="#about"
                className="text-gray-300 hover:text-white hover:scale-106 transition-all duration-300"
              >
                About
              </a> */}
              <a
                href="#experience"
                className="text-gray-300 hover:text-white hover:scale-106 transition-all duration-300"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white hover:scale-106 transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white hover:scale-106 transition-all duration-300"
              >
                Contact
              </a>
            </FadeContent>
          </div>
        </div>
      </nav>

      {/* mobile menu overlay */}
      {/* {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
        </div>
      )} */}
    </>
  );
};
