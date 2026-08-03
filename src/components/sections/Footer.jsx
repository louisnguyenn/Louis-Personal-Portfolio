import { Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-24 px-6">
      <div className="mx-auto w-full max-w-3xl border-t border-white/10 py-8">
        <div className="flex flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-gray-400">© {currentYear} Louis Nguyen</p>
          </div>

          <a
            href="mailto:lnguye25@uoguelph.ca"
            className="flex items-center gap-2 text-gray-500 transition-colors duration-300 hover:underline hover:text-white"
          >
            <Mail size={17} />
            <span>lnguye25@uoguelph.ca</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
