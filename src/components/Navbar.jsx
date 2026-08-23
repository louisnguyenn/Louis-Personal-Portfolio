import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import FadeContent from './animations/FadeContent';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '#about', label: 'ABOUT' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/louisnguyenn/',
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/louisnguyenn',
      icon: <Github size={20} />,
      label: 'GitHub',
    },
    {
      href: 'mailto:lnguye25@uoguelph.ca',
      icon: <Mail size={20} />,
      label: 'Email',
    },
  ];
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 px-6">
        <div className="mx-auto w-full max-w-3xl border-b border-white/10 bg-[#030518]/70 backdrop-blur-lg">
          <div className="relative flex h-14 items-center">
            {/* Mobile hamburger */}
            <button
              type="button"
              className="cursor-pointer rounded-md p-2 text-gray-400 transition-colors duration-300 hover:text-white md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Name */}
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              className="hidden md:flex"
            >
              <a
                href="#home"
                className="text-xs font-medium tracking-[0.18em] text-gray-400 transition-colors duration-300 hover:text-white"
              >
                LOUIS NGUYEN
              </a>
            </FadeContent>

            {/* Desktop navigation */}
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex"
            >
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-xs font-medium tracking-[0.18em] text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </FadeContent>

            {/* Social links */}
            <div className="ml-auto flex items-center gap-4">
              {socialLinks.map(({ href, icon, label }) => {
                const isEmail = href.startsWith('mailto:');

                return (
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
                      target={isEmail ? undefined : '_blank'}
                      rel={isEmail ? undefined : 'noopener noreferrer'}
                      aria-label={label}
                      className="text-gray-500 transition-colors duration-300 hover:text-white"
                    >
                      {icon}
                    </a>
                  </FadeContent>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />

          <div className="absolute top-0 left-0 flex h-full w-64 flex-col border-r border-white/10 bg-[#030518]/90 px-6 py-7 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <a
                href="#home"
                onClick={closeMenu}
                className="text-xs font-medium tracking-[0.18em] text-gray-300 transition-colors duration-300 hover:text-white"
              >
                LOUIS NGUYEN
              </a>

              <button
                type="button"
                onClick={closeMenu}
                className="cursor-pointer rounded-md p-1 text-gray-400 transition-colors duration-300 hover:text-white"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="text-lg font-light text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-5 border-t border-white/10 pt-6">
              {socialLinks.map(({ href, icon, label }) => {
                const isEmail = href.startsWith('mailto:');

                return (
                  <a
                    key={label}
                    href={href}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    className="text-gray-500 transition-colors duration-300 hover:text-white"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
