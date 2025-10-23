import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleExperiences, setVisibleExperiences] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Progressive disclosure - reveal experiences one by one
            const experiences = getExperiences();
            experiences.forEach((_, index) => {
              setTimeout(() => {
                setVisibleExperiences((prev) => [...prev, index]);
              }, index * 300); // 300ms delay between each experience
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("experience");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getExperiences = () => [
    {
      type: t("experience.internship"),
      company: "Esenca Software",
      companyUrl: "https://esenca.rs/",
      period: "Summer 2023",
      timestamp: "2023-07-15 09:00:00",
      description: t("experience.esencaDesc"),
      certificate:
        "https://drive.google.com/file/d/1RocFTef7IS-BZRohnQbvb3gdcyd_cYWx/view?usp=sharing",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
    },
    {
      type: t("experience.freelance"),
      company: "Self-Employed",
      companyUrl: null,
      period: "2023 - Present",
      timestamp: "2023-09-01 00:00:00",
      description: t("experience.freelanceDesc"),
      certificate: null,
      technologies: [
        "React",
        "Tailwind CSS",
        "Vite",
        "Framer Motion",
        "Netlify",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="experience-section py-20 px-4 relative z-10 bg-elevated-black/20"
    >
      <div className="max-w-terminal mx-auto">
        {/* Terminal Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-matrix-green font-fira text-sm mb-2">
            <span>$</span>
            <span>cat experience.log</span>
          </div>
          <div className="border-l-2 border-comment-green pl-4">
            <h2 className="text-lime-terminal font-fira text-3xl md:text-4xl font-bold mb-4">
              {t("experience.title")}
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          {getExperiences().map((exp, index) => (
            <div
              key={index}
              className={`timeline-item border border-comment-green bg-elevated-black/50 p-6 hover:border-lime-terminal transition-all duration-500 ${
                visibleExperiences.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Log Header */}
              <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center space-x-2 font-fira text-xs text-comment-green">
                  <span>[</span>
                  <span className="text-lime-terminal">{exp.timestamp}</span>
                  <span>]</span>
                  <span className="text-cyber-magenta uppercase">
                    {exp.type}
                  </span>
                </div>
                <div className="font-fira text-xs text-comment-green">
                  {exp.period}
                </div>
              </div>

              {/* Company Info */}
              <div className="mb-4">
                <h3 className="text-lime-terminal font-fira text-xl md:text-2xl font-bold mb-2">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyber-magenta transition-colors inline-flex items-center gap-2"
                    >
                      {exp.company}
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
              </div>

              {/* Description */}
              <div className="mb-4">
                <p className="text-comment-green font-fira text-sm leading-relaxed border-l-2 border-comment-green/30 pl-4">
                  <span className="text-matrix-green">// </span>
                  {exp.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <div className="text-comment-green font-fira text-xs mb-2">
                  &gt; {t("experience.technologies")}:
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-terminal-black border border-matrix-green/50 text-matrix-green font-fira text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Link */}
              {exp.certificate && (
                <div className="mt-4 pt-4 border-t border-comment-green/30">
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-lime-terminal font-fira text-sm hover:text-cyber-magenta transition-colors"
                  >
                    <span>./view_certificate.sh</span>
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Status Message */}
        <div className="mt-8 border border-lime-terminal bg-elevated-black/50 p-4">
          <div className="flex items-start space-x-2 font-fira text-sm">
            <span className="text-lime-terminal">$</span>
            <div className="flex-1">
              <span className="text-comment-green">status:</span>
              <span className="text-lime-terminal ml-2">
                {t("experience.status")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
