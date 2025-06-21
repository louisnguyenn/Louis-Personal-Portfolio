import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

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
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-right">
          {text}
          <span className="animate-blink ml-1">|</span>
        </h1>

        {/* short bio */}
        <p className="text-gray-400 text-lg mb-8 mx-auto">
          Studying <a href="https://www.uoguelph.ca/programs/engineering-systems-and-computing/" className="underline transition-colors hover:text-white" target="_blank">Engineering Systems and Computing</a> at the <a href="https://www.uoguelph.ca/" className="underline transition-colors hover:text-white" target="_blank">University of Guelph</a>
        </p>

        {/* buttons */}
        <div className="flex justify-center space-x-4">
          <a href="/Louis-Personal-Portfolio/Louis_Nguyen_Resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-[#AA8F76] text-[#AA8F76] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rbga(59, 130, 246, 0.2)] hover:bg-blue-10">View Resume</a>
          <a href="#contact" className="border border-[#AA8F76] text-[#AA8F76] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rbga(59, 130, 246, 0.2)] hover:bg-blue-10">Contact Me</a>
        </div>
      </div>
    </section>
  );
};
