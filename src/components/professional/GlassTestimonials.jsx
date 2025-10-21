import { useEffect, useState } from "react";
import { testimonials } from "../../data/testimonials";
import "../../styles/professional.css";

const GlassTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const renderProgressBar = (rating) => {
    const filled = Math.floor((rating / 5) * 20);
    const empty = 20 - filled;
    return "█".repeat(filled) + "░".repeat(empty);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 350); // Match windowClose duration
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setIsTransitioning(false);
    }, 350); // Match windowClose duration
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="professional-section"
      style={{ background: "rgba(0,0,0,0.1)" }}
    >
      <div className="professional-container">
        <div className="scroll-reveal">
          <h2 className="section-title">
            Client <span className="gradient-text-green">Reviews</span>
          </h2>
          <p className="section-subtitle">
            Review history from completed projects
          </p>
        </div>

        {/* Terminal Review Card Carousel */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "3rem",
          }}
        >
          <div style={{ maxWidth: "56rem", width: "100%", position: "relative", overflow: "hidden" }}>
            <div
              className={`terminal-review-card ${isTransitioning ? 'card-exit' : 'card-enter'}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              key={currentIndex}
            >
              {/* Terminal Window Header */}
              <div className="terminal-card-header">
                <div className="terminal-window-controls">
                  <span className="window-control close"></span>
                  <span className="window-control minimize"></span>
                  <span className="window-control maximize"></span>
                </div>
                <div className="terminal-card-title">
                  review_{currentTestimonial.id}.log
                </div>
              </div>

              {/* Terminal Content */}
              <div className="terminal-card-content">
                {/* Review Output */}
                <div className="terminal-output">
                  {/* Separator */}

                  {/* Client Name Only */}
                  <div className="terminal-output-line">
                    <span className="terminal-field">Client:</span>
                    <span className="terminal-field-value">
                      {currentTestimonial.name}
                    </span>
                  </div>

                  {/* Separator */}
                  <div className="terminal-output-line terminal-divider">
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  </div>

                  {/* Feedback Section */}
                  <div className="terminal-output-line">
                    <span className="terminal-section-title">FEEDBACK:</span>
                  </div>
                  <div className="terminal-review-text">
                    "{currentTestimonial.quote}"
                  </div>

                  {/* Separator */}
                  <div className="terminal-output-line terminal-divider">
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  </div>

                  {/* Rating */}
                  <div className="terminal-output-line">
                    <span className="terminal-field">Rating:</span>
                    <span className="terminal-rating-bar">
                      [{renderProgressBar(currentTestimonial.rating)}]
                    </span>
                    <span className="terminal-rating-score">
                      {currentTestimonial.rating.toFixed(1)}/5.0
                    </span>
                  </div>

                  {/* Status */}
                  <div className="terminal-output-line">
                    <span className="terminal-field">Status:</span>
                    <span className="terminal-status">PROJECT_COMPLETED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="terminal-carousel-nav">
              <button
                onClick={goToPrev}
                className="carousel-nav-btn"
                aria-label="Previous review"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="carousel-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`carousel-dot ${
                      index === currentIndex ? "active" : ""
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="carousel-nav-btn"
                aria-label="Next review"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Pause indicator */}
            {isPaused && (
              <div className="carousel-pause-indicator">
                <span
                  className="text-xs"
                  style={{ color: "var(--comment-green)" }}
                >
                  Paused - Hover out to resume
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassTestimonials;
