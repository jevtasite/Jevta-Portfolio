import { useEffect } from 'react';
import RetroTerminalBackground from '../components/professional/RetroTerminalBackground';
import GlassNavbar from '../components/professional/GlassNavbar';
import GlassHero from '../components/professional/GlassHero';
import SectionDivider from '../components/professional/SectionDivider';
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

    // Scroll reveal animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('professional-theme');
      scrollElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="professional-portfolio">
      <RetroTerminalBackground />
      <GlassNavbar />
      <GlassHero />
      <SectionDivider />
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
