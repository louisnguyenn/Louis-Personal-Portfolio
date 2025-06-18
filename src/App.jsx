import { useState } from 'react';
import './App.css'
import { Background } from './components/Background';
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
      <div className={`min-h-screen transition-opacity duration-700`}>
        <Background />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> {/* calling navbar component */}
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> {/* calling mobile navbar component */}
        <Home />
        <About />
        <Experience />
        <Projects />
        <Interests />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
