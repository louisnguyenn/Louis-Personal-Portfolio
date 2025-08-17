import { useNavigate } from "react-router-dom";
import { ScrollReveal } from "../ScrollReveal";

export const Experience = () => {
  const navigate = useNavigate();

  const navigateBlog = () => {
    navigate("/blog1");
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-12 sm:py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <h2 className="sm:text-3xl md:text-5xl font-bold mb-4 text-white text-center">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0]">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] mx-auto rounded-full mb-8 md:mb-12"></div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 w-0.5 h-full bg-white hidden md:block"></div>

          <div className="absolute left-4 w-4 h-4 bg-white rounded-full border-2 border-white hidden md:block"></div>
          {/* experience 1 */}
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <div className="relative flex items-start mb-8">
              {/* Content */}
              <div className="md:ml-12 w-full group">
                <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 overflow-hidden">
                  {/* Hover Image Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <img
                      src="/linamar-centre.jpg"
                      alt="Linamar The Centre"
                      className="object-contain rounded-lg opacity-30"
                    />
                  </div>

                  {/* Content with higher z-index */}
                  <div className="relative z-20">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">
                          Machine Operator & Quality Assurance Tester
                        </h3>
                        <h3 className="italic">Linamar Corporation</h3>
                      </div>
                      <span className="text-[#AA8F76] font-medium text-sm">
                        May 2025 - Present
                      </span>
                    </div>

                    <p className="text-gray-400 mt-4 mb-4">
                      Operated precision manufacturing equipment to produce
                      high-quality input shafts for Ford vehicles. Performed
                      comprehensive quality assurance testing to ensure all
                      components met strict automotive industry standards and
                      specifications.
                    </p>

                    <div className="flex gap-3 items-center">
                      <a
                        onClick={navigateBlog}
                        target="_blank"
                        className="bg-[#AA8F76] text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:scale-103 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e] cursor-pointer duration-300"
                      >
                        View Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="absolute left-4 w-4 h-4 bg-white rounded-full border-2 border-white hidden md:block"></div>
          {/* experience 2*/}
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <div className="relative flex items-start mb-8">
              <div className="md:ml-12 w-full group">
                <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 overflow-hidden">
                  {/* Hover Image Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <img
                      src="/linamar-centre.jpg"
                      alt="Linamar The Centre"
                      className="object-contain rounded-lg opacity-30"
                    />
                  </div>

                  <div className="relative z-20">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">
                          Machine Operator & Final Inspector
                        </h3>
                        <h3 className="italic">Linamar Corporation</h3>
                      </div>
                      <span className="text-[#AA8F76] font-medium text-sm">
                        July 2024 - August 2024
                      </span>
                    </div>

                    <p className="text-gray-400 mt-4 mb-4">
                      Manufactured precision Chrysler pinions using advanced
                      machining equipment. Conducted thorough final inspections
                      to verify dimensional accuracy and surface finish quality,
                      ensuring all parts met Chrysler's stringent manufacturing
                      specifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="absolute left-4 w-4 h-4 bg-white rounded-full border-2 border-white hidden md:block"></div>
          {/* experience 3 */}
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <div className="relative flex items-start mb-8">
              {/* Content */}
              <div className="md:ml-12 w-full group">
                <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 overflow-hidden">
                  {/* Hover Image Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <img
                      src="/linamar-centre.jpg"
                      alt="Linamar The Centre"
                      className="object-contain rounded-lg opacity-30"
                    />
                  </div>

                  {/* Content with higher z-index */}
                  <div className="relative z-20">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">Machine Operator</h3>
                        <h3 className="italic">Linamar Corporation</h3>
                      </div>
                      <span className="text-[#AA8F76] font-medium text-sm">
                        July 2023 - August 2023
                      </span>
                    </div>

                    <p className="text-gray-400 mt-4 mb-4">
                      Operated specialized machinery to produce Chrysler sun
                      gears with precise tolerances. Maintained consistent
                      production quality while adhering to safety protocols and
                      production schedules in a fast-paced manufacturing
                      environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="absolute left-4 w-4 h-4 bg-white rounded-full border-2 border-white hidden md:block"></div>
          {/* experience 4 */}
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <div className="relative flex items-start mb-8">
              {/* Content */}
              <div className="md:ml-12 w-full group">
                <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 overflow-hidden">
                  {/* Hover Image Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <img
                      src="/linamar-centre.jpg"
                      alt="Linamar The Centre"
                      className="object-contain rounded-lg opacity-30"
                    />
                  </div>

                  {/* Content with higher z-index */}
                  <div className="relative z-20">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">Machine Operator</h3>
                        <h3 className="italic">Linamar Corporation</h3>
                      </div>
                      <span className="text-[#AA8F76] font-medium text-sm">
                        July 2022 - September 2022
                      </span>
                    </div>

                    <p className="text-gray-400 mt-4 mb-4">
                      Manufactured Ford pinions using precision machining
                      equipment. Gained foundational experience in automotive
                      parts manufacturing while maintaining quality standards
                      and contributing to efficient production workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
