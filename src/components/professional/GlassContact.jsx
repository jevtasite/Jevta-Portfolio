import { useEffect, useState, useRef } from 'react';
import { contactInfo, contactMessages } from '../../data/contact';
import '../../styles/professional.css';

const GlassContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleEmailClick = () => {
    window.open(contactInfo.gmailCompose, '_blank');
  };

  const socialIcons = {
    facebook: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  };

  return (
    <section id="contact" ref={sectionRef} className="professional-section" style={{ background: 'rgba(0,0,0,0.1)' }}>
      <div className="professional-container">
        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            Get In <span className="gradient-text-green">Touch</span>
          </h2>
          <p className="section-subtitle">
            {contactMessages.cta}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Email & Contact */}
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 gradient-text-cyan flex items-center gap-2">
                <span>✉</span>
                Email Me
              </h3>

              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                The best way to reach me is via email. I typically respond within 24 hours!
              </p>

              <div className="glass-strong p-4 rounded-lg mb-4">
                <div className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>Email Address:</div>
                <a href={`mailto:${contactInfo.email}`} className="text-lg font-semibold gradient-text-pink hover:opacity-80">
                  {contactInfo.email}
                </a>
              </div>

              <button
                onClick={handleEmailClick}
                className="glass-btn-primary w-full justify-center"
              >
                <span>Open Gmail</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>

              {/* Availability */}
              <div className="mt-6 space-y-3">
                <h4 className="font-semibold mb-3">Availability:</h4>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span style={{ color: 'var(--text-secondary)' }}>{contactInfo.availability.responseTime}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-400 rounded-full" />
                  <span style={{ color: 'var(--text-secondary)' }}>Available for Freelance Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-400 rounded-full" />
                  <span style={{ color: 'var(--text-secondary)' }}>Open to Collaboration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Location */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className={`glass-card scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Social Links</h3>
              <div className="space-y-4">
                {contactInfo.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 glass-strong rounded-lg hover:scale-105 transition-transform"
                  >
                    <div className="flex items-center gap-4">
                      <div className="gradient-text-cyan">
                        {socialIcons[social.icon]}
                      </div>
                      <div>
                        <div className="font-semibold">{social.name}</div>
                        <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{social.username}</div>
                      </div>
                    </div>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Location Info */}
            <div className={`glass-card scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6 gradient-text-green">Location & Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Location:</span>
                  <span className="font-semibold">{contactInfo.location.country} {contactInfo.location.flag}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Timezone:</span>
                  <span className="font-semibold">{contactInfo.location.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Languages:</span>
                  <span className="font-semibold">{contactInfo.location.languages}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className={`glass-card text-center max-w-2xl mx-auto mt-12 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {contactMessages.footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlassContact;
