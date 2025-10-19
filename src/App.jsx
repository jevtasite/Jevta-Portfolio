import TerminalWindow from './components/Terminal/TerminalWindow';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Portfolio from './components/sections/Portfolio';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import MouseTrail from './components/effects/MouseTrail';

function App() {
  return (
    <>
      <MouseTrail />
      <TerminalWindow>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Services />
        <Stats />
        <Contact />
        <Footer />
      </TerminalWindow>
    </>
  );
}

export default App;
