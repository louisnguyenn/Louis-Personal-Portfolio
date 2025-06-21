// export const Experience = () => {
//   return (
//     <section id="experience" className="min-h-screen flex items-center justify-center py-20">
//       <div className="max-w-3xl mx-auto px-4">
//         <h2 className="text-5xl font-bold mb-8 text-white text-center">Work <span className="text-[#AA8F76]">Experience</span></h2>
//         <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-gray-400'>
//           My professional journey.
//         </p>

//         {/* experience 1 */}
//         <div className="bg-[#0a0a0a] relative rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
//           <h3 className="font-semibold"><a href="https://www.linamar.com/" target="_blank" className="hover:underline">Linamar Corporation</a> (May 2025 — Present)</h3>
//           <p className="text-gray-300 mb-6">
//             <br />
//             <span className="text-sm">CNC Machine Operator | May 2025 — Present</span>
//             <br />
//             <span className="text-sm">Quality Assurance Tester | May 2025 — Present</span>
//           </p>
//         </div>

//         {/* experience 2 */}
//         <div className="bg-[#0a0a0a] relative rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
//           <h3 className="font-semibold"><a href="https://www.linamar.com/" target="_blank" className="hover:underline">Linamar Corporation</a> (July 2024 — August 2024)</h3>
//           <p className="text-gray-300 mb-6">
//             <br />
//             <span className="text-sm">Final Inspector | August 2024 — August 2024</span>
//             <br />
//             <span className="text-sm">CNC Machine Operator | July 2024 — August 2024</span>
//           </p>
//         </div>

//         {/* experience 3 */}
//         <div className="bg-[#0a0a0a] relative rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
//           <h3 className="font-semibold"><a href="https://www.linamar.com/" target="_blank" className="hover:underline">Linamar Corporation</a> (July 2023 — August 2023)</h3>
//           <p className="text-gray-300 mb-6">
//             <br />
//             <span className="text-sm">CNC Machine Operator</span>
//           </p>
//         </div>

//         {/* experience 4 */}
//         <div className="bg-[#0a0a0a] relative rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
//           <h3 className="font-semibold"><a href="https://www.linamar.com/" target="_blank" className="hover:underline">Linamar Corporation</a> (July 2022 — September 2022)</h3>
//           <p className="text-gray-300 mb-6">
//             <br />
//             <span className="text-sm">Machine Operator</span>
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

const TimelineItem = ({ date, title, company, description, isLast = false }) => {
  return (
    <div className="relative flex items-start mb-8">
      {/* timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-1 h-full bg-white opacity-15"></div>
      )}
      
      {/* timeline dot */}
      <div className="flex-shrink-0 w-12 h-12 bg-[#152046] rounded-full flex items-center justify-center border-4 border-[#AA8F76] z-10">
        <div className="w-3 h-3 bg-[#AA8F76] rounded-full"></div>
      </div>
      
      {/* content */}
      <div className="ml-6 flex-1">
        <div className="bg-[#05091e] rounded-lg p-6 border border-white/10 hover:border-[#AA8F76] transition-colors duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="text-[#AA8F76] font-medium text-sm sm:text-base">{date}</span>
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
      date: "2023 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      description: "Led the development of user-facing features using React and TypeScript. Collaborated with design teams to implement responsive web applications and improved performance by 40%."
    },
    {
      date: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB. Built RESTful APIs and implemented authentication systems for multiple client projects."
    },
    {
      date: "2020 - 2021",
      title: "Junior Developer",
      company: "StartUp Ventures",
      description: "Started my professional journey building responsive websites and learning modern web development practices. Contributed to team projects and gained experience in agile methodologies."
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 bg-[#030518]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-white text-center">
          Work <span className="text-[#AA8F76]">Experience</span>
        </h2>
        <p className='text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg'>
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
