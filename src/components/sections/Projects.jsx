import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { ScrollReveal } from "../ScrollReveal";

export const Projects = () => {
  const projects = [
    {
      title: "Gemify",
      description:
        "A music discovery web app that lets you search artists and explore their albums and tracks using the Spotify API. It also features an AI-powered chatbot powered by Gemini, allowing users to ask questions about songs, artists, and get personalized recommendations through prompt-engineered responses.",
      technologies: [
        "JavaScript",
        "React",
        "Bootstrap",
        "HTML",
        "CSS",
        "Spotify API",
        "Gemini API",
        "Node.js",
      ],
      githubLink: "https://github.com/louisnguyenn/Gemify",
      liveLink: "https://louisnguyenn.github.io/Gemify/",
    },
    {
      title: "FocusIn - GDSC Hacks 2025",
      description:
        "A lightweight and intuitive Google Chrome extension designed to help users stay focused and reduce distractions by blocking time-wasting websites. Whether you're studying, working, or just trying to build better habits, FocusIn empowers you to take control of your browsing time.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Chrome Storage API",
        "Gemini API",
        "Chrome Extensions",
      ],
      githubLink: "https://github.com/Wasay09/FocusIn",
    },
    {
      title: "Electron Collision Predictor",
      description:
        "This project uses linear regression to predict the invariant mass resulting from CERN electron collision data. By leveraging the energies of two colliding electrons, the model estimates the mass produced from the event. The project includes data cleaning, exploratory visualization, model training, and performance evaluation, all conducted in an interactive Jupyter Notebook environment.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      githubLink:
        "https://github.com/louisnguyenn/Electron_Collision_Predictor",
    },
    {
      title: "Air Quality Analysis in Cities",
      description:
        "This project focuses on examining air quality metrics across different cities, using Python to uncover patterns in environmental data and assess urban air pollution levels, Pandas and NumPy for data manipulation, Matplotlib and Seaborn for data visualizations, and Jupyter Notebook for a nice and clean summary of key findings.",
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "NumPy",
        "Jupyter Notebook",
      ],
      githubLink:
        "https://github.com/louisnguyenn/Global_Air_Quality_Data_Analysis",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white text-center">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#AA8F76] to-[#D4C4B0] mx-auto rounded-full"></div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} duration={0.8} delay={0.2}>
          <p className="text-center text-gray-400 mb-16 mt-5 max-w-2xl mx-auto text-lg">
            My creations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              distance={50}
              duration={0.8}
              delay={index * 0.2}
            >
              <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-2 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#AA8F76]/10 text-[#AA8F76] border border-[#AA8F76]/30 py-1 px-3 rounded-full text-sm hover:bg-[#AA8F76]/20 hover:shadow-[0_2px_8px_rgba(170,143,118,0.2)] transition duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-3 items-center mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#AA8F76] text-white py-3 px-6 rounded-lg font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e] flex items-center gap-2 group duration-300"
                  >
                    <Github size={16} />
                    View Project
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent border-2 border-[#AA8F76] text-[#AA8F76] py-3 px-6 rounded-lg font-medium transition-all hover:bg-[#AA8F76] hover:text-white hover:-translate-y-0.5 flex items-center gap-2 duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" distance={50} duration={0.8} delay={0.6}>
          <div className="flex justify-center">
            <a
              href="https://github.com/louisnguyenn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#AA8F76] text-white py-4 px-8 rounded-full font-medium transition-all relative overflow-hidden hover:-translate-y-1 flex gap-2 items-center hover:bg-[#8A6F56] active:bg-white active:text-[#05091e] hover:shadow-lg hover:shadow-[#AA8F76]/25 duration-300"
            >
              Check out my GitHub
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
