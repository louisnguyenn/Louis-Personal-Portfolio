import { useState } from 'react';
import './App.css';
import { Background } from './components/Background';
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/Navbar';
import Particles from './components/Particles';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { Footer } from './components/sections/Footer';
import { Home } from './components/sections/Home';
import { Projects } from './components/sections/Projects';
import './index.css';

function App() {
  // declaring a use state for the menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={2000}
            particleSpread={25}
            speed={0.4}
            particleBaseSize={60}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={true}
            className="w-full h-full min-h-screen"
          />
          {/* <Background /> */}
        </div>

        <div
          className="transition-opacity duration-700 max-w-3xl mx-auto"
          style={{ position: 'relative', zIndex: 10 }}
        >
          {/* calling navbar component */}
          {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />{" "} */}
          {/* <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />{" "} */}
          {/* calling mobile navbar component */}
          <Home />
          <About />
          <Experience />
          {/* <div className="bg-gradient-to-b from-[#080c28] to-[#02040F]"> */}
          <Projects />
          <Contact />
          <Footer />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
