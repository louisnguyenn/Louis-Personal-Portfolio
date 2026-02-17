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

  return (
    <section id="about" className="pt-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
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
                    bridging software and hardware with C/C++ and
                    microcontrollers
                  </li>
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
                  <li>be physically active</li>
                  <li>powerlift and bodybuild</li>
                  <li>play sports like basketball and badminton</li>
                  <li>watch anime</li>
                  <li>travel and learn about new cultures</li>
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
                  <li>building things from scratch</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
