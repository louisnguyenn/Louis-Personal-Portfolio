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

export const About = () => {
  return (
    <section id="about" className="flex items-center justify-center py-10">
      <div className="mx-auto px-6">
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
                  devops, machine learning, control systems, and
                  robotics/automation
                </li>
              </ul>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
