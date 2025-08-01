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

        {/* experience 1 */}
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Machine Operator & Quality Assurance Tester</h3>
              <h3 className="text-l italic mb-2">Linamar Corporation</h3>

              {/* <p className="text-gray-400 mt-4 mb-4">
                A music discovery web app that lets you search artists and explore their albums and tracks using the Spotify API.
                It also features an AI-powered chatbot powered by Gemini, allowing users to ask questions about songs, artists,
                and get personalized recommendations through prompt-engineered responses.
              </p> */}

              {/* <div className="flex gap-3 items-center">
                <a target="_blank" className="bg-[#AA8F76] text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e]">View Blog</a>
              </div> */}
            </div>
          </div>
        </ScrollReveal>

        {/* experience 2*/}
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 mb-6">
            <h3 className="text-xl font-bold mb-2">Machine Operator & Final Inspector</h3>
            <h3 className="text-l italic mb-2">Linamar Corporation</h3>


            {/* <p className="text-gray-400 mt-4 mb-4">
              A lightweight and intuitive Google Chrome extension designed to help users stay focused and reduce distractions by
              blocking time-wasting websites. Whether you're studying, working, or just trying to build better habits, FocusIn
              empowers you to take control of your browsing time.
            </p> */}

            {/* <div className="flex justify-between items-center">
              <a target="_blank" className="bg-[#AA8F76] text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e]">View Blog</a>
            </div> */}
          </div>
        </ScrollReveal>

        {/* experience 3 */}
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 mb-6">
            <h3 className="text-xl font-bold mb-2">Machine Operator</h3>
            <h3 className="text-l italic mb-2">Linamar Corporation</h3>


            {/* <p className="text-gray-400 mt-4 mb-4">
              This project uses linear regression to predict the invariant mass resulting from CERN electron collision data.
              By leveraging the energies of two colliding electrons, the model estimates the mass produced from the event.
              The project includes data cleaning, exploratory visualization, model training, and performance evaluation,
              all conducted in an interactive Jupyter Notebook environment.
            </p> */}

            {/* <div className="flex justify-between items-center">
              <a target="_blank" className="bg-[#AA8F76] text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e]">View Blog</a>
            </div> */}
          </div>
        </ScrollReveal>

        {/* experience 4 */}
        <ScrollReveal direction="up" distance={50} duration={0.8}>
          <div className="bg-[#05091e] relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#AA8F76] hover:shadow-2xl hover:shadow-[#AA8F76]/20 transition-all duration-300 mb-6">
            <h3 className="text-xl font-bold mb-2">Machine Operator</h3>
            <h3 className="text-l italic mb-2">Linamar Corporation</h3>


            {/* <p className="text-gray-400 mt-4 mb-4">
              This project focuses on examining air quality metrics across different cities, using Python to uncover patterns
              in environmental data and assess urban air pollution levels, Pandas and NumPy for data manipulation, Matplotlib and Seaborn
              for data visualizations, and Jupyter Notebook for a nice and clean summary of key findings.
            </p> */}

            {/* <div className="flex justify-between items-center">
              <a target="_blank" className="bg-[#AA8F76] text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#8A6F56] active:bg-white active:text-[#05091e]">View Blog</a>
            </div> */}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
