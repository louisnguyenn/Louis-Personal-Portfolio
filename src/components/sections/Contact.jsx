import { Github, Linkedin, Mail } from 'lucide-react';
import FadeContent from '../animations/FadeContent';

export const Contact = () => {
  return (
    <section id="contact" className="pt-4 relative overflow-hidden">
      <div className="mx-auto w-full">
        <div className="flex gap-5">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            className="hidden md:flex items-center space-x-8"
          >
            <div className="group relative">
              <a href="mailto:louis.nguyen550@gmail.com">
                <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={22} />
                </div>
              </a>
            </div>
          </FadeContent>

          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            className="hidden md:flex items-center space-x-8"
          >
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
          </FadeContent>

          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            className="hidden md:flex items-center space-x-8"
          >
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
          </FadeContent>
        </div>
      </div>
    </section>
  );
};
