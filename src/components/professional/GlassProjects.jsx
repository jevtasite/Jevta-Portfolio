import { useEffect, useState, useRef } from 'react';
import { projects } from '../../data/projects';
import '../../styles/professional.css';

const GlassProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
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
    <section id="projects" ref={sectionRef} className="professional-section" style={{ background: 'rgba(0,0,0,0.1)' }}>
      <div className="professional-container-wide">
        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my recent work and client collaborations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card cursor-pointer scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold gradient-text-cyan">{project.name}</h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{project.type}</p>
                </div>
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ background: 'var(--glass-gradient-4)', color: 'white' }}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-pill text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Details */}
              {expandedProject === project.id && (
                <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <span className="text-green-400">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Challenges Solved:</h4>
                    <ul className="space-y-1">
                      {project.challenges.map((challenge, cIndex) => (
                        <li key={cIndex} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--accent-pink)' }}>!</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-primary flex-1 justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Visit Site</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button
                  className="glass-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedProject(expandedProject === project.id ? null : project.id);
                  }}
                >
                  {expandedProject === project.id ? 'Less' : 'More'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className={`glass-card text-center max-w-2xl mx-auto mt-12 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.8s' }}>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            More projects coming soon! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlassProjects;
