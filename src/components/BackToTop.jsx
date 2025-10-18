import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const terminalContent = document.querySelector('.terminal-content');
    if (!terminalContent) return;

    const handleScroll = () => {
      // Show button when scrolled past hero section (roughly 100vh)
      const scrollPosition = terminalContent.scrollTop;
      setIsVisible(scrollPosition > window.innerHeight);
    };

    terminalContent.addEventListener('scroll', handleScroll);

    return () => {
      terminalContent.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const terminalContent = document.querySelector('.terminal-content');
    if (terminalContent) {
      terminalContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-4 bg-elevated-black border-2 border-lime-terminal text-lime-terminal px-6 py-3 font-fira text-sm hover:bg-lime-terminal hover:text-terminal-black transition-all flex items-center gap-2 group cursor-pointer shadow-lg shadow-lime-terminal/20 animate-fade-in"
      style={{
        bottom: '72px',
        zIndex: 8888
      }}
      aria-label="Back to top"
      type="button"
    >
      <span>$ cd ~</span>
      <svg
        className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
