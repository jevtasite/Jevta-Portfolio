import { useEffect } from 'react';
import RetroTerminalBackground from '../components/professional/RetroTerminalBackground';
import GlassNavbar from '../components/professional/GlassNavbar';
import GlassHero from '../components/professional/GlassHero';
import GlassAbout from '../components/professional/GlassAbout';
import GlassSkills from '../components/professional/GlassSkills';
import GlassExperience from '../components/professional/GlassExperience';
import GlassProjects from '../components/professional/GlassProjects';
import GlassTestimonials from '../components/professional/GlassTestimonials';
import GlassContact from '../components/professional/GlassContact';
import GlassFooter from '../components/professional/GlassFooter';
import '../styles/professional.css';

const ProfessionalPage = () => {
  useEffect(() => {
    // Add professional theme class to body
    document.body.classList.add('professional-theme');

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('professional-theme');
    };
  }, []);

  return (
    <div className="professional-portfolio">
      <RetroTerminalBackground />
      <GlassNavbar />
      <GlassHero />
      <GlassAbout />
      <GlassSkills />
      <GlassExperience />
      <GlassProjects />
      <GlassTestimonials />
      <GlassContact />
      <GlassFooter />
    </div>
  );
};

export default ProfessionalPage;
