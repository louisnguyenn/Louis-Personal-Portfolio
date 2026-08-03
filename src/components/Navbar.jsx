import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import FadeContent from './animations/FadeContent';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 px-6">
        <div className="max-w-3xl mx-auto backdrop-blur-lg border-b border-white/10 shadow-lg">
          <div className="relative flex items-center h-14 px-6 md:px-10">
            {/* Mobile hamburger menu */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Name */}
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              className="hidden md:flex items-center"
            >
              <a
                href="#home"
                className="text-gray-300 hover:text-white hover:scale-103 transition-all duration-300 font-semibold"
              >
                Louis Nguyen
              </a>
            </FadeContent>

            {/* Centered desktop navigation */}
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2"
            >
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

            {/* Social icons */}
            <div className="flex items-center gap-5 ml-auto">
              {[
                {
                  href: 'mailto:lnguye25@uoguelph.ca',
                  icon: <Mail size={22} />,
                  label: 'Email',
                },
                {
                  href: 'https://www.linkedin.com/in/louisnguyenn/',
                  icon: <Linkedin size={22} />,
                  label: 'LinkedIn',
                },
                {
                  href: 'https://github.com/louisnguyenn',
                  icon: <Github size={22} />,
                  label: 'GitHub',
                },
              ].map(({ href, icon, label }) => (
                <FadeContent
                  key={label}
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                  className="flex items-center"
                >
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={label}
                    className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    {icon}
                  </a>
                </FadeContent>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
          />

          <div className="absolute top-0 left-0 h-full w-64 bg-black/70 backdrop-blur-lg flex flex-col px-6 py-8 gap-8 border-r border-white/10">
            <div className="flex items-center justify-between">
              <a
                href="#home"
                onClick={closeMenu}
                className="text-white text-lg font-semibold"
              >
                Louis Nguyen
              </a>

              <button
                onClick={closeMenu}
                className="p-1 rounded-md hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
