import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-20 px-6">
      <div className="max-w-3xl mx-auto bg-[#030518] text-white py-8 px-6 border-t border-white/10 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Louis Nguyen
          </p>

          <a href="mailto:lnguye25@uoguelph.ca">
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
              <Mail size={24} />
              lnguye25@uoguelph.ca
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
