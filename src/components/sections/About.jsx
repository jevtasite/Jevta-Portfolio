import { useEffect, useState } from "react";

const About = () => {
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

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="about-section py-20 px-4 relative z-10"
    >
      <div className="max-w-terminal mx-auto">
        {/* Terminal Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-matrix-green font-fira text-sm mb-2">
            <span>$</span>
            <span>cat about.txt</span>
          </div>
          <div className="border-l-2 border-comment-green pl-4">
            <h2 className="text-lime-terminal font-fira text-3xl md:text-4xl font-bold mb-4">
              whoami
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div
          className={`grid md:grid-cols-2 gap-8 md:items-stretch ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {/* Left Column - Profile Info */}
          <div className="space-y-6 flex flex-col">
            <div className="border border-comment-green p-6 bg-elevated-black/50">
              <h3 className="text-lime-terminal font-fira text-xl mb-4">
                &gt; Profile Information
              </h3>

              <div className="space-y-3 font-fira text-sm">
                <div className="flex">
                  <span className="text-comment-green w-32">Full Name:</span>
                  <span className="text-matrix-green">Luka Stoiljković</span>
                </div>

                <div className="flex">
                  <span className="text-comment-green w-32">Birth Date:</span>
                  <span className="text-matrix-green">July 3rd, 2005</span>
                </div>

                <div className="flex">
                  <span className="text-comment-green w-32">Job:</span>
                  <span className="text-matrix-green">Front-end Developer</span>
                </div>

                <div className="flex">
                  <span className="text-comment-green w-32">Website:</span>
                  <span className="text-matrix-green">jevta.site</span>
                </div>

                <div className="flex">
                  <span className="text-comment-green w-32">Email:</span>
                  <a
                    href="mailto:jevta.site@gmail.com"
                    className="text-lime-terminal hover:text-cyber-magenta transition-colors underline"
                  >
                    jevta.site@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Picture Placeholder */}
            <div className="border border-comment-green p-6 bg-elevated-black/50 flex-1 flex flex-col">
              <div className="bg-terminal-black border-2 border-matrix-green flex items-center justify-center flex-1">
                <pre className="text-matrix-green text-2xl leading-tight">
                  {`   ___
  /   \\
 |  o o|
 |  ^  |
 | \\_/ |
  \\___/`}
                </pre>
              </div>
              <p className="text-comment-green font-fira text-xs text-center mt-4">
                // ASCII profile picture
              </p>
            </div>
          </div>

          {/* Right Column - Bio & Skills */}
          <div className="space-y-6">
            <div className="border border-comment-green p-6 bg-elevated-black/50">
              <h3 className="text-lime-terminal font-fira text-xl mb-4">
                &gt; About Me
              </h3>

              <div className="space-y-4 text-comment-green font-fira text-sm leading-relaxed">
                <p>
                  <span className="text-matrix-green">// </span>
                  Hello! I'm Luka Stoiljković. I'm a passionate front-end
                  developer who loves creating beautiful and functional web
                  experiences.
                </p>

                <p>
                  <span className="text-matrix-green">// </span>I specialize in
                  modern web technologies and have a keen eye for design. My
                  goal is to build websites that not only look great but also
                  provide excellent user experiences.
                </p>

                <p>
                  <span className="text-matrix-green">// </span>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open source, or sharing my
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            <div className="border border-comment-green p-6 bg-elevated-black/50">
              <h3 className="text-lime-terminal font-fira text-xl mb-4">
                &gt; Quick Skills Overview
              </h3>

              <div className="space-y-1 font-fira text-sm">
                <div className="text-lime-terminal mb-2">~/skills/</div>

                {[
                  "HTML/CSS",
                  "JavaScript",
                  "Bootstrap",
                  "React",
                  "Responsive Design",
                ].map((skill, index, array) => {
                  const isLast = index === array.length - 1;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-1 group"
                    >
                      <span className="text-matrix-green">
                        {isLast ? "└──" : "├──"}
                      </span>
                      <span className="text-lime-terminal group-hover:text-cyber-magenta transition-colors">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="text-comment-green font-fira text-xs mt-4">
                <span className="text-lime-terminal">$</span> cat skills.json
                <span className="text-comment-green">
                  {" "}
                  // for detailed skills
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              const contact = document.getElementById("contact");
              if (contact) {
                contact.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="border-2 border-matrix-green text-matrix-green px-8 py-3 font-fira hover:bg-matrix-green hover:text-terminal-black transition-all duration-300"
          >
            &gt; Hire Me_
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
