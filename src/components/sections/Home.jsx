import { useEffect, useState } from 'react';
import AnimateContent from '../animations/AnimateContent';

export const Home = () => {
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
      <div className="pt-20 w-full px-4 sm:px-6 lg:px-8">
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
              Aspiring software and control systems engineer.
            </p>
          </AnimateContent>
        </div>
      </div>
    </section>
  );
};
