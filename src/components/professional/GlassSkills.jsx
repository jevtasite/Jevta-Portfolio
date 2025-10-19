import { useEffect, useState, useRef } from 'react';
import { skillCategories, tools, workApproach } from '../../data/skills';
import '../../styles/professional.css';

const GlassSkills = () => {
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
    <section id="skills" ref={sectionRef} className="professional-section" style={{ background: 'rgba(0,0,0,0.1)' }}>
      <div className="professional-container">
        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            My <span className="gradient-text-pink">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`glass-card scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${categoryIndex * 0.1 + 0.2}s` }}
            >
              <h3 className="text-xl font-bold mb-6 gradient-text-cyan">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.proficiency}%` : '0%',
                          background: 'var(--glass-gradient-3)',
                          transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.1 + 0.5}s`
                        }}
                      />
                    </div>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Work Approach */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Tools */}
          <div className={`glass-card scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-6 gradient-text-green">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span key={index} className="skill-pill">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Work Approach */}
          <div className={`glass-card scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
            <h3 className="text-xl font-bold mb-6 gradient-text">Work Approach</h3>
            <div className="space-y-4">
              {workApproach.map((item, index) => (
                <div key={index}>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">▸</span>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassSkills;
