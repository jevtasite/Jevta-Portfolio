import React from 'react';

const RetroTerminalBackground = () => {
  return (
    <div className="retro-terminal-background">
      {/* CRT Scanlines Effect */}
      <div className="crt-scanlines"></div>

      {/* Static Noise Overlay */}
      <div className="static-noise"></div>

      {/* Vignette Effect */}
      <div className="crt-vignette"></div>

      {/* Subtle Screen Flicker */}
      <div className="crt-flicker"></div>
    </div>
  );
};

export default RetroTerminalBackground;
