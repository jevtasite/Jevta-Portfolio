import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProfessionalPage from './pages/ProfessionalPage';
import TerminalPage from './pages/TerminalPage';
import TerminalLoader from './components/professional/TerminalLoader';

function AppContent() {
  const location = useLocation();
  const isProfessionalPage = location.pathname === '/';

  const [isLoading, setIsLoading] = useState(isProfessionalPage);
  const [showContent, setShowContent] = useState(!isProfessionalPage);

  // Handle initial page load with loader
  useEffect(() => {
    // Only show loader on professional page (root path) on initial load
    if (isProfessionalPage && document.readyState !== 'complete') {
      // Ensure minimum loading time for boot sequence
      const minLoadingTime = 2200; // 2.2 seconds
      const startTime = Date.now();

      const handleLoad = () => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        setTimeout(() => {
          setIsLoading(false);
          // Small delay then show content with fade-in
          setTimeout(() => {
            setShowContent(true);
          }, 100);
        }, remainingTime);
      };

      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    } else {
      // Page already loaded or terminal page - show immediately with fade
      setIsLoading(false);
      setShowContent(true);
    }
  }, []); // Only run on initial mount

  // Handle route changes after initial load
  useEffect(() => {
    if (!isLoading) {
      // When switching routes, briefly hide content then show with fade
      setShowContent(false);

      // Use requestAnimationFrame to ensure state change is processed
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShowContent(true);
        });
      });
    }
  }, [location.pathname, isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {isLoading && isProfessionalPage && <TerminalLoader onLoadingComplete={handleLoadingComplete} />}
      <div className={isProfessionalPage ? `app-content ${showContent ? 'content-visible' : 'content-hidden'}` : ''}>
        <Routes>
          <Route path="/" element={<ProfessionalPage />} />
          <Route path="/terminal" element={<TerminalPage />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
