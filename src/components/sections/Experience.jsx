import { ScrollReveal } from '../animations/ScrollReveal';

export const Experience = () => {
  const experiences = [
    {
      title: 'Maintenance Assistant',
      company: 'RIMOWA',
      period: 'June 2026 \u2014 Present',
      description: 'Workstation Design and Material Handling',
      link: 'https://www.rimowa.com/ca/en/home',
      logo: '/logos/rimowa_logo.jpg',
    },
    {
      title: 'Machine Operator',
      company: 'Linamar Corporation',
      period: 'May 2025 \u2014 August 2025',
      description: 'CNC Manufacturing & Quality Assurance',
      link: 'https://www.linamar.com/',
      logo: '/logos/linamar_logo.jpg',
    },
    {
      title: 'Machine Operator',
      company: 'Linamar Corporation',
      period: 'July 2024 \u2014 August 2024',
      description: 'CNC Operation',
      link: 'https://www.linamar.com/',
      logo: '/logos/linamar_logo.jpg',
    },
    {
      title: 'Machine Operator',
      company: 'Linamar Corporation',
      period: 'July 2023 \u2014 August 2023',
      description: 'Double Disk Grinding',
      link: 'https://www.linamar.com/',
      logo: '/logos/linamar_logo.jpg',
    },
    {
      title: 'Quality Inspector',
      company: 'Linamar Corporation',
      period: 'July 2022 \u2014 September 2022',
      description: 'Quality Inspection',
      link: 'https://www.linamar.com/',
      logo: '/logos/linamar_logo.jpg',
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

                  <p className="mt-1 text-base text-[#D4C4B0] font-light font-style: italic">
                    {exp.title}
                  </p>

                  <p className="mt-1 text-base text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
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
