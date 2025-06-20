import { ArrowRight, Github } from "lucide-react"

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-white text-center">Featured <span className="text-blue-500">Projects</span></h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-gray-400'>
          My innovative creations.
        </p>

        {/* project 1 */}
        <div className="grid grid-cols-1 md:grid-cols gap-6">
          <div className="bg-[#0a0a0a] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Gemify</h3>

            <div className="flex flex-wrap grap-2 mb-4">
              {["JavaScript", "React", "Bootstrap", "HTML", "CSS", "Spotify API", "Gemini API"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-400 mt-4 mb-4">
              A music discovery web app that lets you search artists and explore their albums and tracks using the Spotify API.
              It also features an AI-powered chatbot powered by Gemini, allowing users to ask questions about songs, artists,
              and get personalized recommendations through prompt-engineered responses.
            </p>

            <div className="flex justify-between items-center ">
              <a href="https://github.com/louisnguyenn/Gemify" target="_blank" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rbga(59, 130, 246, 0.4)]">View Project</a>
            </div>
          </div>

          {/* project 2*/}
          <div className="bg-[#0a0a0a] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">FocusIn - GDSC Hacks 2025</h3>

            <div className="flex flex-wrap grap-2 mb-4">
              {["JavaScript", "HTML", "CSS", "Chrome Storage API", "Gemini API", "Chrome Extensions"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-400 mt-4 mb-4">
              A lightweight and intuitive Google Chrome extension designed to help users stay focused and reduce distractions by
              blocking time-wasting websites. Whether you're studying, working, or just trying to build better habits, FocusIn
              empowers you to take control of your browsing time.
            </p>

            <div className="flex justify-between items-center ">
              <a href="https://github.com/Wasay09/FocusIn" target="_blank" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rbga(59, 130, 246, 0.4)]">View Project</a>
            </div>
          </div>

          {/* project 3 */}
          <div className="bg-[#0a0a0a] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Job Vacancies in Canada Data Analysis</h3>

            <div className="flex flex-wrap grap-2 mb-4">
              {["Python", "Pandas", "Matplotlib", "Seaborn"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-400 mt-4 mb-4">
              This project focuses on analyzing job vacancy trends across Canada using large CSV datasets.
              Using Python's powerful data manipulation and visualization libraries, the goal is to uncover meaningful
              insights into employment demand across various sectors and provinces.
            </p>

            <div className="flex justify-between items-center ">
              <a href="https://github.com/louisnguyenn/Job-Vacancies-in-Canada-Data-Analysis" target="_blank" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rbga(59, 130, 246, 0.4)]">View Project</a>
            </div>
          </div>

          {/* project 4 */}
          <div className="bg-[#0a0a0a] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Retail Data Analysis</h3>

            <div className="flex flex-wrap grap-2 mb-4">
              {["SQL", "PostgreSQL", "Microsoft Excel"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-400 mt-4 mb-4">
              This project is designed to demonstrate SQL skills and techniques typically used by data analysts to explore,
              clean, and analyze retail sales data. The project involves setting up a retail sales database, performing
              exploratory data analysis (EDA), and answering specific business questions through SQL queries.
            </p>

            <div className="flex justify-between items-center ">
              <a href="https://github.com/louisnguyenn/Retail_Data_Analysis" target="_blank" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rbga(59, 130, 246, 0.4)]">View Project</a>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="https://github.com/louisnguyenn" target="_blank" className="bg-blue-500 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rbga(59, 130, 246, 0.4)] flex gap-2 items-center">Check out my GitHub <ArrowRight size={16}/></a>
          </div>
        </div>
      </div>
    </section>
  )
}
