import { ScrollReveal } from '../ScrollReveal'

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <h2 className="text-5xl font-bold mb-8 text-white text-center">About <span className="text-[#AA8F76]">Me</span></h2>
          <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-gray-400'>
            Introduction.
          </p>
        </ScrollReveal>

        <div className="border-runner rounded-xl">
          <div className="bg-[#05091e] relative rounded-xl p-8">
            <ScrollReveal direction="up" distance={50} duration={0.8}>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm currently studying <a href="https://www.uoguelph.ca/programs/engineering-systems-and-computing/" className="underline transition-colors hover:text-white" target="_blank">Engineering Systems and Computing</a> at the <a href="https://www.uoguelph.ca/" className="underline transition-colors hover:text-white" target="_blank">University of Guelph</a>, where I'm passionate about combining both mechanical and software to build systems that solve real world problems.
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
      </div>
    </section>
  )
}
