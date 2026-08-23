import { ArrowUpRight, Github } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';

export const Projects = () => {
  const projects = [
    {
      title: 'Sentinel',
      subtitle: 'Production-monitoring Platform',
      description:
        'PLC-style scan cycle, finite-state machine, safety interlocks, and Modbus TCP communication, paired with a Python vision module and live HMI.',
      technologies: [
        'C++',
        'Python',
        'CMake',
        'OpenCV',
        'Modbus TCP',
        'Tkinter',
        'Google Test',
      ],
      githubLink: 'https://github.com/louisnguyenn/sentinel',
      liveLink: '',
    },
    {
      title: 'CNC Virtual Simulator',
      subtitle: 'Real-time Machine Simulation',
      description:
        'Parses industry-standard G-code and simulates the coordinated motion of a three-axis CNC machine in real time.',
      technologies: [
        'C++',
        'Python',
        'CMake',
        'NumPy',
        'pandas',
        'Matplotlib',
        'Plotly',
        'Google Test',
      ],
      githubLink: 'https://github.com/louisnguyenn/cnc-virtual-sim',
      liveLink: '',
    },
    {
      title: 'Cask',
      subtitle: 'C-Based Atomic Storage Kernel',
      description:
        'A minimal binary file-backed key-value store focused on memory safety, deterministic data layout, and toolchain-driven development.',
      technologies: ['C', 'CMake', 'CTest'],
      githubLink: 'https://github.com/louisnguyenn/cask',
      liveLink: '',
    },
  ];

  return (
    <section id="projects" className="pt-24">
      <div className="w-full px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="mb-12 text-base font-medium tracking-[0.2em] text-gray-400">
            PROJECTS
          </h2>
        </ScrollReveal>

        <div className="border-t border-white/10">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              direction="up"
              distance={24}
              duration={0.6}
              delay={index * 0.1}
            >
              <article className="group border-b border-white/10">
                <div className="grid gap-5 py-8 sm:grid-cols-[1fr_auto] sm:gap-7">
                  {/* Project content */}
                  <div className="min-w-0">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-medium text-white">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#D4C4B0]"
                        >
                          {project.title}

                          <ArrowUpRight
                            size={18}
                            className="translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:opacity-100"
                          />
                        </a>
                      </h3>

                      <p className="text-sm text-[#D4C4B0]">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-gray-300">
                      {project.description}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-gray-500">
                      {project.technologies.join(' · ')}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex items-start gap-3 sm:justify-end">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-white/30 hover:text-white"
                    >
                      <Github size={17} />
                    </a>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-white/30 hover:text-white"
                      >
                        <ArrowUpRight size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
