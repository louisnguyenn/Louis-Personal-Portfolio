import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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

export const Projects = () => {
  const projects = [
    {
      title: "Gemify",
      description:
        "A music discovery web app that lets you search artists and explore their albums and tracks using the Spotify API. It also features an AI-powered chatbot powered by Gemini, allowing users to ask questions about songs, artists, and get personalized recommendations through prompt-engineered responses.",
      technologies: [
        "JavaScript",
        "React",
        "Bootstrap",
        "HTML",
        "CSS",
        "Spotify API",
        "Gemini API",
        "Node.js",
      ],
      githubLink: "https://github.com/louisnguyenn/Gemify",
      liveLink: "https://louisnguyenn.github.io/Gemify/",
    },
    {
      title: "FocusIn - GDSC Hacks 2025",
      description:
        "A lightweight and intuitive Google Chrome extension designed to help users stay focused and reduce distractions by blocking time-wasting websites. Whether you're studying, working, or just trying to build better habits, FocusIn empowers you to take control of your browsing time.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Chrome Storage API",
        "Gemini API",
        "Chrome Extensions",
      ],
      githubLink: "https://github.com/Wasay09/FocusIn",
    },
    {
      title: "Electron Collision Predictor",
      description:
        "This project uses linear regression to predict the invariant mass resulting from CERN electron collision data. By leveraging the energies of two colliding electrons, the model estimates the mass produced from the event. The project includes data cleaning, exploratory visualization, model training, and performance evaluation, all conducted in an interactive Jupyter Notebook environment.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      githubLink:
        "https://github.com/louisnguyenn/Electron_Collision_Predictor",
    },
    {
      title: "Air Quality Analysis in Cities",
      description:
        "This project focuses on examining air quality metrics across different cities, using Python to uncover patterns in environmental data and assess urban air pollution levels, Pandas and NumPy for data manipulation, Matplotlib and Seaborn for data visualizations, and Jupyter Notebook for a nice and clean summary of key findings.",
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "NumPy",
        "Jupyter Notebook",
      ],
      githubLink:
        "https://github.com/louisnguyenn/Global_Air_Quality_Data_Analysis",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] font-normal">
                Projects
              </span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] mx-auto" />
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              distance={30}
              duration={0.6}
              delay={index * 0.1}
            >
              <div className="group">
                <div className="border-l-2 border-gray-700 hover:border-[#AA8F76] transition-colors duration-300 pl-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 border border-white/10 p-5 rounded-xl">
                    {/* Project Info */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-[#D4C4B0] transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-gray-400 text-sm px-3 py-1 border border-gray-600 rounded-full hover:border-[#AA8F76] hover:text-[#D4C4B0] transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-300 leading-relaxed font-light max-w-3xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:items-end">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-[#D4C4B0] font-medium transition-colors duration-300 group/link"
                      >
                        <Github size={18} />
                        View Code
                        <ArrowRight
                          size={16}
                          className="transform group-hover/link:translate-x-1 transition-transform duration-300"
                        />
                      </a>

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#AA8F76] hover:text-[#D4C4B0] font-medium transition-colors duration-300 group/link"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                          <ArrowRight
                            size={16}
                            className="transform group-hover/link:translate-x-1 transition-transform duration-300"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
