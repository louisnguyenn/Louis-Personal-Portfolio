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
                Aspiring industrial automation and control systems engineer
              </p>
            </AnimateContent>
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
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full object-cover border-2 border-white/10 shadow-lg"
            />
          </FadeContent>
        </div>
      </div>
    </section>
  );
};
