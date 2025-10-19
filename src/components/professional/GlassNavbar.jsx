import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/professional.css';

const GlassNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={`professional-nav ${isScrolled ? 'glass-strong' : ''}`}>
        <div className="professional-container">
          {/* Desktop Layout - Centered with Logo on Left */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* ASCII Logo - Left */}
            <div
              className="nav-logo-ascii cursor-pointer flex-shrink-0"
              onClick={() => scrollToSection('home')}
            >
              <pre className="ascii-art text-matrix-green font-fira crt-effect whitespace-pre nav-ascii-scale">{`     ██╗███████╗██╗   ██╗████████╗ █████╗
     ██║██╔════╝██║   ██║╚══██╔══╝██╔══██╗
     ██║█████╗  ██║   ██║   ██║   ███████║
██   ██║██╔══╝  ╚██╗ ██╔╝   ██║   ██╔══██║
╚█████╔╝███████╗ ╚████╔╝    ██║   ██║  ██║
 ╚════╝ ╚══════╝  ╚═══╝     ╚═╝   ╚═╝  ╚═╝`}</pre>
            </div>

            {/* Navigation - Centered */}
            <div className="flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="nav-link"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Terminal Mode Toggle - Right */}
            <button
              onClick={() => navigate('/terminal')}
              className="glass-btn text-sm flex-shrink-0"
              style={{ padding: '0.625rem 1.25rem' }}
            >
              <span>Terminal Mode</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden items-center justify-between w-full">
            {/* Mobile Logo - ASCII Art */}
            <div
              className="nav-logo-ascii-mobile cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <pre className="ascii-art text-matrix-green font-fira crt-effect whitespace-pre nav-ascii-scale-mobile">{`     ██╗███████╗██╗   ██╗████████╗ █████╗
     ██║██╔════╝██║   ██║╚══██╔══╝██╔══██╗
     ██║█████╗  ██║   ██║   ██║   ███████║
██   ██║██╔══╝  ╚██╗ ██╔╝   ██║   ██╔══██║
╚█████╔╝███████╗ ╚████╔╝    ██║   ██║  ██║
 ╚════╝ ╚══════╝  ╚═══╝     ╚═╝   ╚═╝  ╚═╝`}</pre>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="glass-btn mobile-menu-button flex items-center justify-center flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ padding: '0.4rem 0.8rem' }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Separate Mobile Menu Window - Outside navbar */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-window md:hidden">
          <div className="mobile-menu-content glass-strong rounded-lg animate-fade-in">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="mobile-nav-link text-white hover:text-lime-terminal transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => navigate('/terminal')}
                className="glass-btn-primary w-full justify-center mt-3"
                style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Terminal Mode</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlassNavbar;
