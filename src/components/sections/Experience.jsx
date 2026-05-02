import { ScrollReveal } from '../animations/ScrollReveal';

export const Experience = () => {
  const experiences = [
    {
      title: 'Production Operator',
      company: "Piller's Fine Foods",
      period: 'May 2026 - August 2026',
      description: 'Production Operations for Meat Processing and Packaging',
      link: 'https://www.pillers.com/',
      logo: '/logos/pillers.webp',
    },
    {
      title: 'CNC Machine Operator',
      company: 'Linamar Corporation',
      period: 'May 2025 - August 2025',
      description: 'CNC Lathe Operation and Quality Assurance for Precision Automotive Manufacturing',
      link: 'https://www.linamar.com/',
      logo: '/logos/linamar.webp',
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
                          {/* Logo + Text grouped together */}
                          <div className="flex items-center gap-4">
                            {exp.logo && (
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-16 h-16 rounded-lg object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            )}
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
                          </div>

                          <span className="text-gray-400 text-sm font-light mt-1 sm:mt-0">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-gray-300 leading-relaxed font-light mt-4 max-w-3xl">
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
