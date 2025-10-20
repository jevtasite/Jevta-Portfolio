import { useEffect, useState, useRef } from 'react';
import { experiences, currentStatus } from '../../data/experience';
import '../../styles/professional.css';

const GlassExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItems, setActiveItems] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

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

  // Track scroll progress for timeline animation
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineElement = timelineRef.current;
      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = timelineElement.offsetHeight;

      // Start filling when timeline enters viewport (top of timeline hits bottom of viewport)
      // Complete filling when timeline bottom is visible at bottom of viewport
      const timelineTop = rect.top;
      const timelineBottom = rect.bottom;

      let progress = 0;

      // Timeline is above viewport - start filling
      if (timelineTop < windowHeight) {
        // Calculate how much has scrolled into view
        const scrolledIntoView = windowHeight - timelineTop;

        // Should reach 100% when timeline bottom is at viewport bottom
        // Total scrollable distance is: from when top enters to when bottom reaches viewport bottom
        const totalDistance = timelineHeight;

        progress = Math.min(Math.max(scrolledIntoView / totalDistance, 0), 1);
      }

      setScrollProgress(progress);

      // Calculate which items should be active (experiences + current status = total items)
      const totalItems = experiences.length + 1; // +1 for Current Status
      const activeCount = Math.floor(progress * (totalItems + 1));
      setActiveItems(Array.from({ length: activeCount }, (_, i) => i));

      // Calculate which cards should be visible based on connector progress
      const newVisibleCards = [];
      for (let i = 0; i < totalItems; i++) {
        // Card reveals when connector reaches its position
        // Divide timeline into equal segments for each card
        const threshold = (i + 0.5) / totalItems; // Card appears halfway to its dot
        if (progress >= threshold) {
          newVisibleCards.push(i);
        }
      }
      setVisibleCards(newVisibleCards);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="professional-section">
      <div className="professional-container">
        <div className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
          <h2 className="section-title">
            Work <span className="gradient-text-green">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and key milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mt-12 relative" ref={timelineRef}>
          {/* Timeline Progress Connector */}
          <div className="timeline-connector">
            <div className="timeline-base" />
            <div
              className="timeline-progress"
              style={{
                transform: `scaleY(${scrollProgress})`,
                transformOrigin: 'top'
              }}
            />
          </div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item mb-12 ${visibleCards.includes(index) ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
            >
              <div
                className={`timeline-dot ${activeItems.includes(index) ? 'active' : ''}`}
              />
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

          {/* Current Status - As Timeline Item */}
          <div className={`timeline-item mb-12 ${visibleCards.includes(experiences.length) ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
            <div className={`timeline-dot ${activeItems.includes(experiences.length) ? 'active' : ''}`} />
            <div className="glass-card">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold gradient-text-cyan">
                    Current Status
                  </h3>
                </div>
                <div className="text-right">
                  <div className="font-semibold">Present</div>
                </div>
              </div>

              {/* Description */}
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                {currentStatus.status}
              </p>

              {/* Seeking */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Open To:</h4>
                <ul className="space-y-1">
                  {currentStatus.seeking.map((item, index) => (
                    <li key={index} className="flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                      <span className="text-green-400">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Currently Working On */}
              {currentStatus.workingOn && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Currently Working On:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStatus.workingOn.map((item, index) => (
                      <span key={index} className="skill-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassExperience;
