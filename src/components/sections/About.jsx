import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.8,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, []);

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

const SkillBar = ({ skill, percentage, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <div
      ref={skillBarRef}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm font-medium">{skill}</span>
      </div>
      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] rounded-full transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{
            width: `${percentage}%`,
            transitionDelay: isVisible ? `${delay}ms` : '0ms',
          }}
        />
      </div>
    </div>
  );
};

export const About = () => {
  const skills = [
    { name: 'C', percentage: 100 },
    { name: 'Python', percentage: 100 },
    { name: 'JavaScript', percentage: 100 },
    { name: 'TypeScript', percentage: 100 },
    { name: 'HTML/CSS', percentage: 100 },
    { name: 'SQL', percentage: 100 },
  ];

  const technologies = [
    'React',
    'Tailwind CSS',
    'Node.js',
    'Next.js',
    'Express.js',
    'REST APIs',
    'OpenCV',
    'Flask',
    'Pandas',
    'NumPy',
    'scikit-learn',
    'PostgreSQL',
    'Vercel',
  ];

  const tools = [
    'Git',
    'GitHub',
    'Jupyter Notebook',
    'Android Studio',
    'Linux',
    'VS Code',
    'Docker',
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] font-normal">
                Me
              </span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] mx-auto" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto mb-20">
            <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
              <span className="font-medium">I'm currently...</span>
              <ul className="list-disc list-inside">
                <li>
                  studying{' '}
                  <a
                    href="https://www.uoguelph.ca/programs/engineering-systems-and-computing/"
                    className="text-gray-300 hover:text-white transition-all duration-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Engineering Systems and Computing
                  </a>{' '}
                  at the{' '}
                  <a
                    href="https://www.uoguelph.ca/"
                    className="text-gray-300 hover:text-white transition-all duration-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of Guelph
                  </a>
                  .
                </li>
                <li>
                  building full-stack web applications with a React frontend and
                  a Express.js or Flask backend
                </li>
                <li>exploring machine learning and scikit-learn</li>
              </ul>
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
              <span className="font-medium">I previously...</span>
              <ul className="list-disc list-inside">
                <li>
                  worked at{' '}
                  <a
                    href="https://www.linamar.com/"
                    className="text-gray-300 hover:text-white transition-all duration-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linamar Corporation
                  </a>{' '}
                  as a machine operator
                </li>
                <li>
                  participated in{' '}
                  <a
                    href="https://www.gdschacks.com/"
                    className="text-gray-300 hover:text-white transition-all duration-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GDSC Hacks
                  </a>{' '}
                  where we created{' '}
                  <a
                    href="https://github.com/Wasay09/FocusIn"
                    className="text-gray-300 hover:text-white transition-all duration-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FocusIn
                  </a>
                </li>
              </ul>
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
              <span className="font-medium">I love to...</span>
              <ul className="list-disc list-inside">
                <li>to be physically active (walking, cardio)</li>
                <li>powerlift and bodybuild at the gym</li>
                <li>play sports like basketball, volleyball, and badminton</li>
              </ul>
            </p>

            <p className="text-gray-300 leading-relaxed text-lg font-light">
              <span className="font-medium">I'm passionate about...</span>
              <ul className="list-disc list-inside">
                <li>continuous learning</li>
                <li>becoming a multi-disciplinary engineer</li>
                <li>
                  combining software and hardware to create innovative solutions
                </li>
                <li>
                  devops, machine learning, control systems, and robotics/automation
                </li>
              </ul>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          <ScrollReveal
            direction="right"
            delay={0.3}
          >
            <div>
              <h3 className="text-2xl font-light text-white mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0]">
                  Skills
                </span>
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="left"
            delay={0.4}
          >
            <div>
              <h3 className="text-2xl font-light text-white mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0]">
                  Technologies
                </span>
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
                    Frameworks & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-gray-300 text-sm px-3 py-1 border border-gray-600 rounded-full hover:border-[#AA8F76] hover:text-[#D4C4B0] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
                    Developer/Design Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-gray-300 text-sm px-3 py-1 border border-gray-600 rounded-full hover:border-[#AA8F76] hover:text-[#D4C4B0] transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
