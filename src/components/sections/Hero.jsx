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
        {/* text left, photo right */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-8">
          {/* Left: text + icons */}
          <div className="z-10 flex flex-col gap-4">
            <h1 className="text-6xl font-normal mb-1">
              Hi, I'm <br></br> {text}
              <span className="animate-blink ml-1">|</span>
            </h1>

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

            {/* Icons */}
            <div className="flex gap-5 pt-2">
              {[
                {
                  href: 'mailto:lnguye25@uoguelph.ca',
                  icon: <Mail size={22} />,
                },
                {
                  href: 'https://www.linkedin.com/in/louisnguyenn/',
                  icon: <Linkedin size={22} />,
                },
                {
                  href: 'https://github.com/louisnguyenn',
                  icon: <Github size={22} />,
                },
              ].map(({ href, icon }, i) => (
                <FadeContent
                  key={i}
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                  className="flex items-center"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <div className="group flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                  </a>
                </FadeContent>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <FadeContent
            blur={true}
            duration={1200}
            easing="ease-out"
            initialOpacity={0}
            className="flex-shrink-0 flex justify-center sm:justify-end"
          >
            <img
              src="/images/me.jpg"
              alt="Louis Nguyen"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-white/10 shadow-lg"
            />
          </FadeContent>
        </div>
      </div>
    </section>
  );
};
