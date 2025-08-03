import { ScrollReveal } from '../ScrollReveal'

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-12 sm:py-20 bg-[#02040F]">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <h2 className="text-5xl font-bold mb-4 text-white text-center">Work <span className="text-[#AA8F76]">Experience</span></h2>
          <hr className="h-1 w-14 m-auto bg-white border-0" />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <p className='text-center text-muted-foreground mb-12 mt-5 max-w-2xl mx-auto text-gray-400'>
            My professional journey.
          </p>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 w-0.5 h-full bg-white hidden md:block"></div>

          {/* experience 1 */}
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <div className="relative flex items-start mb-8">
              {/* Timeline Dot */}
              <div className="absolute left-4 w-4 h-4 bg-white rounded-full border-2 border-white hidden md:block"></div>
              
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
                        <h3 className="text-xl font-bold">Machine Operator & Quality Assurance Tester</h3>
                        <h3 className="italic">Linamar Corporation</h3>
                      </div>
                      <span className="text-[#AA8F76] font-medium text-sm">May 2025 - Present</span>
                    </div>

                    <p className="text-gray-400 mt-4 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>

                    <div className="flex gap-3 items-center">
                      <a target="_blank" className="bg-[#AA8F76] text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e]">View Blog</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* experience 2*/}
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <div className="relative flex items-start mb-8">
              {/* Timeline Dot */}
              <div className="absolute left-4 w-4 h-4 bg-white rounded-full border-2 border-white hidden md:block"></div>
              
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
                        <h3 className="text-xl font-bold">Machine Operator & Final Inspector</h3>
                        <h3 className="italic">Linamar Corporation</h3>
                      </div>
                      <span className="text-[#AA8F76] font-medium text-sm">July 2024 - August 2024</span>
                    </div>

                    <p className="text-gray-400 mt-4 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* experience 3 */}
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <div className="relative flex items-start mb-8">
              {/* Timeline Dot */}
              <div className="absolute left-4 w-4 h-4 bg-white rounded-full border-2 border-white hidden md:block"></div>
              
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
                      <span className="text-[#AA8F76] font-medium text-sm">July 2023 - August 2023</span>
                    </div>

                    <p className="text-gray-400 mt-4 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* experience 4 */}
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <div className="relative flex items-start mb-8">
              {/* Timeline Dot */}
              <div className="absolute left-4 w-4 h-4 bg-white rounded-full border-2 border-white hidden md:block"></div>
              
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
                      <span className="text-[#AA8F76] font-medium text-sm">July 2022 - September 2022</span>
                    </div>

                    <p className="text-gray-400 mt-4 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
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
