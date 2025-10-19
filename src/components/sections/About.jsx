import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Progressive disclosure - reveal items one by one
            const items = ['header', 'profile', 'picture', 'bio', 'skills', 'cta'];
            items.forEach((item, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, item]);
              }, index * 150); // 150ms delay between each item
            });
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
        <div className={`mb-8 transition-all duration-500 ${visibleItems.includes('header') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
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
            <div className={`border border-comment-green p-6 bg-elevated-black/50 transition-all duration-500 ${visibleItems.includes('profile') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h3 className="text-lime-terminal font-fira text-xl mb-4">
                &gt; {t('about.profileInfo')}
              </h3>

              <div className="space-y-3 font-fira text-sm">
                <div className="flex">
                  <span className="text-comment-green w-32">{t('about.fullName')}:</span>
                  <span className="text-matrix-green">Luka Stoiljković</span>
                </div>

                <div className="flex">
                  <span className="text-comment-green w-32">{t('about.birthDate')}:</span>
                  <span className="text-matrix-green">{t('about.birthDay')}</span>
                </div>

                <div className="flex">
                  <span className="text-comment-green w-32">{t('about.job')}:</span>
                  <span className="text-matrix-green">{t('about.jobTitle')}</span>
                </div>

                <div className="flex">
                  <span className="text-comment-green w-32">{t('about.website')}:</span>
                  <span className="text-matrix-green">jevta.site</span>
                </div>

                <div className="flex">
                  <span className="text-comment-green w-32">{t('about.email')}:</span>
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
            <div className={`border border-comment-green p-6 bg-elevated-black/50 flex-1 flex flex-col transition-all duration-500 ${visibleItems.includes('picture') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
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
            <div className={`border border-comment-green p-6 bg-elevated-black/50 transition-all duration-500 ${visibleItems.includes('bio') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-lime-terminal font-fira text-xl mb-4">
                &gt; {t('about.aboutMe')}
              </h3>

              <div className="space-y-4 text-comment-green font-fira text-sm leading-relaxed">
                <p>
                  <span className="text-matrix-green">// </span>
                  {t('about.bio1')}
                </p>

                <p>
                  <span className="text-matrix-green">// </span>
                  {t('about.bio2')}
                </p>

                <p>
                  <span className="text-matrix-green">// </span>
                  {t('about.bio3')}
                </p>
              </div>
            </div>

            <div className={`border border-comment-green p-6 bg-elevated-black/50 transition-all duration-500 ${visibleItems.includes('skills') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-lime-terminal font-fira text-xl mb-4">
                &gt; {t('about.quickSkills')}
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
                  // {t('about.detailedSkills')}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`mt-12 text-center transition-all duration-500 ${visibleItems.includes('cta') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <button
            onClick={() => {
              const contact = document.getElementById("contact");
              if (contact) {
                contact.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="border-2 border-matrix-green text-matrix-green px-8 py-3 font-fira hover:bg-matrix-green hover:text-terminal-black transition-all duration-300"
          >
            &gt; {t('about.hireMe')}_
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
