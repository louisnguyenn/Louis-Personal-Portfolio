const TimelineItem = ({ date, title, company, description, isLast = false }) => {
  return (
    <div className="relative flex items-start mb-8">
      {/* timeline line */}
      {!isLast && (
        <div className="absolute left-3.5 top-8 w-1 h-full bg-white"></div>
      )}

      {/* timeline dot */}
      <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center z-10"></div>

      {/* content */}
      <div className="ml-6 flex-1">
        <div className="bg-[#05091e] rounded-lg p-6 border border-white/10 hover:border-[#AA8F76] hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="text-[#AA8F76] font-medium text-sm sm:text-base pl-6">{date}</span>
          </div>
          <h4 className="text-lg text-[#AA8F76] mb-3 font-medium">{company}</h4>
          <p className="text-gray-300 leading-relaxed">{description}</p>
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
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 bg-[#030518]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-white text-center">
          Work <span className="text-[#AA8F76]">Experience</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-gray-400'>
          My professional journey and key milestones.
        </p>

        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              date={exp.date}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
