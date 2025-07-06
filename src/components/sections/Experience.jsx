import { ScrollReveal } from '../ScrollReveal'
import { Calendar, Building2, TrendingUp } from "lucide-react";

const ExperienceCard = ({ date, title, company, description, index }) => {
  return (
    <ScrollReveal direction="up" distance={50} duration={0.8} delay={index * 0.1}>
      <div className="group relative bg-gradient-to-br from-[#05091e] to-[#0a0f2a] rounded-xl p-6 sm:p-8 border border-white/10 hover:border-[#AA8F76] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#AA8F76]/20 h-full flex flex-col">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#AA8F76]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header with icons */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#AA8F76]/10 rounded-lg group-hover:bg-[#AA8F76]/20 transition-colors duration-300">
                <Building2 size={20} className="text-[#AA8F76]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#AA8F76] transition-colors duration-300">
                  {title}
                </h3>
                <span className="text-[#AA8F76] font-semibold text-sm sm:text-base">
                  {company}
                </span>
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center space-x-2 mb-4">
            <Calendar size={16} className="text-gray-400" />
            <span className="text-gray-400 text-sm sm:text-base">{date}</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base flex-grow">
            {description || "Operated manufacturing equipment and ensured quality standards for automotive transmission components, contributing to the production of high-precision parts for major automotive manufacturers."}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};

export const Experience = () => {
  const experiences = [
    {
      date: "May 2025 - Present",
      title: "Machine Operator & Quality Assurance Tester",
      company: "Linamar Corporation",
      description: "Leading quality assurance initiatives and advanced machine operations, ensuring optimal production efficiency and maintaining the highest standards for automotive components."
    },
    {
      date: "July 2024 - August 2024",
      title: "Machine Operator & Final Inspector",
      company: "Linamar Corporation",
      description: "Expanded responsibilities to include final inspection processes, combining machine operation expertise with quality control to deliver precision automotive parts."
    },
    {
      date: "July 2023 - August 2023",
      title: "Machine Operator",
      company: "Linamar Corporation",
      description: "Developed proficiency in operating complex manufacturing equipment, contributing to efficient production processes and maintaining safety standards."
    },
    {
      date: "July 2022 - September 2022",
      title: "Machine Operator",
      company: "Linamar Corporation",
      description: "Started my journey in manufacturing, learning fundamental machine operation skills and building the foundation for my technical expertise."
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-12 sm:py-20 bg-[#02040F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white text-center">
            Work <span className="text-[#AA8F76]">Experience</span>
          </h2>
          <hr className="h-1 w-14 m-auto bg-white border-0" />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <p className='text-center text-gray-400 mb-12 mt-5 max-w-2xl mx-auto text-sm sm:text-base'>
            My professional journey and key milestones.
          </p>
        </ScrollReveal>

        {/* Experience cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              date={exp.date}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              index={index}
            />
          ))}
        </div>

        {/* Summary stats */}
        {/* <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-[#05091e] rounded-lg p-6 border border-white/10 hover:border-[#AA8F76] transition-all duration-300">
              <div className="text-3xl font-bold text-[#AA8F76] mb-2">4+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="bg-[#05091e] rounded-lg p-6 border border-white/10 hover:border-[#AA8F76] transition-all duration-300">
              <div className="text-3xl font-bold text-[#AA8F76] mb-2">100%</div>
              <div className="text-gray-400 text-sm">Quality Standards</div>
            </div>
            <div className="bg-[#05091e] rounded-lg p-6 border border-white/10 hover:border-[#AA8F76] transition-all duration-300">
              <div className="text-3xl font-bold text-[#AA8F76] mb-2">10,000+</div>
              <div className="text-gray-400 text-sm">Total Parts Produced</div>
            </div>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  );
};
