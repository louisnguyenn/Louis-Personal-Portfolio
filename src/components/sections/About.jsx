import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ScrollReveal } from '../animations/ScrollReveal';

export const About = () => {
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState(true);
  const [isPreviouslyOpen, setIsPreviouslyOpen] = useState(false);
  const [isLoveOpen, setIsLoveOpen] = useState(false);
  const [isPassionateOpen, setIsPassionateOpen] = useState(false);

  const linkClasses =
    'text-gray-300 underline decoration-white/20 underline-offset-4 transition-all duration-300 hover:text-white hover:decoration-white/60';

  const itemClasses =
    'text-base font-light leading-relaxed text-gray-400 ml-5 list-disc';

  return (
    <section id="about" className="pt-24">
      <div className="w-full px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="mb-5 text-base font-medium tracking-[0.2em] text-gray-400">
            ABOUT
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-4">
            {/* Currently */}
            <Collapsible
              open={isCurrentlyOpen}
              onOpenChange={setIsCurrentlyOpen}
              className="border-b border-white/10"
            >
              <CollapsibleTrigger className="group w-full cursor-pointer text-left">
                <div className="flex items-center justify-between py-5">
                  <h3 className="text-lg font-normal text-gray-300 transition-colors duration-300 group-hover:text-white">
                    I'm currently...
                  </h3>

                  <ChevronDown
                    size={18}
                    className={`text-gray-500 transition-all duration-300 group-hover:text-gray-300 ${
                      isCurrentlyOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="mb-6 border-l border-white/10 pl-5">
                  <ul className="space-y-3 list-outside">
                    <li className={itemClasses}>
                      studying{' '}
                      <a
                        href="https://www.uoguelph.ca/programs/engineering-systems-and-computing/"
                        className={linkClasses}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Engineering Systems and Computing
                      </a>{' '}
                      at the{' '}
                      <a
                        href="https://www.uoguelph.ca/"
                        className={linkClasses}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        University of Guelph
                      </a>
                      .
                    </li>
                    <li className={itemClasses}>
                      working at{' '}
                      <a
                        href="https://www.rimowa.com/ca/en/home"
                        className={linkClasses}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RIMOWA
                      </a>{' '}
                      as a Facilities and Maintenance Assistant.
                    </li>
                    <li className={itemClasses}>
                      researching computer vision and machine learning, and
                      their applications in industrial automation and
                      intelligent robotic manufacturing systems.
                    </li>
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Previously */}
            <Collapsible
              open={isPreviouslyOpen}
              onOpenChange={setIsPreviouslyOpen}
              className="border-b border-white/10"
            >
              <CollapsibleTrigger className="group w-full cursor-pointer text-left">
                <div className="flex items-center justify-between py-5">
                  <h3 className="text-lg font-normal text-gray-300 transition-colors duration-300 group-hover:text-white">
                    I previously...
                  </h3>

                  <ChevronDown
                    size={18}
                    className={`text-gray-500 transition-all duration-300 group-hover:text-gray-300 ${
                      isPreviouslyOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="mb-6 border-l border-white/10 pl-5">
                  <ul className="space-y-3 list-outside">
                    <li className={itemClasses}>
                      returned to{' '}
                      <a
                        href="https://www.linamar.com/"
                        className={linkClasses}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Linamar Corporation
                      </a>{' '}
                      as a CNC Machine Operator and Quality Assurance Inspector.
                    </li>
                    <li className={itemClasses}>
                      worked at{' '}
                      <a
                        href="https://www.linamar.com/"
                        className={linkClasses}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Linamar Corporation
                      </a>{' '}
                      as a CNC Machine Operator.
                    </li>
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Love */}
            <Collapsible
              open={isLoveOpen}
              onOpenChange={setIsLoveOpen}
              className="border-b border-white/10"
            >
              <CollapsibleTrigger className="group w-full cursor-pointer text-left">
                <div className="flex items-center justify-between py-5">
                  <h3 className="text-lg font-normal text-gray-300 transition-colors duration-300 group-hover:text-white">
                    I love to...
                  </h3>

                  <ChevronDown
                    size={18}
                    className={`text-gray-500 transition-all duration-300 group-hover:text-gray-300 ${
                      isLoveOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="mb-6 border-l border-white/10 pl-5">
                  <ul className="space-y-3 list-outside">
                    <li className={itemClasses}>
                      learn about bodybuilding and muscle hypertrophy.
                    </li>
                    <li className={itemClasses}>
                      research optimal nutrition and healthy living.
                    </li>
                    <li className={itemClasses}>eat sushi.</li>
                    <li className={itemClasses}>travel.</li>
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Passionate */}
            <Collapsible
              open={isPassionateOpen}
              onOpenChange={setIsPassionateOpen}
              className="border-b border-white/10"
            >
              <CollapsibleTrigger className="group w-full cursor-pointer text-left">
                <div className="flex items-center justify-between py-5">
                  <h3 className="text-lg font-normal text-gray-300 transition-colors duration-300 group-hover:text-white">
                    I'm passionate about...
                  </h3>

                  <ChevronDown
                    size={18}
                    className={`text-gray-500 transition-all duration-300 group-hover:text-gray-300 ${
                      isPassionateOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="mb-6 border-l border-white/10 pl-5">
                  <ul className="space-y-3 list-outside">
                    <li className={itemClasses}>continuous learning.</li>
                    <li className={itemClasses}>making a meaningful impact.</li>
                    <li className={itemClasses}>improving people's lives.</li>
                    <li className={itemClasses}>
                      building things from scratch.
                    </li>
                    <li className={itemClasses}>
                      becoming a multidisciplinary engineer.
                    </li>
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
