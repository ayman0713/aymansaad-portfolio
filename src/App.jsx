import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/Home';
import { About } from './components/section/About';
import { Projects } from './components/section/Projects';
import { Contact } from './components/section/Contact';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={` min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100`}
        
    >
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
      </div>
    
    </>
  )
}

export default App
