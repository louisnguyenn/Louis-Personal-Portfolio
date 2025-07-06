import { ScrollReveal } from '../ScrollReveal'
import StarBorder from '../StarBorder'
import { Mail, Github, Linkedin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 md:py-20 bg-[#02040F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            About <span className="text-[#AA8F76]">Me</span>
          </h2>
          <hr className="h-1 w-14 m-auto bg-white border-0" />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <p className='text-center text-muted-foreground mb-8 md:mb-12 mt-5 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base'>
            Introduction.
          </p>
        </ScrollReveal>

        {/* mobile: stack vertically, desktop: side by side */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:items-start">

          {/* profile image */}
          <div className="flex-shrink-0 order-1 lg:order-none">
            <ScrollReveal direction="up" distance={50} duration={0.8}>
              <div className="flex flex-col items-center">
                <img
                  src="/pfp.jpg"
                  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-85 lg:h-85 object-cover rounded-full border border-white/10 hover:border-[#AA8F76] transition-all duration-300 hover:shadow-2xl hover:shadow-[#AA8F76]/20"
                  alt="Louis Nguyen Profile Picture"
                />
                <div className="flex space-x-4 sm:space-x-6 py-6 sm:py-7 justify-center">
                  <a
                    href="mailto:louis.nguyen550@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AA8F76] hover:text-white transition-all duration-300 hover:-translate-y-1"
                    aria-label="Email Louis"
                  >
                    <Mail size={28} className="sm:w-8 sm:h-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/louisnguyenn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AA8F76] hover:text-white transition-all duration-300 hover:-translate-y-1"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={28} className="sm:w-8 sm:h-8" />
                  </a>
                  <a
                    href="https://github.com/louisnguyenn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AA8F76] hover:text-white transition-all duration-300 hover:-translate-y-1"
                    aria-label="GitHub Profile"
                  >
                    <Github size={28} className="sm:w-8 sm:h-8" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="bg-[#05091e] relative rounded-xl p-6 sm:p-8 flex-1 border border-white/10 hover:border-[#AA8F76] transition-all duration-300 order-2 lg:order-none hover:shadow-2xl hover:shadow-[#AA8F76]/20">
            <ScrollReveal direction="up" distance={50} duration={0.8}>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                Hi, my name is Louis. I am currently studying{' '}
                <a
                  href="https://www.uoguelph.ca/programs/engineering-systems-and-computing/"
                  className="underline transition-colors hover:text-white text-[#AA8F76]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Engineering Systems and Computing
                </a>{' '}
                at the{' '}
                <a
                  href="https://www.uoguelph.ca/"
                  className="underline transition-colors hover:text-white text-[#AA8F76]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Guelph
                </a>, where I'm passionate about combining both mechanical and software to build systems that solve real world problems.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                I'm passionate about creating innovative web applications and exploring the intersection of technology and problem-solving. My experience spans from building full-stack applications with modern frameworks like React to developing Chrome extensions and conducting data analysis with Python.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                I believe the best solutions come from the combination of engineering principles and modern technology. Whether I'm optimizing code performance or streamlining manufacturing processes, I bring the same attention to detail and commitment to excellence that defines both worlds.
                I'm always eager to take on new challenges and contribute to projects that make a real difference.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
