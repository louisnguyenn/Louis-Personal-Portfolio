import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import AnimateContent from "../AnimateContent";
import SakuraBackground from "../SakuraBackground";

export const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Hi, I'm Louis Nguyen";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseAfterTyping = 1000;
  const pauseAfterDeleting = 1000;

  useEffect(() => {
    let timeout;

    // typing phase
    if (!isDeleting && text !== fullText) {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
    }
    // deleting phase
    else if (isDeleting && text !== "") {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, deletingSpeed);
    }
    // pause before deleting
    else if (text === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
    }
    // pause before typing again
    else if (text === "" && isDeleting) {
      timeout = setTimeout(() => setIsDeleting(false), pauseAfterDeleting);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <SakuraBackground asOverlay={true} petalCount={10} isActive={true} />
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="text-left z-10">
          <h1 className="text-9xl font-bold mb-6">
            {/* <span className="text-7xl">Hi, I'm </span>
              <br />
              Louis Nguyen */}
            {/* Louis Nguyen */}
            <AnimateContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1.1}
              ease="power2.out"
              initialOpacity={0.1}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.1}
            >
              <span className="text-rose-700">LOUIS</span>
            </AnimateContent>

            <AnimateContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1.1}
              ease="power2.out"
              initialOpacity={0.05}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <span className="text-rose-700">NGUYEN</span>
            </AnimateContent>
            {/* {text} */}
            {/* <span className="animate-blink ml-1">|</span> */}
          </h1>

          {/* short bio */}
          {/* <AnimateContent
            distance={100}
            direction="horizontal"
            reverse={false}
            duration={1.0}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
            delay={0.3}
          >
            <p className='text-muted-foreground mb-8 max-w-2xl text-gray-400'>
              Studying <a href="https://www.uoguelph.ca/programs/engineering-systems-and-computing/" className="underline transition-colors hover:text-white" target="_blank">Engineering Systems and Computing</a> at the <a href="https://www.uoguelph.ca/" className="underline transition-colors hover:text-white" target="_blank">University of Guelph</a>
              Welcome to my personal website.
            </p>
          </AnimateContent> */}

          <AnimateContent
            distance={120}
            direction="vertical"
            reverse={false}
            duration={1.0}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            scale={1.05}
            threshold={0.2}
            delay={0.5}
          >
            <div className="flex space-x-4 mb-8">
              <a
                href="/Louis_Nguyen_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-sm border border-pink-300 text-pink-700 py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-pink-100 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-200/50 active:bg-pink-200 active:text-pink-800"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-yellow-600 hover:shadow-lg hover:shadow-amber-300/50 active:from-amber-600 active:to-yellow-700"
              >
                Contact Me
              </a>
            </div>
          </AnimateContent>

          <AnimateContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.0}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
            delay={0.7}
          >
            <div className="flex space-x-6">
              <a
                href="https://github.com/louisnguyenn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/louisnguyenn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </AnimateContent>
        </div>
      </div>
    </section>
  );
};
