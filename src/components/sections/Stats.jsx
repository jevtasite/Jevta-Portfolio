import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [countingComplete, setCountingComplete] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    clients: 0,
    projects: 0,
    hours: 0,
  });

  const finalStats = {
    experience: 2,
    clients: 5,
    projects: 10,
    hours: 2800,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;

    // Easing function for smooth animation (easeOutExpo)
    const easeOutExpo = (t) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const timer = setInterval(() => {
      step++;
      const linearProgress = step / steps;
      const easedProgress = easeOutExpo(linearProgress);

      setCounts({
        experience: Math.floor(finalStats.experience * easedProgress),
        clients: Math.floor(finalStats.clients * easedProgress),
        projects: Math.floor(finalStats.projects * easedProgress),
        hours: Math.floor(finalStats.hours * easedProgress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalStats);
        // Mark counting as complete with a slight delay
        setTimeout(() => setCountingComplete(true), 100);
      }
    }, interval);

    return () => clearInterval(timer);
  };

  const getStats = () => [
    {
      icon: '📅',
      ascii: `
 ╔════════╗
 ║  YYYY  ║
 ║   MM   ║
 ║   DD   ║
 ╚════════╝`,
      label: t('stats.yearsExp'),
      value: counts.experience,
      suffix: '+',
      color: 'text-matrix-green',
    },
    {
      icon: '👥',
      ascii: `
 ╔════════╗
 ║  ⚉ ⚉  ║
 ║   ⚉    ║
 ║  ⚉ ⚉  ║
 ╚════════╝`,
      label: t('stats.clients'),
      value: counts.clients,
      suffix: '+',
      color: 'text-lime-terminal',
    },
    {
      icon: '✓',
      ascii: `
 ╔════════╗
 ║   ✓✓   ║
 ║  ✓✓✓   ║
 ║   ✓    ║
 ╚════════╝`,
      label: t('stats.projects'),
      value: counts.projects,
      suffix: '+',
      color: 'text-cyber-magenta',
    },
    {
      icon: '⏰',
      ascii: `
 ╔════════╗
 ║  ⟳ ⌚  ║
 ║   ═    ║
 ║  CODE  ║
 ╚════════╝`,
      label: t('stats.hours'),
      value: counts.hours,
      suffix: '+',
      color: 'text-lime-terminal',
    },
  ];

  return (
    <section
      id="stats"
      className="stats-section py-20 px-4 relative z-10"
    >
      <div className="max-w-terminal mx-auto">
        {/* Terminal Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-matrix-green font-fira text-sm mb-2">
            <span>$</span>
            <span>top</span>
          </div>
          <div className="border-l-2 border-comment-green pl-4">
            <h2 className="text-lime-terminal font-fira text-3xl md:text-4xl font-bold mb-4">
              {t('stats.title')}
            </h2>
          </div>
        </div>

        {/* System Monitor Style Display */}
        <div className={`mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="border border-comment-green bg-elevated-black/50 p-4">
            <div className="font-fira text-xs space-y-1">
              <div className="text-comment-green">
                {t('stats.status')}: <span className="text-lime-terminal flex items-center gap-2 inline-flex">
                  <span className="w-2 h-2 bg-lime-terminal rounded-full animate-pulse" />
                  {t('stats.online')}
                </span>
              </div>
              <div className="text-comment-green">
                {t('stats.responseTime')}: <span className="text-matrix-green">{t('stats.lessThan24')}</span>
              </div>
              <div className="text-comment-green">
                {t('contact.location')}: <span className="text-matrix-green">{t('contact.locationValue')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Counting Status */}
        {isVisible && !countingComplete && (
          <div className="mb-6 border border-matrix-green/50 bg-elevated-black/50 p-3">
            <div className="font-fira text-xs text-matrix-green animate-pulse flex items-center space-x-2">
              <span className="animate-spin">⟳</span>
              <span>&gt; Computing statistics...</span>
            </div>
          </div>
        )}

        {countingComplete && (
          <div className="mb-6 border border-lime-terminal bg-elevated-black/50 p-3 animate-fade-in">
            <div className="font-fira text-xs text-lime-terminal flex items-center space-x-2">
              <span>✓</span>
              <span>&gt; Statistics loaded successfully!</span>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {getStats().map((stat, index) => (
            <div
              key={index}
              className="stat-card border border-comment-green bg-elevated-black/50 hover:border-lime-terminal transition-all duration-300 group"
              style={{
                animationDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* ASCII Icon */}
              <div className="p-4 border-b border-comment-green/30">
                <pre className="ascii-art text-matrix-green font-fira text-xs leading-tight text-center group-hover:text-lime-terminal transition-colors">
                  {stat.ascii}
                </pre>
              </div>

              {/* Stat Content */}
              <div className="p-6 text-center">
                {/* Value */}
                <div
                  className={`${stat.color} font-fira text-5xl font-bold mb-2 transition-all duration-300 ${
                    isVisible && stat.value < (finalStats[Object.keys(finalStats)[index]] || 0)
                      ? 'scale-110 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]'
                      : 'scale-100'
                  }`}
                  style={{
                    textShadow: isVisible && stat.value < (finalStats[Object.keys(finalStats)[index]] || 0)
                      ? '0 0 20px rgba(57, 255, 20, 0.3)'
                      : 'none'
                  }}
                >
                  {stat.value}
                  <span className="text-3xl">{stat.suffix}</span>
                </div>

                {/* Label */}
                <div className="text-comment-green font-fira text-sm">
                  {stat.label}
                </div>

                {/* Counter indicator */}
                {isVisible && stat.value < (finalStats[Object.keys(finalStats)[index]] || 0) && (
                  <div className="mt-2">
                    <div className="text-matrix-green font-fira text-xs animate-pulse mb-1">
                      &gt; counting...
                    </div>
                    <div className="w-full bg-terminal-black border border-matrix-green/30 h-1 overflow-hidden">
                      <div
                        className="h-full bg-matrix-green transition-all duration-100"
                        style={{
                          width: `${(stat.value / (finalStats[Object.keys(finalStats)[index]] || 1)) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Tech Stack */}
          <div className="border border-comment-green bg-elevated-black/50 p-6">
            <h3 className="text-lime-terminal font-fira text-lg mb-4">
              {t('stats.activeProjects')}
            </h3>
            <div className="space-y-2 font-fira text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-matrix-green">▸</span>
                <span className="text-comment-green">HTML5, CSS3, JavaScript ES6+</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-matrix-green">▸</span>
                <span className="text-comment-green">React, Tailwind CSS</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-matrix-green">▸</span>
                <span className="text-comment-green">Git, Vite, VSCode</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-matrix-green">▸</span>
                <span className="text-comment-green">Responsive & Mobile-First Design</span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="border border-comment-green bg-elevated-black/50 p-6">
            <h3 className="text-lime-terminal font-fira text-lg mb-4">
              {t('stats.availability')}
            </h3>
            <div className="space-y-2 font-fira text-sm">
              <div className="flex justify-between text-comment-green">
                <span>{t('stats.status')}:</span>
                <span className="text-lime-terminal flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-terminal rounded-full animate-pulse" />
                  {t('stats.online')}
                </span>
              </div>
              <div className="flex justify-between text-comment-green">
                <span>{t('stats.responseTime')}:</span>
                <span className="text-matrix-green">{t('stats.lessThan24')}</span>
              </div>
              <div className="flex justify-between text-comment-green">
                <span>{t('contact.location')}:</span>
                <span className="text-matrix-green">{t('contact.locationValue')}</span>
              </div>
              <div className="flex justify-between text-comment-green">
                <span>Work Type:</span>
                <span className="text-matrix-green">Freelance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
