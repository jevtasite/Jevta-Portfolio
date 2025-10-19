import { useEffect, useRef } from 'react';

const MouseTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.life = 100;
        this.maxLife = 100;
        this.char = this.getRandomChar();
      }

      getRandomChar() {
        const chars = ['0', '1', '$', '>', '_', '.', '*', '#'];
        return chars[Math.floor(Math.random() * chars.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.size *= 0.97;
      }

      draw(context) {
        const opacity = this.life / this.maxLife;

        // Draw glow
        context.shadowBlur = 10;
        context.shadowColor = `rgba(57, 255, 20, ${opacity * 0.5})`;

        // Draw particle as text character
        context.fillStyle = `rgba(57, 255, 20, ${opacity})`;
        context.font = `${this.size * 4}px "Fira Code", monospace`;
        context.fillText(this.char, this.x, this.y);

        // Reset shadow
        context.shadowBlur = 0;
      }

      isDead() {
        return this.life <= 0;
      }
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Create particles at mouse position
      for (let i = 0; i < 2; i++) {
        particles.current.push(new Particle(e.clientX, e.clientY));
      }

      // Limit particle count
      if (particles.current.length > 100) {
        particles.current = particles.current.slice(-100);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.update();
        particle.draw(ctx);
        return !particle.isDead();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        mixBlendMode: 'screen',
        width: '100vw',
        height: '100vh',
        maxWidth: '100%'
      }}
    />
  );
};

export default MouseTrail;
