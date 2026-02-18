import { ScrollReveal } from "../animations/ScrollReveal";

export const Experience = () => {
  const experiences = [
    {
      title: 'Machine Operator & Quality Assurance',
      company: 'Linamar Corporation',
      period: 'May 2025 - August 2025',
      description: '',
      link: 'https://www.linamar.com/',
    },
    {
      title: 'Machine Operator & Final Inspector',
      company: 'Linamar Corporation',
      period: 'July 2024 - August 2024',
      description: '',
      link: 'https://www.linamar.com/',
    },
  ];

  return (
    <section id="experience" className="flex items-center justify-center pt-18">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              My Experience
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Minimal Timeline Line */}
          <div className="absolute left-3 top-8 w-px h-[calc(100%-4rem)] bg-white opacity-30 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative flex items-start group">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-0 w-6 h-6 bg-white rounded-full items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  <div className="md:ml-12 w-full">
                    <div className="relative p-6 group-hover:scale-101 hover:shadow-xl hover:shadow-[#AA8F76]/10 transition-all duration-500 overflow-hidden rounded-xl border border-white/10">
                      <div className="relative z-20">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-medium text-white mb-1">
                              <a
                                href={exp.link}
                                target="_blank"
                                className="hover:text-[#D4C4B0] transition-colors hover:underline duration-300"
                              >
                                {exp.company}
                              </a>
                            </h3>
                            <p className="text-[#D4C4B0] font-light italic">
                              {exp.title}
                            </p>
                          </div>
                          <span className="text-gray-400 text-sm font-light mt-1 sm:mt-0">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-gray-300 leading-relaxed font-light mb-4 max-w-3xl">
                          {exp.description}
                        </p>
                      </div>
                    </div>
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
