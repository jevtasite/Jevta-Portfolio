import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillTree = [
    {
      category: "core",
      skills: [
        {
          name: "HTML5",
          description: "Semantic markup, accessibility, SEO-friendly structure",
        },
        {
          name: "CSS3",
          description: "Flexbox, Grid, animations, custom properties",
        },
        {
          name: "JavaScript-ES6+",
          description:
            "Async/await, promises, destructuring, functional programming",
        },
      ],
    },
    {
      category: "frameworks",
      skills: [
        {
          name: "React",
          description:
            "Hooks, state management, component composition, optimization",
        },
        {
          name: "TailwindCSS",
          description:
            "Utility-first CSS, custom configurations, responsive patterns",
        },
      ],
    },
    {
      category: "tools",
      skills: [
        {
          name: "Git",
          description: "Workflows, branching strategies, GitHub/GitLab",
        },
        {
          name: "Vite",
          description: "Fast build tool, HMR, optimized bundling",
        },
        {
          name: "VSCode",
          description: "Extensions, debugging, integrated terminal",
        },
      ],
    },
    {
      category: "responsive-design",
      skills: [
        {
          name: "Mobile-First",
          description: "Cross-browser, accessibility, progressive enhancement",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="skills-section min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-terminal mx-auto">
        {/* Terminal Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-matrix-green font-fira text-sm mb-2">
            <span>$</span>
            <span className="typing-effect">cat skills.json</span>
          </div>
          <div className="border-l-2 border-comment-green pl-4">
            <h2 className="text-lime-terminal font-fira text-3xl md:text-4xl font-bold mb-4">
              Technical Skills
            </h2>
          </div>
        </div>

        {/* Skills JSON Display */}
        <div
          className={`border border-comment-green bg-elevated-black/50 p-6 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <pre className="font-fira text-sm overflow-x-auto">
            <code>
              <span className="text-cyber-magenta">{"{"}</span>
              {"\n"}
              <span className="text-comment-green"> "developer"</span>
              <span className="text-matrix-green">: </span>
              <span className="text-lime-terminal">"Luka Stoiljković"</span>
              <span className="text-matrix-green">,</span>
              {"\n"}
              <span className="text-comment-green"> "skills"</span>
              <span className="text-matrix-green">: </span>
              <span className="text-cyber-magenta">{"["}</span>
              {"\n"}
            </code>
          </pre>

          {/* Skills File Tree */}
          <div className="space-y-1 mt-4 mb-4">
            <div className="text-lime-terminal font-fira text-sm mb-3">
              skills/
            </div>

            {skillTree.map((category, categoryIndex) => {
              const isLastCategory = categoryIndex === skillTree.length - 1;

              return (
                <div key={categoryIndex} className="ml-0">
                  {/* Category folder */}
                  <div className="flex items-start space-x-1 font-fira text-sm">
                    <span className="text-matrix-green">
                      {isLastCategory ? "└──" : "├──"}
                    </span>
                    <span className="text-lime-terminal">
                      {category.category}/
                    </span>
                  </div>

                  {/* Skills in category */}
                  {category.skills.map((skill, skillIndex) => {
                    const isLastSkill =
                      skillIndex === category.skills.length - 1;
                    const prefix = isLastCategory ? "    " : "│   ";

                    return (
                      <div key={skillIndex} className="ml-0">
                        {/* Skill file */}
                        <div className="flex items-start space-x-1 font-fira text-sm group">
                          <span className="text-matrix-green">
                            {prefix}
                            {isLastSkill ? "└──" : "├──"}
                          </span>
                          <span className="text-lime-terminal group-hover:text-cyber-magenta transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        {/* Description */}
                        <div className="flex items-start space-x-1 font-fira text-xs text-comment-green ml-0 mt-1 mb-2">
                          <span className="text-matrix-green">
                            {prefix}
                            {isLastSkill ? "    " : "│   "}
                          </span>
                          <span className="italic">// {skill.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <pre className="font-fira text-sm">
            <code>
              <span className="text-cyber-magenta"> {"]"}</span>
              {"\n"}
              <span className="text-cyber-magenta">{"}"}</span>
            </code>
          </pre>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Tools & Technologies */}
          <div className="border border-comment-green p-6 bg-elevated-black/50">
            <h3 className="text-lime-terminal font-fira text-lg mb-4">
              &gt; Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Vite",
                "Webpack",
                "npm/yarn",
                "VS Code",
                "Chrome DevTools",
                "Postman",
              ].map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-matrix-green text-matrix-green font-fira text-xs hover:bg-matrix-green hover:text-terminal-black transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Work Approach */}
          <div className="border border-comment-green p-6 bg-elevated-black/50">
            <h3 className="text-lime-terminal font-fira text-lg mb-4">
              &gt; Work Approach
            </h3>
            <div className="space-y-3 font-fira text-sm">
              <div>
                <div className="flex items-start space-x-2 mb-1">
                  <span className="text-matrix-green">▸</span>
                  <span className="text-comment-green">Mobile-First & Responsive Design</span>
                </div>
                <div className="text-comment-green text-xs italic ml-4">
                  // Every project starts with mobile optimization
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-2 mb-1">
                  <span className="text-matrix-green">▸</span>
                  <span className="text-comment-green">Clean, Maintainable Code</span>
                </div>
                <div className="text-comment-green text-xs italic ml-4">
                  // Writing code that's easy to read and modify
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-2 mb-1">
                  <span className="text-matrix-green">▸</span>
                  <span className="text-comment-green">Cross-Browser Compatibility</span>
                </div>
                <div className="text-comment-green text-xs italic ml-4">
                  // Ensuring consistent experience across all browsers
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-2 mb-1">
                  <span className="text-matrix-green">▸</span>
                  <span className="text-comment-green">Performance Optimization</span>
                </div>
                <div className="text-comment-green text-xs italic ml-4">
                  // Fast load times and smooth interactions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
