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
      {/* <SakuraBackground asOverlay={true} petalCount={10} isActive={true} /> */}
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
              LOUIS
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
              NGUYEN
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
                className="bg-[#05091e] border border-[#AA8F76] text-[#AA8F76] py-3 px-6 rounded font-medium transition-all duration-200 hover:scale-105 hover:bg-blue-500/20 active:bg-white active:text-[#05091e]"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="bg-[#05091e] border border-[#AA8F76] text-[#AA8F76] py-3 px-6 rounded font-medium transition-all duration-200 hover:scale-105 hover:bg-blue-500/20 active:bg-white active:text-[#05091e]"
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
                className="text-[#AA8F76] hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/louisnguyenn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AA8F76] hover:text-white transition-all duration-300 hover:-translate-y-1"
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
