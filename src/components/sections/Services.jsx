import { useEffect, useState } from 'react';

const Services = () => {
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

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const services = [
    {
      icon: `
  ╔══════════╗
  ║ <HTML/>  ║
  ║  {CSS}   ║
  ║   JS     ║
  ╚══════════╝`,
      title: 'Web Development',
      description:
        'Building modern, responsive websites with clean code and best practices. From landing pages to complex web applications, I create solutions that are fast, accessible, and maintainable.',
      features: [
        'Responsive & Mobile-First Design',
        'Performance Optimization',
        'SEO-Friendly Architecture',
        'Cross-Browser Compatibility',
        'Modern JavaScript (ES6+)',
      ],
    },
    {
      icon: `
  ╔══════════╗
  ║  ✦ ✧ ✦  ║
  ║ BRAND ID ║
  ║  ✧ ✦ ✧  ║
  ╚══════════╝`,
      title: 'UI/UX Design',
      description:
        'Creating intuitive and visually appealing user interfaces that enhance user experience. Focus on usability, accessibility, and modern design principles to deliver engaging digital experiences.',
      features: [
        'User Interface Design',
        'Interactive Prototypes',
        'Design Systems',
        'Accessibility (WCAG)',
        'Responsive Layouts',
      ],
    },
    {
      icon: `
  ╔══════════╗
  ║    ?     ║
  ║  → ✓ ←   ║
  ║   IDEA   ║
  ╚══════════╝`,
      title: 'Consultancy',
      description:
        'Providing expert advice on web development projects, technical decisions, and digital strategy. Help you choose the right technologies and approaches for your specific needs.',
      features: [
        'Technology Stack Selection',
        'Code Review & Optimization',
        'Performance Audits',
        'Best Practices Implementation',
        'Project Planning & Strategy',
      ],
    },
  ];

  return (
    <section
      id="services"
      className="services-section py-20 px-4 relative z-10 bg-elevated-black/20"
    >
      <div className="max-w-terminal mx-auto">
        {/* Terminal Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-matrix-green font-fira text-sm mb-2">
            <span>$</span>
            <span>cat services.md</span>
          </div>
          <div className="border-l-2 border-comment-green pl-4">
            <h2 className="text-lime-terminal font-fira text-3xl md:text-4xl font-bold mb-4">
              Services Offered
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid md:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card border border-comment-green bg-elevated-black/50 hover:border-lime-terminal transition-all duration-300 group"
              style={{
                animationDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* ASCII Icon */}
              <div className="p-6 border-b border-comment-green/30">
                <pre className="text-matrix-green font-fira text-xs leading-tight group-hover:text-lime-terminal transition-colors">
                  {service.icon}
                </pre>
              </div>

              {/* Service Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lime-terminal font-fira text-xl font-bold mb-3">
                  # {service.title}
                </h3>

                {/* Description */}
                <p className="text-comment-green font-fira text-sm leading-relaxed mb-4 border-l-2 border-comment-green/30 pl-4">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  <div className="text-comment-green font-fira text-xs mb-2">
                    ## Features:
                  </div>
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-2 font-fira text-xs"
                    >
                      <span className="text-matrix-green">-</span>
                      <span className="text-comment-green">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 border border-lime-terminal bg-elevated-black/50 py-16 px-8 flex flex-col items-center justify-center">
          <h3 className="text-lime-terminal font-fira text-2xl font-bold mb-6 text-center">
            Let's Work Together
          </h3>
          <p className="text-comment-green font-fira text-base mb-8 max-w-3xl text-center leading-relaxed">
            Have a project in mind? I'm available for freelance work and collaborations.
            Let's create something amazing together!
          </p>
          <button
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) {
                contact.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="border-2 border-lime-terminal text-lime-terminal px-8 py-3 font-fira hover:bg-lime-terminal hover:text-terminal-black transition-all duration-300"
          >
            &gt; Get In Touch_
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
