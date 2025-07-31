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
            <div className="flex flex-col items-center">
              <ScrollReveal direction="right" distance={50} duration={0.8}>
                <img
                  src="/pfp.jpg"
                  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full border border-white/10 hover:border-[#AA8F76] transition-all duration-300 hover:shadow-2xl hover:shadow-[#AA8F76]/20"
                  alt="Louis Nguyen Profile Picture"
                />
              </ScrollReveal>
              <div className="flex space-x-4 sm:space-x-6 py-6 sm:py-7 justify-center">
                <ScrollReveal direction="up" distance={50} duration={0.8}>
                  <a
                    href="mailto:louis.nguyen550@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AA8F76] hover:text-white"
                    aria-label="My Email"
                  >
                    <Mail size={33} className="hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </ScrollReveal>
                <ScrollReveal direction="up" distance={50} duration={1}>
                  <a
                    href="https://www.linkedin.com/in/louisnguyenn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AA8F76] hover:text-white"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={33} className="hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </ScrollReveal>
                <ScrollReveal direction="up" distance={50} duration={1.2}>
                  <a
                    href="https://github.com/louisnguyenn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AA8F76] hover:text-white"
                    aria-label="GitHub Profile"
                  >
                    <Github size={33} className="hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </ScrollReveal>
              </div>
            </div>
          </div>

          <div className="bg-[#05091e] relative rounded-xl p-6 sm:p-8 flex-1 border border-white/10 hover:border-[#AA8F76] transition-all duration-300 order-2 lg:order-none hover:shadow-2xl hover:shadow-[#AA8F76]/20">
            <ScrollReveal direction="left" distance={50} duration={0.8}>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                Hi, my name is Louis. I am currently studying{' '}
                <a
                  href="https://www.uoguelph.ca/programs/engineering-systems-and-computing/"
                  className="underline transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Engineering Systems and Computing
                </a>{' '}
                at the{' '}
                <a
                  href="https://www.uoguelph.ca/"
                  className="underline transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Guelph
                </a>. I am 19 years old, born and raised in Cambridge, Ontario. My ethicity is South-East Asian, more specifically <a href="https://www.vietnam.travel/" className="underline transition-colors hover:text-white" target="_blank">Vietnamese</a>.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                I love to be physically active, whether that's in the gym and powerlifting or playing sports like basketball, badminton, volleyball, and more (even if I'm terrible).
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                I also love to be continuously learning. I self-taught myself to play the guitar, learned Adobe After Effects to do video editing on social media like Youtube, Instagram reels, and Tiktok, and learned a little bit of graphic design.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                I'm passionate about creating innovative web applications and exploring the intersection of technology and problem-solving. My experience spans from building full-stack applications with modern frameworks like React to developing Chrome extensions and conducting data analysis with Python.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* my skills */}
        <div className="mt-13 bg-[#05091e] relative rounded-xl p-6 sm:p-8 border border-white/10 hover:border-[#AA8F76] transition-all duration-300 order-2 lg:order-none hover:shadow-2xl hover:shadow-[#AA8F76]/20">
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <h3 className="text-3xl font-bold text-gray-300 mb-4 leading-relaxed">
              Languages
            </h3>
            {/* 
            <div className="flex flex-wrap gap-2 mb-4">
              {["C", "Python", "JavaScript", "SQL", "React", "Tailwind CSS", "HTML", "CSS", "Node.js", "Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn", "PostgreSQL", "Vite", "Vercel", "Git", "Jupyter Notebook", "Android Studio", "VSCode"].map((tech, key) => (
                <span key={key} className="bg-[#AA8F76]/10 text-[#AA8F76] border border-[#AA8F76]/30 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition duration-300">
                  {tech}
                </span>
              ))}
            </div> */}

            <div className="m-3 flex items-center gap-3">
              <h2 className="font-medium text-xl">C</h2>
              <hr className="flex-1 h-2 bg-[#555555] border-0 rounded" />
            </div>

            <div className="m-3 flex items-center gap-3">
              <h2 className="font-medium text-xl">Python</h2>
              <hr className="flex-1 h-2 bg-[#3572A5] border-0 rounded" />
            </div>

            <div className="m-3 flex items-center gap-3">
              <h2 className="font-medium text-xl">JavaScript</h2>
              <hr className="flex-1 h-2 bg-[#f1e05a] border-0 rounded" />
            </div>

            <div className="m-3 flex items-center gap-3">
              <h2 className="font-medium text-xl">HTML</h2>
              <hr className="flex-1 h-2 bg-[#e44b23] border-0 rounded" />
            </div>

            <div className="m-3 flex items-center gap-3">
              <h2 className="font-medium text-xl">CSS</h2>
              <hr className="flex-1 h-2 bg-[#563d7c] border-0 rounded" />
            </div>

            <div className="m-3 flex items-center gap-3">
              <h2 className="font-medium text-xl">SQL</h2>
              <hr className="flex-1 h-2 bg-[#dad8d8] border-0 rounded" />
            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-9 items-center lg:items-start w-full">
          <div className="flex w-full lg:flex-1 mt-13 bg-[#05091e] relative rounded-xl p-6 sm:p-8 border border-white/10 hover:border-[#AA8F76] transition-all duration-300 order-2 lg:order-none hover:shadow-2xl hover:shadow-[#AA8F76]/20">
            <ScrollReveal direction="right" distance={50} duration={0.8}>
              <h3 className="text-3xl font-bold text-gray-300 mb-4 leading-relaxed">
                Technologies and Frameworks
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React", "Tailwind CSS", "HTML", "CSS", "Node.js", "Pandas", "NumPy",
                  "Matplotlib", "Seaborn", "scikit-learn", "PostgreSQL", "Vite", "Vercel"
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#AA8F76]/10 text-[#AA8F76] border border-[#AA8F76]/30 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="flex w-full lg:flex-1 mt-13 bg-[#05091e] relative rounded-xl p-6 sm:p-8 border border-white/10 hover:border-[#AA8F76] transition-all duration-300 order-2 lg:order-none hover:shadow-2xl hover:shadow-[#AA8F76]/20">
            <ScrollReveal direction="left" distance={50} duration={0.8}>
              <h3 className="text-3xl font-bold text-gray-300 mb-4 leading-relaxed">
                Developer and Design Tools
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Git", "Jupyter Notebook", "Android Studio", "Linux", "VSCode", "Adobe After Effects", "DaVinci Resolve"
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#AA8F76]/10 text-[#AA8F76] border border-[#AA8F76]/30 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
