import { useEffect, useRef } from 'react';
import useTerminalStore from '../../store/terminalStore';
import TerminalChrome from './TerminalChrome';
import MatrixRain from './MatrixRain';
import CommandLine from './CommandLine';
import BackToTop from '../BackToTop';
import FlappyBird from '../Games/FlappyBird';

const TerminalWindow = ({ children }) => {
  const contentRef = useRef(null);
  const consoleRef = useRef(null);
  const { output, gameActive, setGameActive, showConsole, setShowConsole, clearOutput } = useTerminalStore();

  // Auto-scroll console to bottom when new output is added
  useEffect(() => {
    if (consoleRef.current && output.length > 0) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="terminal-window min-h-screen relative">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Optional Scan Lines Effect */}
      <div className="scan-lines" />

      {/* Terminal Chrome */}
      <TerminalChrome />

      {/* Main Content Area */}
      <div
        ref={contentRef}
        className="terminal-content overflow-y-auto"
        style={{
          position: 'fixed',
          top: '40px',
          left: 0,
          right: 0,
          bottom: '0', // extends all the way down
          zIndex: 1,
          paddingBottom: '64px' // padding to prevent content from going under command line
        }}
      >
        {/* Page Content */}
        <div className="page-content">
          {children}
        </div>
      </div>

      {/* Terminal Console Panel (Toggleable) */}
      {showConsole && output.length > 0 && (
        <div
          className="fixed left-2 right-2 md:left-auto md:right-4 md:w-2/3 lg:w-1/2 max-w-3xl bg-terminal-black border-2 border-lime-terminal shadow-lg shadow-lime-terminal/20 animate-fade-in"
          style={{
            bottom: '72px',
            zIndex: 8888
          }}
        >
          {/* Console Header */}
          <div className="flex items-center justify-between bg-elevated-black border-b border-lime-terminal px-4 py-2">
            <div className="flex items-center space-x-2">
              <span className="text-lime-terminal font-fira text-sm sm:text-base">$ Terminal Output</span>
            </div>
            <button
              onClick={() => setShowConsole(false)}
              className="text-comment-green hover:text-error-red transition-colors font-fira text-sm sm:text-base"
              aria-label="Close terminal output"
            >
              [X]
            </button>
          </div>

          {/* Console Output */}
          <div
            ref={consoleRef}
            className="terminal-output p-4 space-y-2 overflow-y-auto"
            style={{ maxHeight: '400px' }}
          >
            {output.map((item, index) => (
              <div key={index} className="output-item">
                {/* Command */}
                {item.type === 'command' && (
                  <>
                    <div className="flex items-start space-x-2">
                      <span className="text-matrix-green font-fira text-sm sm:text-base">
                        user@jevta.site:~$
                      </span>
                      <span className="text-matrix-green font-fira text-sm sm:text-base">
                        {item.text}
                      </span>
                    </div>
                    {/* Result */}
                    {item.result && (
                      <div
                        className={`mt-1 font-fira text-sm sm:text-base whitespace-pre-wrap ${
                          item.result.type === 'error'
                            ? 'text-error-red'
                            : item.result.type === 'info'
                            ? 'text-comment-green'
                            : 'text-lime-terminal'
                        }`}
                      >
                        {item.result.content}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Console Toggle Button (when hidden) */}
      {!showConsole && output.length > 0 && (
        <div
          className="fixed left-4 bg-elevated-black border-2 border-lime-terminal font-fira text-sm sm:text-base transition-all flex items-center"
          style={{
            bottom: '72px',
            zIndex: 8888
          }}
        >
          <button
            onClick={() => setShowConsole(true)}
            className="text-lime-terminal px-4 py-2 hover:bg-lime-terminal hover:text-terminal-black transition-all flex items-center gap-2"
            aria-label="Show terminal"
          >
            <span>$ Terminal</span>
          </button>
          <button
            onClick={() => {
              clearOutput();
              setShowConsole(false);
            }}
            className="text-comment-green hover:text-error-red hover:bg-error-red/10 px-3 py-2 border-l-2 border-lime-terminal transition-all"
            aria-label="Close and clear terminal"
          >
            [X]
          </button>
        </div>
      )}

      {/* Command Line (Fixed at Bottom) */}
      <CommandLine />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Game Overlay */}
      {gameActive && (
        <FlappyBird
          onClose={() => {
            setGameActive(false);
          }}
        />
      )}
    </div>
  );
};

export default TerminalWindow;
