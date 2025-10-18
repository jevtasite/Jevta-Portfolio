import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showName, setShowName] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const messages = [
    'Hello, World.',
    'Welcome to my website!',
    'Let\'s build something great!',
    'Explore my work below.',
  ];

  useEffect(() => {
    let timeout;
    const currentMessage = messages[messageIndex];

    // Variable typing speed - randomized for natural feel
    const getTypingSpeed = () => {
      if (isDeleting) return Math.random() * 50 + 30; // 30-80ms
      return Math.random() * 100 + 80; // 80-180ms
    };

    const pauseTime = isDeleting ? 1000 : 2500;

    if (!isDeleting && displayText === currentMessage) {
      // Finished typing, show name after first message
      if (messageIndex === 0 && !showName) {
        setTimeout(() => setShowName(true), 500);
      }
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      // Finished deleting, move to next message
      setIsDeleting(false);
      setMessageIndex((prev) => (prev + 1) % messages.length);
    } else {
      // Type or delete character with variable speed
      timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayText(currentMessage.slice(0, displayText.length - 1));
        } else {
          setDisplayText(currentMessage.slice(0, displayText.length + 1));
        }
      }, getTypingSpeed());
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, messageIndex, showName]);

  return (
    <section
      id="home"
      className="hero-section min-h-screen flex items-center justify-center relative z-10"
    >
      <div className="text-center space-y-8 px-4">
        {/* ASCII Art Logo */}
        <div className="w-full flex justify-center overflow-hidden">
          <pre className="text-matrix-green font-fira text-[0.45rem] sm:text-[0.6rem] md:text-sm lg:text-base leading-tight crt-effect whitespace-pre">
            {`
     ██╗███████╗██╗   ██╗████████╗ █████╗
     ██║██╔════╝██║   ██║╚══██╔══╝██╔══██╗
     ██║█████╗  ██║   ██║   ██║   ███████║
██   ██║██╔══╝  ╚██╗ ██╔╝   ██║   ██╔══██║
╚█████╔╝███████╗ ╚████╔╝    ██║   ██║  ██║
 ╚════╝ ╚══════╝  ╚═══╝     ╚═╝   ╚═╝  ╚═╝
          `}
          </pre>
        </div>

        {/* Typing Text */}
        <div className="space-y-4">
          <h2 className="text-lime-terminal font-fira text-2xl md:text-3xl">
            {displayText}
            <span className="cursor-blink">▋</span>
          </h2>

          {/* Name Reveal */}
          {showName && (
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-matrix-green font-fira text-3xl md:text-5xl font-bold">
                I'm Luka Stoiljković
              </h1>
              <p className="text-comment-green font-fira text-lg md:text-xl">
                &lt; Front-end Developer /&gt;
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        {showName && (
          <div className="mt-8 text-comment-green font-fira text-sm animate-fade-in">
            <p>Type <span className="text-lime-terminal">'help'</span> to explore</p>
            <p>or <span className="text-lime-terminal">'ls'</span> to see all sections</p>
          </div>
        )}

        {/* Social Links */}
        {showName && (
          <div className="flex justify-center space-x-6 mt-8 animate-fade-in">
            <a
              href="https://www.facebook.com/profile.php?id=61552420501147"
              target="_blank"
              rel="noopener noreferrer"
              className="text-matrix-green hover:text-lime-terminal transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://github.com/jevtasite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-matrix-green hover:text-lime-terminal transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jevta.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-matrix-green hover:text-lime-terminal transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
