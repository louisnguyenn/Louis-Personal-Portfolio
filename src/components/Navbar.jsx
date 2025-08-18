import { useEffect } from "react";
import { X, Menu } from "lucide-react";
import FadeContent from "./FadeContent";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navigate = useNavigate();

  const navigateBlog = () => {
    navigate("/blogs");
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 rounded-full z-40 bg-[#05091e]/50 backdrop-blur-3xl border border-white/30 shadow-lg">
        <div className="px-8">
          <div className="flex justify-center items-center h-15 relative">
            {/* mobile hamburger menu button */}
            <button
              className="md:hidden absolute left-4 p-2 rounded-md hover:bg-white/10 transition-colors"
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
              className="hidden md:flex items-center space-x-12"
            >
              <a
                href="#home"
                className="text-gray-300 hover:text-white hover:scale-106 transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white hover:scale-106 transition-all duration-300"
              >
                About
              </a>
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
                onClick={navigateBlog}
                className="text-gray-300 hover:text-white hover:scale-106 transition-all duration-300 cursor-pointer"
              >
                Blogs
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
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
        </div>
      )}
    </>
  );
};
