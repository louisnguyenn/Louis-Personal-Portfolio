import { useState } from 'react';
import './App.css'
import { Background } from './components/Background';
import Particles from './components/Particles';
import { Navbar } from './components/Navbar'; // importing navbar component
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import "./index.css"

function App() {
  // declaring a use state for the menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden'
        }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={4000}
            particleSpread={30}
            speed={0.2}
            particleBaseSize={60}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={true}
            className="w-full h-full"
          />
        </div>

        <div className={`transition-opacity duration-700`} style={{ position: 'relative', zIndex: 10 }}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> {/* calling navbar component */}
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> {/* calling mobile navbar component */}
          <Home />
          <About />
          <div className="bg-gradient-to-b from-[#080c28] to-[#02040F]">
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
