import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import AnimateContent from '../animations/AnimateContent';
import FadeContent from '../animations/FadeContent';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Louis Nguyen';
  const typingSpeed = 150;

  useEffect(() => {
    let timeout;

    if (text !== fullText) {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <section id="home" className="flex items-center relative">
      <div className="pt-25 w-full px-4 sm:px-6 lg:px-8">
        <div className="z-10">
          <h1 className="text-6xl font-normal mb-4">
            Hi, I'm {text}
            <span className="animate-blink ml-1">|</span>
          </h1>

          {/* short bio */}
          <AnimateContent
            distance={100}
            direction="horizontal"
            reverse={true}
            duration={1.0}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
            delay={0.3}
          >
            <p className="text-gray-400">
              Aspiring software and embedded systems engineer.
            </p>
          </AnimateContent>
        </div>

        <div className="mx-auto w-full pt-2 lg:pt-4">
          <div className="flex gap-5">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              className="md:flex items-center space-x-8"
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
              className="md:flex items-center space-x-8"
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
              className="md:flex items-center space-x-8"
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
      </div>
    </section>
  );
};
