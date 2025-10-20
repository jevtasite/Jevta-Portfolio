import { useState } from "react";
import { profile } from "../../data/profile";
import { quickSkills } from "../../data/skills";
import "../../styles/professional.css";

const GlassAbout = () => {
  const [activeTab, setActiveTab] = useState("developer");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderDeveloperJS = () => (
    <div className="code-content">
      <div className="code-line">
        <span className="line-number">1</span>
        <span className="code-comment">
          // developer.js - Portfolio Profile
        </span>
      </div>
      <div className="code-line">
        <span className="line-number">2</span>
        <span className="code-keyword">const</span>{" "}
        <span className="code-variable">developer</span>{" "}
        <span className="code-operator">=</span>{" "}
        <span className="code-bracket">{"{"}</span>
      </div>
      <div className="code-line">
        <span className="line-number">3</span>
        <span className="code-indent"> </span>
        <span className="code-comment">// Personal Info</span>
      </div>
      <div className="code-line">
        <span className="line-number">4</span>
        <span className="code-indent"> </span>
        <span className="code-property">name</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"{profile.name}"</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">5</span>
        <span className="code-indent"> </span>
        <span className="code-property">nickname</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"{profile.nickname}"</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">6</span>
        <span className="code-indent"> </span>
        <span className="code-property">birthDate</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"{profile.birthDate}"</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">7</span>
        <span className="code-indent"> </span>
        <span className="code-property">location</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"{profile.location} 🇷🇸"</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">8</span>
        <span className="code-indent"> </span>
        <span className="code-property">timezone</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"{profile.timezone}"</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">9</span>
        <span className="code-indent"> </span>
        <span className="code-property">languages</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
        <span className="code-string">"Serbian"</span>
        <span className="code-operator">,</span>{" "}
        <span className="code-string">"English"</span>
        <span className="code-bracket">]</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line empty-line">
        <span className="line-number">10</span>
      </div>
      <div className="code-line">
        <span className="line-number">11</span>
        <span className="code-indent"> </span>
        <span className="code-comment">// Professional</span>
      </div>
      <div className="code-line">
        <span className="line-number">12</span>
        <span className="code-indent"> </span>
        <span className="code-property">role</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"{profile.role}"</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">13</span>
        <span className="code-indent"> </span>
        <span className="code-property">email</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"{profile.email}"</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">14</span>
        <span className="code-indent"> </span>
        <span className="code-property">website</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"{profile.website}"</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line empty-line">
        <span className="line-number">15</span>
      </div>
      <div className="code-line">
        <span className="line-number">16</span>
        <span className="code-indent"> </span>
        <span className="code-comment">// Status</span>
      </div>
      <div className="code-line">
        <span className="line-number">17</span>
        <span className="code-indent"> </span>
        <span className="code-property">availableForFreelance</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-boolean">true</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">18</span>
        <span className="code-indent"> </span>
        <span className="code-property">openToCollaboration</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-boolean">true</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">19</span>
        <span className="code-indent"> </span>
        <span className="code-property">responseTime</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"{profile.status.responseTime}"</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line empty-line">
        <span className="line-number">20</span>
      </div>
      <div className="code-line">
        <span className="line-number">21</span>
        <span className="code-indent"> </span>
        <span className="code-comment">// Core Skills</span>
      </div>
      <div className="code-line">
        <span className="line-number">22</span>
        <span className="code-indent"> </span>
        <span className="code-property">skills</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">[</span>
      </div>
      {quickSkills.map((skill, index) => (
        <div className="code-line" key={index}>
          <span className="line-number">{23 + index}</span>
          <span className="code-indent"> </span>
          <span className="code-string">"{skill}"</span>
          {index < quickSkills.length - 1 ? (
            <span className="code-operator">,</span>
          ) : (
            ""
          )}
        </div>
      ))}
      <div className="code-line">
        <span className="line-number">{23 + quickSkills.length}</span>
        <span className="code-indent"> </span>
        <span className="code-bracket">]</span>
      </div>
      <div className="code-line">
        <span className="line-number">{24 + quickSkills.length}</span>
        <span className="code-bracket">{"}"}</span>
        <span className="code-operator">;</span>
      </div>
      <div className="code-line empty-line">
        <span className="line-number">{25 + quickSkills.length}</span>
      </div>
      <div className="code-line">
        <span className="line-number">{26 + quickSkills.length}</span>
        <span className="code-keyword">export default</span>{" "}
        <span className="code-variable">developer</span>
        <span className="code-operator">;</span>
      </div>
    </div>
  );

  const renderStatsJSON = () => (
    <div className="code-content">
      <div className="code-line">
        <span className="line-number">1</span>
        <span className="code-bracket">{"{"}</span>
      </div>
      <div className="code-line">
        <span className="line-number">2</span>
        <span className="code-indent"> </span>
        <span className="code-property">"developer"</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">{"{"}</span>
      </div>
      <div className="code-line">
        <span className="line-number">3</span>
        <span className="code-indent"> </span>
        <span className="code-property">"name"</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"{profile.name}"</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">4</span>
        <span className="code-indent"> </span>
        <span className="code-property">"stats"</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-bracket">{"{"}</span>
      </div>
      <div className="code-line">
        <span className="line-number">5</span>
        <span className="code-indent"> </span>
        <span className="code-property">"yearsOfExperience"</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-number">{profile.stats.yearsOfExperience}</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">6</span>
        <span className="code-indent"> </span>
        <span className="code-property">"projectsCompleted"</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-number">{profile.stats.projectsCompleted}</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">8</span>
        <span className="code-indent"> </span>
        <span className="code-property">"coffeeConsumed"</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">"{profile.stats.coffeeConsumed}"</span>
        <span className="code-operator">,</span>
      </div>
      <div className="code-line">
        <span className="line-number">9</span>
        <span className="code-indent"> </span>
        <span className="code-property">"clientSatisfaction"</span>
        <span className="code-operator">:</span>{" "}
        <span className="code-string">
          "{profile.stats.clientSatisfaction}"
        </span>
      </div>
      <div className="code-line">
        <span className="line-number">10</span>
        <span className="code-indent"> </span>
        <span className="code-bracket">{"}"}</span>
      </div>
      <div className="code-line">
        <span className="line-number">11</span>
        <span className="code-indent"> </span>
        <span className="code-bracket">{"}"}</span>
      </div>
      <div className="code-line">
        <span className="line-number">12</span>
        <span className="code-bracket">{"}"}</span>
      </div>
    </div>
  );

  const renderREADME = () => (
    <div className="code-content">
      <div className="code-line">
        <span className="line-number">1</span>
        <span className="code-markdown-header"># My Journey</span>
      </div>
      <div className="code-line empty-line">
        <span className="line-number">2</span>
      </div>
      {profile.journey.map((item, index) => (
        <div key={index}>
          <div className="code-line">
            <span className="line-number">{3 + index * 2}</span>
            <span className="code-markdown-list">- {item}</span>
          </div>
          {index < profile.journey.length - 1 && (
            <div className="code-line empty-line">
              <span className="line-number">{4 + index * 2}</span>
            </div>
          )}
        </div>
      ))}
      <div className="code-line empty-line">
        <span className="line-number">{3 + profile.journey.length * 2}</span>
      </div>
      <div className="code-line">
        <span className="line-number">{4 + profile.journey.length * 2}</span>
        <span className="code-markdown-header">## About</span>
      </div>
      <div className="code-line empty-line">
        <span className="line-number">{5 + profile.journey.length * 2}</span>
      </div>
      {profile.bio.map((paragraph, index) => (
        <div key={index}>
          <div className="code-line">
            <span className="line-number">
              {6 + profile.journey.length * 2 + index * 2}
            </span>
            <span className="code-text">{paragraph}</span>
          </div>
          {index < profile.bio.length - 1 && (
            <div className="code-line empty-line">
              <span className="line-number">
                {7 + profile.journey.length * 2 + index * 2}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "developer":
        return renderDeveloperJS();
      case "stats":
        return renderStatsJSON();
      case "readme":
        return renderREADME();
      default:
        return renderDeveloperJS();
    }
  };

  return (
    <section id="about" className="professional-section">
      <div className="professional-container">
        <div className="scroll-reveal visible">
          <h2 className="section-title">
            About <span className="gradient-text-green">Me</span>
          </h2>
          <p className="section-subtitle">
            Explore my developer profile through code
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
            <div className="terminal-title">~/portfolio/about</div>
            <button
              className={`copy-code-btn ${copied ? "copied" : ""}`}
              onClick={handleCopyEmail}
            >
              {copied ? (
                <>
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* File Tabs */}
          <div className="file-tabs">
            <button
              className={`file-tab ${
                activeTab === "developer" ? "active" : ""
              }`}
              onClick={() => setActiveTab("developer")}
            >
              <svg
                className="w-4 h-4 file-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
              <span>developer.js</span>
              <span className="tab-close">×</span>
            </button>
            <button
              className={`file-tab ${activeTab === "stats" ? "active" : ""}`}
              onClick={() => setActiveTab("stats")}
            >
              <svg
                className="w-4 h-4 file-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
              <span>stats.json</span>
              <span className="tab-close">×</span>
            </button>
            <button
              className={`file-tab ${activeTab === "readme" ? "active" : ""}`}
              onClick={() => setActiveTab("readme")}
            >
              <svg
                className="w-4 h-4 file-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
              <span>README.md</span>
              <span className="tab-close">×</span>
            </button>
          </div>

          {/* Code Editor Content */}
          <div className="code-editor">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default GlassAbout;
