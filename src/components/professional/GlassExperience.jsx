import { useEffect, useState, useRef } from 'react';
import { experiences, currentStatus } from '../../data/experience';
import '../../styles/professional.css';

const GlassExperience = () => {
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
    <section id="experience" ref={sectionRef} className="professional-section">
      <div className="professional-container">
        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            Work <span className="gradient-text-green">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and key milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.2 + 0.2}s` }}
            >
              <div className="timeline-dot" />
              <div className="glass-card">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold gradient-text-cyan">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 inline-flex items-center gap-2"
                        >
                          {exp.company}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ background: 'var(--glass-gradient-2)', color: 'white' }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{exp.period}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {exp.description}
                </p>

                {/* Highlights */}
                {exp.highlights && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                          <span className="text-green-400">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate */}
                {exp.certificate && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 glass-btn"
                    >
                      <span>View Certificate</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className={`glass-card max-w-2xl mx-auto mt-8 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <h3 className="text-xl font-bold mb-4 gradient-text-pink">Current Status</h3>
          <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
            {currentStatus.status}
          </p>
          <div className="flex flex-wrap gap-2">
            {currentStatus.seeking.map((item, index) => (
              <span key={index} className="px-4 py-2 rounded-full font-medium" style={{ background: 'var(--glass-gradient-1)', color: 'white' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassExperience;
