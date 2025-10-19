import { useState } from 'react';
import { skillCategories, tools, workApproach } from '../../data/skills';
import '../../styles/professional.css';

const GlassSkills = () => {
  // Track which categories are expanded (first one expanded by default)
  const [expandedCategories, setExpandedCategories] = useState([0]);

  const toggleCategory = (index) => {
    if (expandedCategories.includes(index)) {
      // Collapse if already expanded
      setExpandedCategories(expandedCategories.filter(i => i !== index));
    } else {
      // Expand category
      setExpandedCategories([...expandedCategories, index]);
    }
  };

  const isExpanded = (index) => expandedCategories.includes(index);

  return (
    <section id="skills" className="professional-section">
      <div className="professional-container">
        <div className="scroll-reveal visible">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Accordion Skills */}
        <div className="skills-accordion mt-12">
          {skillCategories.map((category, catIndex) => {
            const expanded = isExpanded(catIndex);

            return (
              <div key={catIndex} className={`accordion-item ${expanded ? 'expanded' : ''}`}>
                {/* Accordion Header */}
                <button
                  className="accordion-header"
                  onClick={() => toggleCategory(catIndex)}
                  aria-expanded={expanded}
                >
                  <span className="accordion-arrow">{expanded ? '▾' : '▸'}</span>
                  <span className="accordion-title">{category.title}</span>
                  <span className="accordion-count">({category.skills.length} skill{category.skills.length !== 1 ? 's' : ''})</span>
                </button>

                {/* Accordion Content */}
                <div className={`accordion-content ${expanded ? 'show' : ''}`}>
                  <div className="accordion-inner">
                    {category.skills.map((skill, skillIndex) => {
                      const isLast = skillIndex === category.skills.length - 1;

                      return (
                        <div key={skillIndex} className="skill-item">
                          <div className="skill-tree">
                            <span className="tree-char">{isLast ? '└─' : '├─'}</span>
                          </div>
                          <div className="skill-details">
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-description">{skill.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools & Work Approach - Simple Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Tools */}
          <div className="simple-glass-section">
            <h3 className="simple-section-header">
              <span className="section-icon">⚡</span>
              Tools & Technologies
            </h3>
            <div className="simple-badges-grid">
              {tools.map((tool, index) => (
                <span key={index} className="simple-badge">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Work Approach */}
          <div className="simple-glass-section">
            <h3 className="simple-section-header">
              <span className="section-icon">💡</span>
              Work Approach
            </h3>
            <div className="work-approach-list">
              {workApproach.map((approach, index) => (
                <div key={index} className="approach-item">
                  <div className="approach-title">{approach.title}</div>
                  <div className="approach-description">{approach.description}</div>
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
