import { Github, Linkedin, Mail } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center pt-18 mb-20"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Let's Connect
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto w-full">
          <div className="flex gap-10 px-4">
            <ScrollReveal>
              <div className="group relative">
                <a href="mailto:lnguye25@uoguelph.ca">
                  <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail size={35} />
                  </div>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="group relative">
                <a
                  href="https://www.linkedin.com/in/louisnguyenn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin size={35} />
                  </div>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="group relative">
                <a
                  href="https://github.com/louisnguyenn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Github size={35} />
                  </div>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
