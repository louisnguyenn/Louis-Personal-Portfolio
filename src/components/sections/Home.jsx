import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import AnimateContent from "../AnimateContent";
import SakuraBackground from "../SakuraBackground";

export const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Louis Nguyen";
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
    <section id="home" className="min-h-screen flex items-center relative">
      {/* <SakuraBackground asOverlay={true} petalCount={10} isActive={true} /> */}
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="text-left z-10">
          <h1 className="text-9xl font-bold mb-6">
            <span className="text-5xl">Hi, I'm </span>
            <br />
            {text}
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
            <p className="my-8 text-gray-400">
              Aspiring software and robotics/automation engineer.
            </p>
          </AnimateContent>
        </div>
      </div>
    </section>
  );
};
