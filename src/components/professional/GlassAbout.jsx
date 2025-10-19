import { useEffect, useState, useRef } from 'react';
import { profile } from '../../data/profile';
import { quickSkills } from '../../data/skills';
import '../../styles/professional.css';

const GlassAbout = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="professional-section"
    >
      <div className="professional-container">
        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know more about my background and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Profile Info Card */}
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text-cyan">Profile Info</h3>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="font-medium" style={{ color: 'var(--text-muted)' }}>Full Name:</span>
                  <span className="font-semibold">{profile.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="font-medium" style={{ color: 'var(--text-muted)' }}>Birth Date:</span>
                  <span className="font-semibold">{profile.birthDate}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="font-medium" style={{ color: 'var(--text-muted)' }}>Job Title:</span>
                  <span className="font-semibold">{profile.role}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="font-medium" style={{ color: 'var(--text-muted)' }}>Website:</span>
                  <span className="font-semibold">{profile.website}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium" style={{ color: 'var(--text-muted)' }}>Email:</span>
                  <a href={`mailto:${profile.email}`} className="font-semibold gradient-text-pink hover:opacity-80">
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Quick Skills */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Quick Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {quickSkills.map((skill, index) => (
                    <span key={index} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bio Card */}
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <div className="glass-card h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text-green">About Me</h3>

              <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                {profile.bio.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="glass-btn-primary w-full justify-center"
                >
                  <span>Hire Me</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassAbout;
