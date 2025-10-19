import { useState } from 'react';
import { skillCategories, tools, workApproach } from '../../data/skills';
import '../../styles/professional.css';

const GlassSkills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedSkill, setExpandedSkill] = useState(null);

  // Generate unique commit hash for each skill
  const generateCommitHash = (categoryIndex, skillIndex) => {
    const hashes = [
      'a4f3c2e', 'b8d91f3', 'c2e5a7b', 'd9f2c4e',
      'e1a8b5c', 'f7c3d2a', 'g5b9e1f', 'h3d7a2c',
      'i9e4f1b', 'j2c8d5a'
    ];
    return hashes[categoryIndex * 3 + skillIndex] || 'a1b2c3d';
  };

  // Filter skills based on active tab
  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return skillCategories;
    }
    return skillCategories.filter(cat => cat.category === activeTab);
  };

  // Generate diff stat visualization
  const renderDiffStat = (proficiency) => {
    const additions = Math.round(proficiency);
    const deletions = 100 - additions;
    const addSymbols = '+'.repeat(Math.min(additions, 50)); // Limit to 50 chars for display
    const delSymbols = '-'.repeat(Math.min(deletions, 50));

    return (
      <div className="diff-stat">
        <span className="additions">{addSymbols}</span>
        <span className="deletions">{delSymbols}</span>
        <span className="stat-numbers">
          ({additions} <span className="additions">+</span>, {deletions} <span className="deletions">-</span>)
        </span>
      </div>
    );
  };

  const toggleSkillExpansion = (categoryIndex, skillIndex) => {
    const key = `${categoryIndex}-${skillIndex}`;
    setExpandedSkill(expandedSkill === key ? null : key);
  };

  const isExpanded = (categoryIndex, skillIndex) => {
    return expandedSkill === `${categoryIndex}-${skillIndex}`;
  };

  const renderCommits = () => {
    const filteredCategories = getFilteredSkills();

    return filteredCategories.map((category, catIndex) => (
      <div key={catIndex} className="commit-category">
        {category.skills.map((skill, skillIndex) => {
          const commitHash = generateCommitHash(catIndex, skillIndex);
          const expanded = isExpanded(catIndex, skillIndex);

          return (
            <div
              key={skillIndex}
              className={`commit-entry ${expanded ? 'expanded' : ''}`}
              onClick={() => toggleSkillExpansion(catIndex, skillIndex)}
            >
              {/* Commit Header */}
              <div className="commit-header">
                <span className="commit-hash">{commitHash}</span>
                <span className="commit-ref">(HEAD → {category.category})</span>
              </div>

              {/* Commit Meta */}
              <div className="commit-meta">
                <div className="commit-author">
                  Author: Luka Stoiljković &lt;jevta.site@gmail.com&gt;
                </div>
                <div className="commit-date">
                  Date:   {category.title}
                </div>
              </div>

              {/* Commit Message */}
              <div className="commit-message">
                <div className="message-title">{skill.name}</div>
                {expanded && (
                  <div className="message-body">
                    {skill.description}
                  </div>
                )}
              </div>

              {/* Diff Stat */}
              <div className="commit-diff">
                <div className="diff-file">
                  proficiency.{skill.name.toLowerCase().replace(/\s+/g, '-')} | {skill.proficiency} {renderDiffStat(skill.proficiency)}
                </div>
                <div className="diff-summary">
                  1 file changed, {skill.proficiency} insertions(+), {100 - skill.proficiency} deletions(-)
                </div>
              </div>

              {/* Expanded Details */}
              {expanded && (
                <div className="commit-details">
                  <div className="detail-header">diff --git a/skills b/skills</div>
                  <div className="detail-line">index {commitHash}..master</div>
                  <div className="detail-line">--- a/skills</div>
                  <div className="detail-line">+++ b/skills</div>
                  <div className="detail-content">
                    <span className="addition-line">+ Proficiency: {skill.proficiency}%</span>
                    <span className="addition-line">+ {skill.description}</span>
                  </div>
                </div>
              )}

              <div className="commit-divider"></div>
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <section id="skills" className="professional-section">
      <div className="professional-container">
        <div className="scroll-reveal visible">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with - git log style
          </p>
        </div>

        <div className="terminal-editor mt-12">
          {/* Window Controls & Title Bar */}
          <div className="terminal-header">
            <div className="window-controls">
              <span className="control-btn close"></span>
              <span className="control-btn minimize"></span>
              <span className="control-btn maximize"></span>
            </div>
            <div className="terminal-title">~/portfolio/skills - git log --stat</div>
          </div>

          {/* Category Tabs */}
          <div className="file-tabs">
            <button
              className={`file-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <span>--all</span>
            </button>
            <button
              className={`file-tab ${activeTab === 'core' ? 'active' : ''}`}
              onClick={() => setActiveTab('core')}
            >
              <span>core</span>
            </button>
            <button
              className={`file-tab ${activeTab === 'frameworks' ? 'active' : ''}`}
              onClick={() => setActiveTab('frameworks')}
            >
              <span>frameworks</span>
            </button>
            <button
              className={`file-tab ${activeTab === 'tools' ? 'active' : ''}`}
              onClick={() => setActiveTab('tools')}
            >
              <span>tools</span>
            </button>
            <button
              className={`file-tab ${activeTab === 'responsive-design' ? 'active' : ''}`}
              onClick={() => setActiveTab('responsive-design')}
            >
              <span>design</span>
            </button>
          </div>

          {/* Git Log Content */}
          <div className="code-editor git-log-container">
            {renderCommits()}
          </div>
        </div>

        {/* Tools & Work Approach - Terminal Style */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Dependencies (Tools) */}
          <div className="terminal-editor">
            <div className="terminal-header">
              <div className="window-controls">
                <span className="control-btn close"></span>
                <span className="control-btn minimize"></span>
                <span className="control-btn maximize"></span>
              </div>
              <div className="terminal-title">~/portfolio - npm list</div>
            </div>
            <div className="code-editor dependencies-output">
              <div className="npm-header">portfolio@1.0.0</div>
              {tools.map((tool, index) => (
                <div key={index} className="npm-dependency">
                  <span className="npm-tree">{index === tools.length - 1 ? '└──' : '├──'}</span>
                  <span className="npm-package">{tool.toLowerCase().replace(/\s+/g, '-')}@latest</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scripts (Work Approach) */}
          <div className="terminal-editor">
            <div className="terminal-header">
              <div className="window-controls">
                <span className="control-btn close"></span>
                <span className="control-btn minimize"></span>
                <span className="control-btn maximize"></span>
              </div>
              <div className="terminal-title">~/portfolio - npm run</div>
            </div>
            <div className="code-editor scripts-output">
              <div className="scripts-header">Scripts available via `npm run`:</div>
              {workApproach.map((approach, index) => (
                <div key={index} className="npm-script">
                  <span className="script-name">{approach.title.toLowerCase().replace(/\s+/g, '-')}</span>
                  <span className="script-desc">"{approach.description}"</span>
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
