import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
  children,
  direction = 'up',
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
        case 'up':
          return `translateY(${distance}px)`;
        case 'down':
          return `translateY(-${distance}px)`;
        case 'left':
          return `translateX(${distance}px)`;
        case 'right':
          return `translateX(-${distance}px)`;
        default:
          return `translateY(${distance}px)`;
      }
    }
    return 'translateY(0)';
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
      title: 'SmartCV',
      description:
        'An AI-powered web app that helps you create, tailor, and polish your resume and cover letter for any job posting. Built with React, Express.js, and the Gemini API, SmartCV makes job applications smarter and more personalized, increasing your chances of landing a job.',
      technologies: [
        'React',
        'JavaScript',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'Gemini API',
      ],
      githubLink: 'https://github.com/louisnguyenn/SmartCV',
    },
    {
      title: 'Percepta',
      description:
        'A full-stack web application that uses your webcam or uploaded recordings to detect unauthorized human presence in real-time. Designed with home and office security in mind, it captures video frames and logs intrusions.',
      technologies: [
        'React',
        'JavaScript',
        'Tailwind CSS',
        'Node.js',
        'Python',
        'Flask',
        'OpenCV',
      ],
      githubLink: 'https://github.com/louisnguyenn/Percepta',
    },
    {
      title: 'Electron Collision Predictor',
      description:
        'Using linear regression to predict the invariant mass resulting from CERN electron collision data. The project includes data cleaning, exploratory visualization, model training, and performance evaluation, all conducted in an interactive Jupyter Notebook environment.',
      technologies: [
        'Python',
        'Pandas',
        'NumPy',
        'scikit-learn',
        'Matplotlib',
        'Seaborn',
        'Jupyter Notebook',
      ],
      githubLink:
        'https://github.com/louisnguyenn/Electron_Collision_Predictor',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              My{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] font-normal">
                Projects
              </span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] mx-auto" />
          </div>
        </ScrollReveal>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              distance={30}
              duration={0.6}
              delay={index * 0.1}
            >
              <div className="group h-full bg-[#040718] border border-white/10 rounded-xl p-6 hover:border-[#AA8F76] transition-all duration-300 hover:shadow-xl hover:shadow-[#AA8F76]/10 hover:-translate-y-1 flex flex-col">
                {/* Title */}
                <h3 className="text-2xl font-light text-white group-hover:text-[#D4C4B0] transition-colors duration-300 mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed font-light mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-gray-400 text-xs px-2 py-1 border border-gray-600 rounded-full hover:border-[#AA8F76] hover:text-[#D4C4B0] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-gray-300 font-medium hover:text-white transition-colors duration-300 group/link py-2 px-4 border border-gray-600 rounded-lg hover:border-[#AA8F76]"
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
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300 group/link"
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
