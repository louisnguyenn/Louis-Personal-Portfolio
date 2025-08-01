import { ScrollReveal } from '../ScrollReveal'
import { ArrowRight, Github } from "lucide-react"

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

        {/* project 1 */}
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Gemify</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "React", "Bootstrap", "HTML", "CSS", "Spotify API", "Gemini API", "Node.js"].map((tech, key) => (
                  <span key={key} className="bg-[#AA8F76]/10 text-[#AA8F76] border border-[#AA8F76]/30 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition duration-300">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 mt-4 mb-4">
                A music discovery web app that lets you search artists and explore their albums and tracks using the Spotify API.
                It also features an AI-powered chatbot powered by Gemini, allowing users to ask questions about songs, artists,
                and get personalized recommendations through prompt-engineered responses.
              </p>

              <div className="flex gap-3 items-center">
                <a href="https://github.com/louisnguyenn/Gemify" target="_blank" className="bg-[#AA8F76] text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e]">View Project</a>
                <a href="https://louisnguyenn.github.io/Gemify/" target="_blank" className="bg-[#AA8F76] text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e]">View Live App</a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* project 2*/}
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 mb-6">
            <h3 className="text-xl font-bold mb-2">FocusIn - GDSC Hacks 2025</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "HTML", "CSS", "Chrome Storage API", "Gemini API", "Chrome Extensions"].map((tech, key) => (
                <span key={key} className="bg-[#AA8F76]/10 text-[#AA8F76] border border-[#AA8F76]/30 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition duration-300">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-400 mt-4 mb-4">
              A lightweight and intuitive Google Chrome extension designed to help users stay focused and reduce distractions by
              blocking time-wasting websites. Whether you're studying, working, or just trying to build better habits, FocusIn
              empowers you to take control of your browsing time.
            </p>

            <div className="flex justify-between items-center">
              <a href="https://github.com/Wasay09/FocusIn" target="_blank" className="bg-[#AA8F76] text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e]">View Project</a>
            </div>
          </div>
        </ScrollReveal>

        {/* project 3 */}
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 mb-6">
            <h3 className="text-xl font-bold mb-2">Electron Collision Predictor</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"].map((tech, key) => (
                <span key={key} className="bg-[#AA8F76]/10 text-[#AA8F76] border border-[#AA8F76]/30 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition duration-300">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-400 mt-4 mb-4">
              This project uses linear regression to predict the invariant mass resulting from CERN electron collision data.
              By leveraging the energies of two colliding electrons, the model estimates the mass produced from the event.
              The project includes data cleaning, exploratory visualization, model training, and performance evaluation,
              all conducted in an interactive Jupyter Notebook environment.
            </p>

            <div className="flex justify-between items-center">
              <a href="https://github.com/louisnguyenn/Electron_Collision_Predictor" target="_blank" className="bg-[#AA8F76] text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e]">View Project</a>
            </div>
          </div>
        </ScrollReveal>

        {/* project 4 */}
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 mb-6">
            <h3 className="text-xl font-bold mb-2">Air Quality Analysis in Cities</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy", "Jupyter Notebook"].map((tech, key) => (
                <span key={key} className="bg-[#AA8F76]/10 text-[#AA8F76] border border-[#AA8F76]/30 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition duration-300">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-400 mt-4 mb-4">
              This project focuses on examining air quality metrics across different cities, using Python to uncover patterns
              in environmental data and assess urban air pollution levels, Pandas and NumPy for data manipulation, Matplotlib and Seaborn
              for data visualizations, and Jupyter Notebook for a nice and clean summary of key findings.
            </p>

            <div className="flex justify-between items-center">
              <a href="https://github.com/louisnguyenn/Global_Air_Quality_Data_Analysis" target="_blank" className="bg-[#AA8F76] text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e]">View Project</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
