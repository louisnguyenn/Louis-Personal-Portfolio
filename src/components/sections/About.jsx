export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-white text-center">About <span className="text-blue-500">Me</span></h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-gray-400'>
          Introduction.
        </p>

        <div className="bg-[#0a0a0a] relative rounded-xl p-8 border-white/10 border transition-all">
          <p className="text-gray-300 mb-4 leading-relaxed">
            I'm currently studying <a href="https://www.uoguelph.ca/programs/engineering-systems-and-computing/" className="underline transition-colors hover:text-white" target="_blank">Engineering Systems and Computing</a> at the <a href="https://www.uoguelph.ca/" className="underline transition-colors hover:text-white" target="_blank">University of Guelph</a>, where I'm developing a strong foundation in both engineering principles and computer science.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm passionate about creating innovative web applications and exploring the intersection of technology and problem-solving. My experience spans from building full-stack applications with modern frameworks like React to developing Chrome extensions and conducting data analysis with Python.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
Over the past four summers, I've worked at <a href="https://www.linamar.com/" target="_blank" className="underline transition-colors hover:text-white">Linamar Corporation</a> as a summer student, where I manufactured transmission parts for customers such as Ford and Chrysler. I've gained valuable experience in part assembly, machine operation, and quality assurance. Best of all, I've built great relationships with my co-workers, who made the days more enjoyable and go by so much faster.</p>
        </div>
      </div>
    </section>
  )
}
