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
      <div className="w-full px-4 pt-28 sm:px-6 sm:pt-32">
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
                whose career started on the shop floor. I build industrial
                software, including CNC machine simulators and PLC-style control
                systems, because I understand firsthand how it supports
                production.
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
              <div className="absolute -inset-3 rounded-full border border-white/5" />

              <img
                src="/images/me.jpg"
                alt="Louis Nguyen"
                className="relative h-40 w-40 rounded-full transition-all duration-500 sm:h-48 sm:w-48"
              />
            </div>
          </FadeContent>
        </div>

        <div className="mt-11 border-b border-white/10 sm:mt-15" />
      </div>
    </section>
  );
};
