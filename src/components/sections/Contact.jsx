import { Github, Linkedin, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="pt-4 relative overflow-hidden">
      <div className="mx-auto w-full">
        <div className="flex gap-5">
          <div className="group relative">
            <a href="mailto:louis.nguyen550@gmail.com">
              <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail size={22} />
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
                <Linkedin size={22} />
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
                <Github size={22} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
