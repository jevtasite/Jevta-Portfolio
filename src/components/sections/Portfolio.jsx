import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getProjects = () => [
    {
      name: "Field Focus",
      description: t('portfolio.fieldFocus'),
      url: "https://fieldfocus.agency/",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      type: t('portfolio.webDesign'),
      features: [
        "Modern agency landing page",
        "Smooth scroll animations",
        "Mobile-first responsive design",
        "Performance optimized"
      ],
      challenges: [
        "Cross-browser compatibility",
        "Optimizing loading times",
        "Creating engaging animations"
      ]
    },
    {
      name: "Platinum Media",
      description: t('portfolio.platinumMedia'),
      url: "https://platinumedia.site/",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      type: t('portfolio.webDesign'),
      features: [
        "Professional media agency site",
        "Interactive portfolio gallery",
        "Dynamic content sections",
        "SEO optimized structure"
      ],
      challenges: [
        "Image optimization for fast loading",
        "Creating intuitive navigation",
        "Maintaining brand consistency"
      ]
    },
    {
      name: "Playmaker Group",
      description: t('portfolio.playmaker'),
      url: "https://playmakergroup.net",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      type: t('portfolio.webDesign'),
      features: [
        "Sports management platform",
        "Client showcase sections",
        "Contact integration",
        "Multi-page navigation"
      ],
      challenges: [
        "Organizing complex information",
        "Creating professional layout",
        "Ensuring mobile usability"
      ]
    },
    {
      name: "L'ÉQUIPE",
      description: t('portfolio.lequipe'),
      url: "https://l-equipe-management.com/",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      type: t('portfolio.webDesign'),
      features: [
        "Talent management website",
        "Artist portfolio displays",
        "Elegant design system",
        "Smooth page transitions"
      ],
      challenges: [
        "Showcasing diverse talent",
        "Creating visual hierarchy",
        "Balancing aesthetics with performance"
      ]
    },
  ];

  return (
    <section
      id="projects"
      className="portfolio-section py-20 px-4 relative z-10"
    >
      <div className="max-w-terminal mx-auto">
        {/* Terminal Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-matrix-green font-fira text-sm mb-2">
            <span>$</span>
            <span>ls projects/</span>
          </div>
          <div className="border-l-2 border-comment-green pl-4">
            <h2 className="text-lime-terminal font-fira text-3xl md:text-4xl font-bold mb-4">
              {t('portfolio.title')}
            </h2>
          </div>
        </div>

        {/* Directory Listing Style */}
        <div className={`mb-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="border border-comment-green bg-elevated-black/50 p-4">
            <div className="font-fira text-xs text-comment-green mb-2">
              total {getProjects().length} projects
            </div>
            <div className="space-y-1 font-fira text-sm">
              {getProjects().map((project, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-lime-terminal">drwxr-xr-x</span>
                  <span className="text-comment-green">4</span>
                  <span className="text-comment-green">jevta</span>
                  <span className="text-comment-green">jevta</span>
                  <span className="text-comment-green">4096</span>
                  <span className="text-comment-green">Oct 17 2024</span>
                  <span className="text-matrix-green">{project.name}/</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div
          className={`grid md:grid-cols-2 gap-6 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {getProjects().map((project, index) => (
            <div
              key={index}
              className={`project-card border-2 transition-all duration-300 cursor-pointer ${
                hoveredProject === index
                  ? "border-lime-terminal bg-elevated-black/80 glitch"
                  : "border-comment-green bg-elevated-black/50"
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              style={{
                animationDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-comment-green/30">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lime-terminal font-fira text-xl font-bold">
                    {project.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-comment-green font-fira text-xs">
                      .com
                    </span>
                    <span className="text-lime-terminal font-fira text-xs">
                      {expandedProject === index ? '[-]' : '[+]'}
                    </span>
                  </div>
                </div>
                <div className="text-comment-green font-fira text-xs">
                  {project.type}
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6">
                {/* Description */}
                <p className="text-comment-green font-fira text-sm leading-relaxed mb-4 border-l-2 border-comment-green/30 pl-4">
                  <span className="text-matrix-green">// </span>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="text-comment-green font-fira text-xs mb-2">
                    &gt; {t('portfolio.stack')}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-terminal-black border border-matrix-green/50 text-matrix-green font-fira text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedProject === index && (
                  <div className="space-y-4 mb-4 animate-fade-in">
                    {/* Features */}
                    <div className="border border-comment-green/30 p-4 bg-terminal-black/50">
                      <div className="text-lime-terminal font-fira text-xs mb-2 flex items-center space-x-2">
                        <span>&gt;</span>
                        <span>cat features.txt</span>
                      </div>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-comment-green font-fira text-xs flex items-start space-x-2">
                            <span className="text-matrix-green">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges */}
                    <div className="border border-comment-green/30 p-4 bg-terminal-black/50">
                      <div className="text-lime-terminal font-fira text-xs mb-2 flex items-center space-x-2">
                        <span>&gt;</span>
                        <span>cat challenges.log</span>
                      </div>
                      <ul className="space-y-1">
                        {project.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="text-comment-green font-fira text-xs flex items-start space-x-2">
                            <span className="text-cyber-magenta">!</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 pt-4 border-t border-comment-green/30">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-lime-terminal font-fira text-sm hover:text-cyber-magenta transition-colors group"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>./launch_project.sh</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedProject(expandedProject === index ? null : index);
                    }}
                    className="text-comment-green font-fira text-xs hover:text-lime-terminal transition-colors"
                  >
                    {expandedProject === index ? '$ collapse' : '$ expand'}
                  </button>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              {hoveredProject === index && (
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 bg-lime-terminal rounded-full animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="mt-8 border border-comment-green bg-elevated-black/50 p-4">
          <div className="font-fira text-sm text-comment-green">
            <span className="text-lime-terminal">$</span> echo "{t('portfolio.moreComing')}"
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
