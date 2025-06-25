export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[#030518]/80 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
        `}>

      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer hover:scale-110 transition-transform"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <nav className="flex flex-col items-center space-y-2">
        <a
          href="#home"
          className={`text-2xl font-semibold text-white py-3 px-4 transform transition-all duration-300 hover:text-gray-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={`text-2xl font-semibold text-white py-3 px-4 transform transition-all duration-300 hover:text-gray-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#experience"
          className={`text-2xl font-semibold text-white py-3 px-4 transform transition-all duration-300 hover:text-gray-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          onClick={() => setMenuOpen(false)}
        >
          Experience
        </a>
        <a
          href="#projects"
          className={`text-2xl font-semibold text-white py-3 px-4 transform transition-all duration-300 hover:text-gray-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`text-2xl font-semibold text-white py-3 px-4 transform transition-all duration-300 hover:text-gray-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
