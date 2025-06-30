import { ScrollReveal } from '../ScrollReveal'

const TimelineItem = ({ date, title, company, description, isLeft, isLast = false }) => {
  return (
    <div className="relative mb-8">
      {/* timeline line */}
      {!isLast && (
        <div className="absolute left-1/2 top-8 w-1 h-full bg-white transform -translate-x-1/2 z-0"></div>
      )}

      <div className="flex w-full">
        {/* left side */}
        <div className="w-[48%] pr-4">
          {isLeft && (
            <div className="bg-[#05091e] rounded-lg p-10 border border-white/10 hover:border-[#AA8F76] hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col mb-3">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <span className="text-[#AA8F76] font-medium text-sm">{date}</span>
              </div>
              <h4 className="text-lg text-[#AA8F76] mb-3 font-medium">{company}</h4>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
          )}
        </div>

        {/* timeline dot */}
        <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center z-10 relative"></div>

        {/* right side */}
        <div className="w-[48%] pl-4">
          {!isLeft && (
            <div className="bg-[#05091e] rounded-lg p-10 border border-white/10 hover:border-[#AA8F76] hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col mb-3">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <span className="text-[#AA8F76] font-medium text-sm">{date}</span>
              </div>
              <h4 className="text-lg text-[#AA8F76] mb-3 font-medium">{company}</h4>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  const experiences = [
    {
      date: "May 2025 - Present",
      title: "Machine Operator & Quality Assurance Tester",
      company: "Linamar Corporation",
      description: ""
    },
    {
      date: "July 2024 - August 2024",
      title: "Machine Operator & Final Inspector",
      company: "Linamar Corporation",
      description: ""
    },
    {
      date: "July 2023 - August 2023",
      title: "Machine Operator",
      company: "Linamar Corporation",
      description: ""
    },
    {
      date: "July 2022 - September 2022",
      title: "Machine Operator",
      company: "Linamar Corporation",
      description: ""
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <h2 className="text-5xl font-bold mb-4 text-white text-center">
            Work <span className="text-[#AA8F76]">Experience</span>
          </h2>
          <hr className="h-1 w-14 m-auto bg-white border-0" />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <p className='text-center text-muted-foreground mb-12 mt-5 max-w-2xl mx-auto text-gray-400'>
            My professional journey and key milestones.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="relative">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                date={exp.date}
                title={exp.title}
                company={exp.company}
                description={exp.description}
                isLeft={index % 2 === 0}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
