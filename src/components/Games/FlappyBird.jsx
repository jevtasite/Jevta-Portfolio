import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GAME_CONFIG,
  createBird,
  applyGravity,
  applyFlapForce,
  updateBirdRotation,
  createPipe,
  movePipes,
  removeOffScreenPipes,
  checkBirdPipeCollision,
  checkBirdBoundaryCollision,
  checkPipePassed,
  markPipePassed,
  getHighScore,
  saveHighScore,
  shouldSpawnPipe,
  getCurrentPipeSpeed,
} from '../../utils/flappyBirdGame';

const FlappyBird = ({ onClose }) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Determine canvas size based on screen
  const [canvasSize] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return {
        width: GAME_CONFIG.MOBILE_CANVAS_WIDTH,
        height: GAME_CONFIG.MOBILE_CANVAS_HEIGHT,
      };
    }
    return {
      width: GAME_CONFIG.CANVAS_WIDTH,
      height: GAME_CONFIG.CANVAS_HEIGHT,
    };
  });

  // Game state
  const [gameState, setGameState] = useState('ready'); // 'ready', 'playing', 'gameOver'
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => getHighScore());
  const [isNewHighScore, setIsNewHighScore] = useState(false);

  // Game objects (using refs for smooth 60 FPS updates)
  const birdRef = useRef(createBird(canvasSize.height));
  const pipesRef = useRef([]);

  // Start game
  const startGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setIsNewHighScore(false);
    birdRef.current = createBird(canvasSize.height);
    // Give the bird an initial upward velocity when starting
    birdRef.current = applyFlapForce(birdRef.current);
    pipesRef.current = [];
  }, [canvasSize.height]);

  // Handle flap (spacebar, click, tap)
  const handleFlap = useCallback(() => {
    if (gameState === 'playing') {
      birdRef.current = applyFlapForce(birdRef.current);
    } else if (gameState === 'ready' || gameState === 'gameOver') {
      // startGame() already applies initial flap, so just start
      startGame();
    }
  }, [gameState, startGame]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlap();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleFlap, onClose]);

  // Canvas click/tap handler
  const handleCanvasClick = useCallback(() => {
    handleFlap();
  }, [handleFlap]);

  // Touch handler for instant mobile response (no 300ms delay)
  const handleTouchStart = useCallback((e) => {
    e.preventDefault(); // Prevent default touch behaviors (scroll, zoom)
    handleFlap();

    // Optional: Haptic feedback for mobile devices
    if ('vibrate' in navigator) {
      navigator.vibrate(50); // Short 50ms vibration
    }
  }, [handleFlap]);

  // Pointer event handler for unified mouse/touch/pen support
  const handlePointerDown = useCallback((e) => {
    e.preventDefault(); // Prevent default behaviors

    // Only handle primary pointer (avoid multi-touch issues)
    if (e.isPrimary) {
      handleFlap();

      // Haptic feedback for touch/pen
      if (e.pointerType === 'touch' || e.pointerType === 'pen') {
        if ('vibrate' in navigator) {
          navigator.vibrate(50);
        }
      }
    }
  }, [handleFlap]);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = '#0a0a0a'; // terminal-black
      ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);

      // Only update physics and pipes when playing
      if (gameState === 'playing') {
        // Update bird physics
        birdRef.current = applyGravity(birdRef.current);
        birdRef.current = updateBirdRotation(birdRef.current);

        // Calculate current speed based on score (progressive difficulty)
        const currentSpeed = getCurrentPipeSpeed(score);

        // Update pipes with progressive speed
        pipesRef.current = movePipes(pipesRef.current, currentSpeed);
        pipesRef.current = removeOffScreenPipes(pipesRef.current);

        // Spawn new pipes
        if (shouldSpawnPipe(pipesRef.current, canvasSize.width)) {
          pipesRef.current.push(createPipe(canvasSize.width, canvasSize.height));
        }

        // Check collisions
        let collision = checkBirdBoundaryCollision(birdRef.current, canvasSize.height);

        if (!collision) {
          for (const pipe of pipesRef.current) {
            if (checkBirdPipeCollision(birdRef.current, pipe)) {
              collision = true;
              break;
            }
          }
        }

        if (collision) {
          setGameState('gameOver');
          const isNewHigh = saveHighScore(score);
          if (isNewHigh) {
            setHighScore(score);
            setIsNewHighScore(true);
          }
        }

        // Check for passed pipes (scoring)
        pipesRef.current.forEach((pipe, index) => {
          if (checkPipePassed(birdRef.current, pipe)) {
            pipesRef.current = markPipePassed(pipesRef.current, index);
            setScore(prev => prev + 1);
          }
        });
      }

      // Draw pipes
      ctx.fillStyle = '#39ff14'; // lime-terminal
      pipesRef.current.forEach(pipe => {
        // Top pipe
        ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight);
        // Bottom pipe
        ctx.fillRect(
          pipe.x,
          pipe.bottomY,
          pipe.width,
          canvasSize.height - pipe.bottomY
        );

        // Pipe borders
        ctx.strokeStyle = '#39ff14';
        ctx.lineWidth = 2;
        ctx.strokeRect(pipe.x, 0, pipe.width, pipe.topHeight);
        ctx.strokeRect(pipe.x, pipe.bottomY, pipe.width, canvasSize.height - pipe.bottomY);
      });

      // Draw bird (ASCII art style)
      const bird = birdRef.current;

      ctx.save();
      ctx.translate(bird.x + bird.width / 2, bird.y + bird.height / 2);
      ctx.rotate((bird.rotation * Math.PI) / 180);
      ctx.translate(-(bird.x + bird.width / 2), -(bird.y + bird.height / 2));

      // Bird body
      ctx.fillStyle = '#39ff14'; // lime-terminal
      ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

      // Bird border
      ctx.strokeStyle = '#0dff00'; // matrix-green
      ctx.lineWidth = 2;
      ctx.strokeRect(bird.x, bird.y, bird.width, bird.height);

      // Bird "eye" (ASCII-ish)
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(bird.x + 24, bird.y + 8, 6, 6);

      ctx.restore();

      // Draw score (on canvas for smooth rendering)
      ctx.fillStyle = '#39ff14';
      ctx.font = 'bold 36px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(score, canvasSize.width / 2, 60);

      // Continue loop
      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    // Start game loop
    gameLoop();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameState, score, canvasSize.width, canvasSize.height]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-terminal-black/95 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 overflow-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-2xl mx-auto my-auto">
        {/* Header */}
        <div className="bg-elevated-black border-2 border-lime-terminal p-4 mb-2 flex justify-between items-center">
          <div className="font-fira text-lime-terminal">
            <span className="text-sm sm:text-base">$ flappy_bird</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="font-fira text-xs sm:text-sm">
              <span className="text-comment-green">High: </span>
              <span className="text-matrix-green">{highScore}</span>
            </div>
            <button
              onClick={onClose}
              className="text-comment-green hover:text-error-red transition-colors font-fira text-sm"
              aria-label="Close game"
            >
              [X]
            </button>
          </div>
        </div>

        {/* Game Canvas */}
        <div className="bg-elevated-black border-2 border-lime-terminal p-4 relative flex items-center justify-center">
          <canvas
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
            onPointerDown={handlePointerDown}
            onTouchStart={handleTouchStart}
            className="border border-comment-green/30 cursor-pointer touch-none"
            style={{
              imageRendering: 'pixelated',
              touchAction: 'none', // Prevent all default touch behaviors
              WebkitTouchCallout: 'none', // Prevent iOS callout
              WebkitUserSelect: 'none', // Prevent text selection
              userSelect: 'none'
            }}
          />

          {/* Overlays */}
          <AnimatePresence>
            {/* Ready Screen */}
            {gameState === 'ready' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-terminal-black/90 backdrop-blur-sm flex items-center justify-center m-4"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
              >
                <div className="text-center font-fira p-6">
                  <h2 className="text-lime-terminal text-3xl sm:text-4xl mb-4 font-bold">
                    FLAPPY BIRD
                  </h2>
                  <div className="text-comment-green text-sm space-y-2 mb-6">
                    <p className="text-matrix-green text-lg mb-4">
                      Navigate through the pipes!
                    </p>
                    <p>Press <span className="text-lime-terminal">SPACE</span> or <span className="text-lime-terminal">CLICK</span> to flap</p>
                    <p className="hidden sm:block">Press <span className="text-lime-terminal">ESC</span> to exit</p>
                    <p className="mt-4 text-lime-terminal">Press SPACE or CLICK to start</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Game Over Screen */}
            {gameState === 'gameOver' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-terminal-black/90 backdrop-blur-sm flex items-center justify-center m-4"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
              >
                <div className="text-center font-fira p-6">
                  <h2 className="text-error-red text-3xl sm:text-4xl mb-4 font-bold">
                    GAME OVER
                  </h2>
                  {isNewHighScore && (
                    <p className="text-lime-terminal text-xl mb-2 animate-pulse">
                      NEW HIGH SCORE!
                    </p>
                  )}
                  <p className="text-comment-green text-lg sm:text-xl mb-6">
                    Score: <span className="text-lime-terminal text-2xl">{score}</span>
                  </p>
                  <button
                    onClick={startGame}
                    className="bg-lime-terminal text-terminal-black px-6 py-3 font-fira text-sm hover:bg-matrix-green transition-colors"
                  >
                    &gt; PLAY_AGAIN_
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls Hint */}
        <div className="mt-4">
          <div className="bg-elevated-black border border-comment-green/30 p-3 text-center font-fira text-xs text-comment-green">
            <span className="hidden sm:inline">
              <span className="text-lime-terminal">SPACE</span> or <span className="text-lime-terminal">CLICK</span> to flap |{' '}
              <span className="text-lime-terminal">ESC</span> to exit
            </span>
            <span className="sm:hidden text-lime-terminal">
              TAP ANYWHERE TO FLAP
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FlappyBird;
