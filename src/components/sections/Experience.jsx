import { ScrollReveal } from '../animations/ScrollReveal';

export const Experience = () => {
  const experiences = [
    {
      title: 'Maintenance Assistant',
      company: 'RIMOWA',
      period: 'June 2026 \u2014 Present',
      description: 'Material handling, workstation design, engineering and production collaboration, and manufacturing process improvement.',
      link: 'https://www.rimowa.com/ca/en/home',
      logo: '/logos/rimowa_logo.jpg',
    },
    {
      company: 'Linamar Corporation',
      period: '2022 \u2014 2025',
      link: 'https://www.linamar.com/',
      logo: '/logos/linamar_logo.jpg',
      positions: [
        {
          title: 'Machine Operator',
          period: 'May 2025 \u2014 August 2025',
          description: 'Continued honing my skills in CNC machining, where I simultaneously operated four CNC lathes and developed experience in the quality assurance lab, where I learned CMM operations and GD&T principles.',
        },
        {
          title: 'Machine Operator',
          period: 'July 2024 \u2014 August 2024',
          description: 'Continued developing my skills with CNC operation, where I simultaneously operated two CNC lathes and a broach machine.',
        },
        {
          title: 'Machine Operator',
          period: 'July 2023 \u2014 August 2023',
          description: 'Progressed from quality inspection into CNC machining, where I operated a double disk grinder.',
        },
        {
          title: 'Quality Inspector',
          period: 'July 2022 \u2014 September 2022',
          description: 'Started my manufacturing career on the production floor, gaining firsthand experience with standardized work, quality requirements, and high-volume automotive manufacturing.',
        },
      ],
    },
  ];

  return (
    <section id="experience" className="pt-24">
      <div className="w-full px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="mb-12 text-base font-medium tracking-[0.2em] text-gray-400">
            EXPERIENCE
          </h2>
        </ScrollReveal>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <article className="grid grid-cols-[64px_1fr] gap-x-5 gap-y-2 sm:grid-cols-[72px_1fr_auto] sm:items-start">
                {/* Logo */}
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${exp.company}`}
                  className="row-span-2"
                >
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-16 w-16 rounded-xl object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </a>

                {/* Company + role + description */}
                <div className="min-w-0">
                  <h3 className="text-lg font-medium text-white">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-500 hover:underline hover:text-[#D4C4B0]"
                    >
                      {exp.company}
                    </a>
                  </h3>

                  {/* Single-role entries (e.g. RIMOWA) render as before */}
                  {!exp.positions && (
                    <>
                      <p className="mt-1 text-base text-[#D4C4B0] font-light italic">
                        {exp.title}
                      </p>
                      <p className="mt-1 text-base text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </>
                  )}

                  {/* Multi-role entries (e.g. Linamar) render as a progression list */}
                  {exp.positions && (
                    <div className="mt-3 space-y-4 border-l border-white/10 pl-5">
                      {exp.positions.map((pos, posIndex) => (
                        <div key={posIndex}>
                          <div className="flex flex-wrap items-baseline gap-x-2">
                            <p className="text-base text-[#D4C4B0] font-light italic">
                              {pos.title}
                            </p>
                            <span className="text-sm text-gray-500">
                              | {pos.period}
                            </span>
                          </div>
                          <p className="mt-1 text-base text-gray-400 leading-relaxed">
                            {pos.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Date */}
                <p className="col-start-2 text-sm text-gray-500 sm:col-start-3 sm:row-start-1 sm:whitespace-nowrap sm:pt-1 sm:text-base">
                  {exp.period}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
