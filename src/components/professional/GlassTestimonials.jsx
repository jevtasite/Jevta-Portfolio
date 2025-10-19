import { useEffect, useState, useRef } from 'react';
import { testimonials } from '../../data/testimonials';
import '../../styles/professional.css';

const GlassTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className="star-rating">
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="professional-section"
      style={{ background: 'rgba(0,0,0,0.1)' }}
    >
      <div className="professional-container">
        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What clients say about working with me
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className={`max-w-4xl mx-auto scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="glass-card testimonial-card">
            {/* Quote */}
            <div className="testimonial-quote">
              {currentTestimonial.quote}
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {renderStars(currentTestimonial.rating)}
            </div>

            {/* Client Info */}
            <div className="text-center">
              {/* Avatar Placeholder */}
              <div className="flex justify-center mb-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: 'var(--glass-bg)',
                    border: '2px solid var(--matrix-green)',
                    color: 'var(--matrix-green)',
                    boxShadow: 'var(--green-glow)'
                  }}
                >
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              <h3 className="text-xl font-bold gradient-text-lime mb-1">
                {currentTestimonial.name}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {currentTestimonial.role} at {currentTestimonial.company}
              </p>
              <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                Project: {currentTestimonial.project}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={goToPrev}
                className="glass-btn"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-lime-terminal'
                        : 'bg-comment-green hover:bg-matrix-green'
                    }`}
                    style={{
                      boxShadow: index === currentIndex ? '0 0 8px var(--lime-terminal)' : 'none'
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="glass-btn"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid (Optional - Shows all at once) */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`glass scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{
                padding: '1.5rem',
                transitionDelay: `${index * 0.1 + 0.4}s`,
                cursor: 'pointer'
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--matrix-green)',
                    color: 'var(--matrix-green)'
                  }}
                >
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="font-semibold" style={{ color: 'var(--matrix-green)' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {testimonial.role}
                  </div>
                </div>
                <div className="text-xs">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p
                className="text-sm leading-relaxed line-clamp-3"
                style={{ color: 'var(--text-secondary)' }}
              >
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlassTestimonials;
