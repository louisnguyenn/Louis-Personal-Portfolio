import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
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
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState(true);
  const [isPreviouslyOpen, setIsPreviouslyOpen] = useState(false);
  const [isLoveOpen, setIsLoveOpen] = useState(false);
  const [isPassionateOpen, setIsPassionateOpen] = useState(false);

  return (
    <section id="about" className="pt-8">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.2}>
          <div className="mb-5">
            <Collapsible
              open={isCurrentlyOpen}
              onOpenChange={setIsCurrentlyOpen}
              className="mb-6"
            >
              <CollapsibleTrigger className="w-full text-left block">
                <p className="text-gray-300 leading-relaxed text-lg font-light border border-white/10 p-2 rounded-lg hover:border-white/40 hover:text-white transition-colors cursor-pointer flex items-center justify-between">
                  <span className="font-medium">I'm currently...</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isCurrentlyOpen ? 'rotate-180' : ''
                    }`}
                  />
                </p>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <ul className="list-disc list-inside text-gray-300 leading-relaxed text-lg font-light space-y-1">
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
                    building full-stack web applications with Next.js, Node.js,
                    and Express.js
                  </li>
                  <li>
                    learning devops practices and skills like Docker,
                    Kubernetes, and CI/CD Pipelines
                  </li>
                  <li>diving into automation with Python and Bash scripts</li>
                  <li>exploring machine learning and scikit-learn</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible
              open={isPreviouslyOpen}
              onOpenChange={setIsPreviouslyOpen}
              className="mb-6"
            >
              <CollapsibleTrigger className="w-full text-left block">
                <p className="text-gray-300 leading-relaxed text-lg font-light border border-white/10 p-2 rounded-lg hover:border-white/40 hover:text-white transition-colors cursor-pointer flex items-center justify-between">
                  <span className="font-medium">I previously...</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isPreviouslyOpen ? 'rotate-180' : ''
                    }`}
                  />
                </p>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <ul className="list-disc list-inside text-gray-300 leading-relaxed text-lg font-light space-y-1">
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
                    as a machine operator and quality assurance
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
              </CollapsibleContent>
            </Collapsible>

            <Collapsible
              open={isLoveOpen}
              onOpenChange={setIsLoveOpen}
              className="mb-6"
            >
              <CollapsibleTrigger className="w-full text-left block">
                <p className="text-gray-300 leading-relaxed text-lg font-light border border-white/10 p-2 rounded-lg hover:border-white/40 hover:text-white transition-colors cursor-pointer flex items-center justify-between">
                  <span className="font-medium">I love to...</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isLoveOpen ? 'rotate-180' : ''
                    }`}
                  />
                </p>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <ul className="list-disc list-inside text-gray-300 leading-relaxed text-lg font-light space-y-1">
                  <li>be physically active (walking, cardio)</li>
                  <li>powerlift and bodybuild at the gym</li>
                  <li>
                    play sports like basketball, volleyball, and badminton
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible
              open={isPassionateOpen}
              onOpenChange={setIsPassionateOpen}
              className="mb-6"
            >
              <CollapsibleTrigger className="w-full text-left block">
                <p className="text-gray-300 leading-relaxed text-lg font-light border border-white/10 p-2 rounded-lg hover:border-white/40 hover:text-white transition-colors cursor-pointer flex items-center justify-between">
                  <span className="font-medium">I'm passionate about...</span>
                  <ChevronDown
                    className={`w-5 h-5 inline-block ml-2 transition-transform duration-200 ${
                      isPassionateOpen ? 'rotate-180' : ''
                    }`}
                  />
                </p>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <ul className="list-disc list-inside text-gray-300 leading-relaxed text-lg font-light space-y-1">
                  <li>continuous learning</li>
                  <li>making an impact</li>
                  <li>becoming a multi-disciplinary engineer</li>
                  <li>
                    combining software and hardware to create innovative
                    solutions
                  </li>
                  <li>
                    devops, machine learning, control systems, and
                    robotics/automation
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
