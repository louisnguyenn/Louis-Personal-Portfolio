import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#030518] text-white py-8 px-6 border-t border-white/10 mt-12 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-[#999999]">
          &copy; {new Date().getFullYear()} Louis Nguyen. All rights reserved.
        </p>
        <div className="flex gap-10">
          <div className="group relative">
            <a href="mailto:louis.nguyen550@gmail.com">
              <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail size={32} className="text-white" />
              </div>
            </a>
          </div>
          <div className="group relative">
            <a
              href="https://www.linkedin.com/in/louisnguyenn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Linkedin size={32} className="text-white" />
              </div>
            </a>
          </div>
          <div className="group relative">
            <a
              href="https://github.com/louisnguyenn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Github size={32} className="text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
