import { Github, Linkedin, Mail } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';

export const Contact = () => {
  return (
    <section id="contact" className="pt-4 relative overflow-hidden">
      <div className="mx-auto w-full">
        <div className="flex gap-5">
          <ScrollReveal direction="left" distance={80} duration={1.2}>
            <div className="group relative">
              <a
                href="mailto:louis.nguyen550@gmail.com"
              >
                <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} className="text-white" />
                </div>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={80} duration={1.4}>
            <div className="group relative">
              <a
                href="https://www.linkedin.com/in/louisnguyenn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={24} className="text-white" />
                </div>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={80} duration={1.6}>
            <div className="group relative">
              <a
                href="https://github.com/louisnguyenn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Github size={24} className="text-white" />
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
