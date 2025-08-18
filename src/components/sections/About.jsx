import { ScrollReveal } from "../ScrollReveal";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SkillBar = ({ skill, color, percentage, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // trigger when x% of the element is visible
        rootMargin: "0px 0px -50px 0px", // start animation 'x' number of px before element is fully in view
      }
    );

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }

    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={skillBarRef} className="m-3 flex items-center gap-3">
      <h2 className="font-medium text-xl min-w-[100px]">{skill}</h2>
      <div className="flex-1 h-2 bg-gray-700 rounded overflow-hidden">
        <div
          className={`h-full rounded transition-all duration-1000 ease-out will-change-transform ${
            isVisible ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            backgroundColor: color,
            width: `${percentage}%`,
            transitionDelay: isVisible ? `${delay}ms` : "0ms",
          }}
        ></div>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-12 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <h2 className="sm:text-3xl md:text-5xl font-bold mb-4 text-white text-center">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0]">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] mx-auto rounded-full mb-8 md:mb-12"></div>
        </ScrollReveal>

        {/* mobile: stack vertically, desktop: side by side */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:items-start">
          <div className="relative rounded-xl p-6 sm:p-8 flex-1 border border-white/10 bg-[#05091e] hover:scale-101 hover:border-[#AA8F76] transition-all duration-300 order-2 lg:order-none hover:shadow-2xl hover:shadow-[#AA8F76]/20">
            <ScrollReveal direction="up" distance={50} duration={0.8}>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                Hi, my name is Louis. I am currently studying{" "}
                <a
                  href="https://www.uoguelph.ca/programs/engineering-systems-and-computing/"
                  className="underline transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Engineering Systems and Computing
                </a>{" "}
                at the{" "}
                <a
                  href="https://www.uoguelph.ca/"
                  className="underline transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Guelph
                </a>
                . I am 19 years old, born and raised in Cambridge, Ontario. My
                ethicity is South-East Asian, more specifically{" "}
                <a
                  href="https://www.vietnam.travel/"
                  className="underline transition-colors hover:text-white"
                  target="_blank"
                >
                  Vietnamese
                </a>
                .
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                I love to be physically active, whether that's in the gym and
                powerlifting or playing sports like basketball, badminton,
                volleyball, and more.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                I also love to be continuously learning. I self-taught myself to
                play the guitar, learned Adobe After Effects to do video editing
                on social media like Youtube, Instagram reels, and Tiktok, and
                learned a little bit of graphic design.
              </p>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I'm passionate about creating innovative web applications and
                exploring the intersection of technology and problem-solving.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* my skills */}
        <div className="mt-25">
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <h2 className="sm:text-2xl md:text-4xl font-bold py-4 pl-0 text-center">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0]">
                Skills
              </span>
            </h2>
          </ScrollReveal>
        </div>
        <div className="mt-10 bg-[#05091e] relative rounded-xl p-6 sm:p-8 border border-white/10 transition-all hover:scale-101 hover:border-[#AA8F76] duration-300 order-2 lg:order-none hover:shadow-2xl hover:shadow-[#AA8F76]/20">
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <h3 className="text-3xl font-bold text-gray-300 mb-4 leading-relaxed">
              Languages
            </h3>

            <ScrollReveal direction="up" distance={50} duration={1}>
              <SkillBar
                skill="C"
                color="#555555"
                percentage={100}
                delay={100}
              />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={50} duration={1.2}>
              <SkillBar
                skill="Python"
                color="#3572A5"
                percentage={100}
                delay={200}
              />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={50} duration={1.4}>
              <SkillBar
                skill="JavaScript"
                color="#f1e05a"
                percentage={100}
                delay={300}
              />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={50} duration={1.6}>
              <SkillBar
                skill="HTML"
                color="#e44b23"
                percentage={100}
                delay={400}
              />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={50} duration={1.8}>
              <SkillBar
                skill="CSS"
                color="#563d7c"
                percentage={100}
                delay={500}
              />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={50} duration={2}>
              <SkillBar
                skill="SQL"
                color="#dad8d8"
                percentage={100}
                delay={600}
              />
            </ScrollReveal>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-9 items-center lg:items-start w-full">
          <div className="flex w-full lg:flex-1 mt-13 bg-[#05091e] relative rounded-xl p-6 sm:p-8 border border-white/10 hover:border-[#AA8F76] hover:scale-101 transition-all duration-300 order-2 lg:order-none hover:shadow-2xl hover:shadow-[#AA8F76]/20">
            <ScrollReveal direction="right" distance={50} duration={1}>
              <h3 className="text-3xl font-bold text-gray-300 mb-4 leading-relaxed">
                Technologies and Frameworks
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Tailwind CSS",
                  "HTML",
                  "CSS",
                  "Node.js",
                  "REST APIs",
                  "OpenCV",
                  "Tensorflow",
                  "Flask",
                  "Pandas",
                  "NumPy",
                  "Matplotlib",
                  "Seaborn",
                  "scikit-learn",
                  "PostgreSQL",
                  "Vite",
                  "Vercel",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#AA8F76]/10 text-[#AA8F76] border border-[#AA8F76]/30 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="flex w-full lg:flex-1 mt-13 bg-[#05091e] relative rounded-xl p-6 sm:p-8 border border-white/10 transition-all hover:scale-101 hover:border-[#AA8F76] duration-300 order-2 lg:order-none hover:shadow-2xl hover:shadow-[#AA8F76]/20">
            <ScrollReveal direction="left" distance={50} duration={1}>
              <h3 className="text-3xl font-bold text-gray-300 mb-4 leading-relaxed">
                Developer and Design Tools
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Git",
                  "Jupyter Notebook",
                  "Android Studio",
                  "Linux",
                  "VSCode",
                  "Adobe After Effects",
                  "DaVinci Resolve",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#AA8F76]/10 text-[#AA8F76] border border-[#AA8F76]/30 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
