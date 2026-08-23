import { useEffect, useState } from 'react';
import AnimateContent from '../animations/AnimateContent';
import FadeContent from '../animations/FadeContent';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Louis Nguyen';
  const typingSpeed = 120;

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
    <section id="home" className="relative">
      <div className="w-full px-4 pt-24 sm:px-6 sm:pt-28">
        <div className="grid items-center gap-10 sm:grid-cols-[1fr_auto] sm:gap-14">
          {/* Left content */}
          <div className="z-10 max-w-xl">
            <FadeContent
              blur={true}
              duration={900}
              easing="ease-out"
              initialOpacity={0}
            >
              <p className="mb-5 text-sm font-medium tracking-[0.2em] text-gray-500">
                ENGINEERING SYSTEMS & COMPUTING
              </p>
            </FadeContent>

            <h1 className="text-5xl font-normal leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              Hi, I&apos;m
              <span className="mt-1 block">
                {text}
                <span className="ml-1 animate-blink text-white">|</span>
              </span>
            </h1>

            <AnimateContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power2.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.2}
              delay={0.3}
            >
              <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-gray-400 sm:text-lg">
                Aspiring industrial automation and control systems engineer
                whose career started on the shop floor. I do my best work close to the problem: understanding physical systems and building the software that makes them better.
              </p>
            </AnimateContent>
          </div>

          {/* Right image */}
          <FadeContent
            blur={true}
            duration={1200}
            easing="ease-out"
            initialOpacity={0}
            className="flex justify-center sm:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3" />

              <img
                src="/images/me.jpg"
                alt="Louis Nguyen"
                className="relative h-40 w-40 rounded-full transition-all duration-500 sm:h-52 sm:w-52"
              />
            </div>
          </FadeContent>
        </div>

        <div className="mt-17 border-b border-white/10 sm:mt-11" />
      </div>
    </section>
  );
};
