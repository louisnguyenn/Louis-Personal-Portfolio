export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[#030518]/10 backdrop-blur-sm z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
        `}>

      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-2xl sm:text-3xl focus:outline-none cursor-pointer hover:scale-110 transition-transform z-10 p-2 rounded-full hover:bg-white/10"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Navigation menu */}
      <nav className="flex flex-col items-center space-y-3 sm:space-y-4 px-4 w-full max-w-sm">
        <a
          href="#home"
          className={`text-xl sm:text-2xl font-semibold text-white py-3 px-6 w-full text-center rounded-lg transform transition-all duration-300 hover:text-[#AA8F76] hover:bg-white/5 ${
            menuOpen ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={`text-xl sm:text-2xl font-semibold text-white py-3 px-6 w-full text-center rounded-lg transform transition-all duration-300 hover:text-[#AA8F76] hover:bg-white/5 ${
            menuOpen ? "opacity-100 translate-y-0 delay-150" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#experience"
          className={`text-xl sm:text-2xl font-semibold text-white py-3 px-6 w-full text-center rounded-lg transform transition-all duration-300 hover:text-[#AA8F76] hover:bg-white/5 ${
            menuOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Experience
        </a>
        <a
          href="#projects"
          className={`text-xl sm:text-2xl font-semibold text-white py-3 px-6 w-full text-center rounded-lg transform transition-all duration-300 hover:text-[#AA8F76] hover:bg-white/5 ${
            menuOpen ? "opacity-100 translate-y-0 delay-250" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`text-xl sm:text-2xl font-semibold text-white py-3 px-6 w-full text-center rounded-lg border border-[#AA8F76]/30 bg-[#AA8F76]/10 transform transition-all duration-300 hover:text-[#AA8F76] hover:border-[#AA8F76] hover:bg-[#AA8F76]/20 ${
            menuOpen ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </nav>

      {/* Safe area padding for devices with notches */}
      <div className="pb-safe-bottom" />
    </div>
  );
};
