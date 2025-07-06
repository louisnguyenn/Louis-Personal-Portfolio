import { ScrollReveal } from '../ScrollReveal'
import StarBorder from '../StarBorder'
import { Mail, Github, Linkedin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-[#02040F]">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <h2 className="text-5xl font-bold mb-4 text-white text-center">About <span className="text-[#AA8F76]">Me</span></h2>
          <hr className="h-1 w-14 m-auto bg-white border-0" />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <p className='text-center text-muted-foreground mb-12 mt-5 max-w-2xl mx-auto text-gray-400'>
            Introduction.
          </p>
        </ScrollReveal>

        {/* <StarBorder
          as="button"
          className="custom-class"
          color="white"
          speed="5s"
        > */}
        <div className="flex gap-20 items-start">
          <div className="flex-shrink-0">
            <ScrollReveal direction="up" distance={50} duration={0.8}>
              <img src="/pfp.jpg" className="w-85 h-85 object-cover rounded-full border border-white/10 hover:border-[#AA8F76] transition-all duration-300"/>
              <div className="flex space-x-6 py-7 justify-center">
                <a href="mailto:louis.nguyen550@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#AA8F76] hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Mail size={32} />
                </a>
                <a href="https://www.linkedin.com/in/louisnguyenn/" target="_blank" rel="noopener noreferrer" className="text-[#AA8F76] hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Linkedin size={32} />
                </a>
                <a href="https://github.com/louisnguyenn" target="_blank" rel="noopener noreferrer" className="text-[#AA8F76] hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Github size={32} />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="bg-[#05091e] relative rounded-xl p-8 flex-1 border border-white/10 hover:border-[#AA8F76] transition-all duration-300">
            <ScrollReveal direction="up" distance={50} duration={0.8}>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Hi, my name is Louis. I am currently studying <a href="https://www.uoguelph.ca/programs/engineering-systems-and-computing/" className="underline transition-colors hover:text-white" target="_blank">Engineering Systems and Computing</a> at the <a href="https://www.uoguelph.ca/" className="underline transition-colors hover:text-white" target="_blank">University of Guelph</a>, where I'm passionate about combining both mechanical and software to build systems that solve real world problems.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm passionate about creating innovative web applications and exploring the intersection of technology and problem-solving. My experience spans from building full-stack applications with modern frameworks like React to developing Chrome extensions and conducting data analysis with Python.
              </p>

              {/* <p className="text-gray-300 mb-6 leading-relaxed">
                For the past four summers, I've been part of the <a href="https://www.linamar.com/" target="_blank" className="underline transition-colors hover:text-white">Linamar Corporation</a> team, where I've contributed to manufacturing high-quality transmission components for automotive companies such as Ford and Chrysler. This hands-on experience has taught me the importance of precision, quality assurance, and efficient processes.
                What I value most about my time at Linamar isn't just the technical skills I've gained in part assembly and machine operation, but the incredible relationships I've built with my colleagues. Working alongside such dedicated co-workers has made me believe that great work happens when great people collaborate.
              </p> */}

              <p className="text-gray-300 mb-6 leading-relaxed">
                I believe the best solutions come from the combination of engineering principles and modern technology. Whether I'm optimizing code performance or streamlining manufacturing processes, I bring the same attention to detail and commitment to excellence that defines both worlds.
                I'm always eager to take on new challenges and contribute to projects that make a real difference.
              </p>
            </ScrollReveal>
          </div>
        </div>
        {/* </StarBorder> */}
      </div>
    </section>
  )
}
