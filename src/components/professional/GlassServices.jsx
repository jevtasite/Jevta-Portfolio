import { useEffect, useState, useRef } from 'react';
import { services } from '../../data/services';
import '../../styles/professional.css';

const GlassServices = () => {
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

  const iconMap = {
    code: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    palette: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    lightbulb: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  };

  return (
    <section id="services" ref={sectionRef} className="professional-section">
      <div className="professional-container">
        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            My <span className="gradient-text-pink">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`glass-card text-center scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 gradient-text-cyan">
                {iconMap[service.icon]}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 gradient-text-cyan">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                {service.description}
              </p>

              {/* Features */}
              <div className="text-left mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="text-left">
                <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`glass-card text-center max-w-3xl mx-auto mt-12 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <h3 className="text-3xl font-bold mb-4 gradient-text">
            Let's Work Together
          </h3>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind? Let's discuss how we can work together to create something amazing.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="glass-btn-primary"
          >
            <span>Get In Touch</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlassServices;
