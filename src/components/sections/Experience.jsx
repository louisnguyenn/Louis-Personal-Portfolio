import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ScrollReveal = ({
  children,
  direction = "up",
  distance = 50,
  duration = 0.8,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `translateY(${distance}px)`;
        case "down":
          return `translateY(-${distance}px)`;
        case "left":
          return `translateX(${distance}px)`;
        case "right":
          return `translateX(-${distance}px)`;
        default:
          return `translateY(${distance}px)`;
      }
    }
    return "translateY(0)";
  };

  return (
    <div
      ref={ref}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}s ease-out`,
      }}
    >
      {children}
    </div>
  );
};

export const Experience = () => {
  const navigate = useNavigate();

  const navigateBlog1 = () => {
    navigate("/blog1");
  };

  const experiences = [
    {
      title: "Machine Operator & Quality Assurance Tester",
      company: "Linamar Corporation",
      period: "May 2025 - August 2025",
      description:
        "Operated precision manufacturing equipment to produce high-quality input shafts for Ford vehicles. Performed comprehensive quality assurance testing to ensure all components met strict automotive industry standards and specifications.",
      hasBlog: true,
    },
    {
      title: "Machine Operator & Final Inspector",
      company: "Linamar Corporation",
      period: "July 2024 - August 2024",
      description:
        "Manufactured precision Chrysler pinions using advanced machining equipment. Conducted thorough final inspections to verify dimensional accuracy and surface finish quality, ensuring all parts met Chrysler's stringent manufacturing specifications.",
    },
    {
      title: "Machine Operator",
      company: "Linamar Corporation",
      period: "July 2023 - August 2023",
      description:
        "Operated specialized machinery to produce Chrysler sun gears with precise tolerances. Maintained consistent production quality while adhering to safety protocols and production schedules in a fast-paced manufacturing environment.",
    },
    {
      title: "Machine Operator",
      company: "Linamar Corporation",
      period: "July 2022 - September 2022",
      description:
        "Manufactured Ford pinions using precision machining equipment. Gained foundational experience in automotive parts manufacturing while maintaining quality standards and contributing to efficient production workflows.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
              Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] font-normal">
                Experience
              </span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] mx-auto" />
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Minimal Timeline Line */}
          <div className="absolute left-3 top-8 w-px h-[calc(100%-4rem)] bg-gradient-to-b from-[#AA8F76] to-[#D4C4B0] opacity-30 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative flex items-start group">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-0 w-6 h-6 bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] rounded-full items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="md:ml-12 w-full">
                    <div className="bg-[#040718] relative p-6 group-hover:scale-101 transition-transform rounded-xl overflow-hidden border border-white/10">
                      {/* Hover Image Overlay */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <img
                          src="/linamar-centre.jpg"
                          alt="Linamar The Centre"
                          className="object-contain rounded-lg opacity-30"
                        />
                      </div>

                      <div className="relative z-20">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-medium text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-[#D4C4B0] font-light italic">
                              {exp.company}
                            </p>
                          </div>
                          <span className="text-gray-400 text-sm font-light mt-1 sm:mt-0">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-gray-300 leading-relaxed font-light mb-4 max-w-3xl">
                          {exp.description}
                        </p>

                        {/* {exp.hasBlog && (
                          <button
                            onClick={navigateBlog1}
                            className="inline-flex items-center text-[#AA8F76] hover:text-[#D4C4B0] font-medium text-sm transition-colors duration-300 group/btn cursor-pointer"
                          >
                            View Blog
                            <svg
                              className="flex ml-1 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300 cursor-pointer"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        )} */}
                      </div>
                    </div>

                    {/* Subtle separator line */}
                    {index < experiences.length - 1 && (
                      <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50" />
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
