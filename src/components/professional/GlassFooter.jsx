import { useState, useEffect } from 'react';
import { profile } from '../../data/profile';
import '../../styles/professional.css';

const GlassFooter = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="professional-container">
        <div className="footer-content">
          {/* Left - ASCII Logo and Tagline */}
          <div className="footer-left">
            <div className="footer-logo" onClick={scrollToTop}>
              <pre className="ascii-art text-matrix-green font-fira crt-effect whitespace-pre footer-ascii-scale">{`     ██╗███████╗██╗   ██╗████████╗ █████╗
     ██║██╔════╝██║   ██║╚══██╔══╝██╔══██╗
     ██║█████╗  ██║   ██║   ██║   ███████║
██   ██║██╔══╝  ╚██╗ ██╔╝   ██║   ██╔══██║
╚█████╔╝███████╗ ╚████╔╝    ██║   ██║  ██║
 ╚════╝ ╚══════╝  ╚═══╝     ╚═╝   ╚═╝  ╚═╝`}</pre>
            </div>
            <p className="footer-tagline">{profile.role}</p>
            <p className="footer-description">
              Building modern web experiences with creativity and precision.
            </p>
          </div>

          {/* Right - Social Links and Copyright */}
          <div className="footer-right">
            <div className="footer-section-title">Connect</div>
            <div className="footer-social-links">
              <a
                href={profile.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href={profile.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <span>© {currentYear} {profile.name}. All rights reserved.</span>
            <span className="footer-dot">•</span>
            <span>Crafted with passion</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg
          className="back-to-top-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <span className="back-to-top-text">Top</span>
      </button>
    </footer>
  );
};

export default GlassFooter;
