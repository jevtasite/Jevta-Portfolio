import { useState, useEffect } from 'react';

const TerminalLoader = ({ onLoadingComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const bootLines = [
    { text: '> Initializing portfolio_v2.0...', hasProgress: false },
    { text: '> Loading modules...', hasProgress: true, progressKey: 1 },
    { text: '> Rendering components...', hasProgress: true, progressKey: 2 },
    { text: '> System ready. Welcome!', hasProgress: false },
  ];

  useEffect(() => {
    if (currentLine >= bootLines.length) {
      // All lines complete, start fade out
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsComplete(true);
          if (onLoadingComplete) {
            onLoadingComplete();
          }
        }, 500); // Wait for fade out animation
      }, 300); // Pause before fading
      return;
    }

    const currentBootLine = bootLines[currentLine];
    const fullText = currentBootLine.text;

    // Typing animation
    if (typedText.length < fullText.length) {
      const typingSpeed = 30 + Math.random() * 20; // 30-50ms per character
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // Line fully typed, handle progress bar if needed
    if (currentBootLine.hasProgress) {
      const progressKey = currentBootLine.progressKey;
      const currentProgress = progressKey === 1 ? progress1 : progress2;

      if (currentProgress < 100) {
        const progressSpeed = 15; // ms per increment
        const timeout = setTimeout(() => {
          const newProgress = Math.min(currentProgress + 5, 100);
          if (progressKey === 1) {
            setProgress1(newProgress);
          } else {
            setProgress2(newProgress);
          }
        }, progressSpeed);
        return () => clearTimeout(timeout);
      }
    }

    // Move to next line
    const timeout = setTimeout(() => {
      setCurrentLine(currentLine + 1);
      setTypedText('');
    }, 200); // Pause between lines

    return () => clearTimeout(timeout);
  }, [currentLine, typedText, progress1, progress2, bootLines, onLoadingComplete]);

  if (isComplete) {
    return null;
  }

  const renderProgressBar = (progress) => {
    const totalBlocks = 12;
    const filledBlocks = Math.floor((progress / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;

    return (
      <span className="progress-bar-ascii">
        [
        <span className="progress-filled">{'█'.repeat(filledBlocks)}</span>
        <span className="progress-empty">{'·'.repeat(emptyBlocks)}</span>
        ] {progress}%
      </span>
    );
  };

  return (
    <div className={`terminal-loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="terminal-loader-screen">
        {/* CRT Scanlines */}
        <div className="crt-scanlines"></div>

        {/* Terminal Content */}
        <div className="terminal-loader-content">
          {bootLines.map((line, index) => {
            if (index < currentLine) {
              // Already completed lines
              return (
                <div key={index} className="boot-line completed">
                  {line.text}
                  {line.hasProgress && (
                    <span className="ml-2">
                      {renderProgressBar(100)}
                    </span>
                  )}
                </div>
              );
            } else if (index === currentLine) {
              // Currently typing line
              return (
                <div key={index} className="boot-line active">
                  {typedText}
                  {typedText.length === line.text.length && line.hasProgress && (
                    <span className="ml-2">
                      {renderProgressBar(line.progressKey === 1 ? progress1 : progress2)}
                    </span>
                  )}
                  {typedText.length < line.text.length && (
                    <span className="typing-cursor-loader">_</span>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default TerminalLoader;
