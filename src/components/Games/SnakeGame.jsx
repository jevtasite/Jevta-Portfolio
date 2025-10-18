import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DIRECTIONS,
  createInitialSnake,
  generateFood,
  moveSnake,
  checkWallCollision,
  checkSelfCollision,
  checkFoodCollision,
  getGameSpeed,
  calculateScore,
  isValidDirectionChange,
  getHighScore,
  saveHighScore,
} from '../../utils/snakeGame';

const SnakeGame = ({ onClose }) => {
  // Determine grid size based on screen size
  const [gridSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640 ? 15 : 20; // Smaller grid for mobile
    }
    return 20;
  });

  // Game state
  const [gameState, setGameState] = useState('ready'); // 'ready', 'playing', 'paused', 'gameOver'
  const [snake, setSnake] = useState(() => createInitialSnake(gridSize));
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
  const [food, setFood] = useState(() => generateFood(gridSize, createInitialSnake(gridSize)));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => getHighScore());
  const [isNewHighScore, setIsNewHighScore] = useState(false);

  // Refs for game loop
  const gameLoopRef = useRef(null);
  const nextDirectionRef = useRef(DIRECTIONS.RIGHT);
  const lastProcessedDirectionRef = useRef(DIRECTIONS.RIGHT);

  // Start game
  const startGame = useCallback(() => {
    setGameState('playing');
    setSnake(createInitialSnake(gridSize));
    setDirection(DIRECTIONS.RIGHT);
    nextDirectionRef.current = DIRECTIONS.RIGHT;
    lastProcessedDirectionRef.current = DIRECTIONS.RIGHT;
    setFood(generateFood(gridSize, createInitialSnake(gridSize)));
    setScore(0);
    setIsNewHighScore(false);
  }, [gridSize]);

  // Pause/Resume game
  const togglePause = useCallback(() => {
    if (gameState === 'playing') {
      setGameState('paused');
    } else if (gameState === 'paused') {
      setGameState('playing');
    }
  }, [gameState]);

  // Handle direction change
  const changeDirection = useCallback((newDirection) => {
    if (gameState !== 'playing') return;

    // Only allow one direction change per tick
    // Check against the last processed direction to prevent turning into yourself
    if (isValidDirectionChange(lastProcessedDirectionRef.current, newDirection)) {
      nextDirectionRef.current = newDirection;
    }
  }, [gameState]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Prevent default scrolling behavior
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }

      // Direction controls
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        changeDirection(DIRECTIONS.UP);
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        changeDirection(DIRECTIONS.DOWN);
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        changeDirection(DIRECTIONS.LEFT);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        changeDirection(DIRECTIONS.RIGHT);
      }
      // Pause
      else if (e.key === ' ') {
        togglePause();
      }
      // Exit game
      else if (e.key === 'Escape') {
        onClose();
      }
      // Start game from ready/gameOver state
      else if (e.key === 'Enter' && (gameState === 'ready' || gameState === 'gameOver')) {
        startGame();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [changeDirection, togglePause, onClose, gameState, startGame]);

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
      return;
    }

    const speed = getGameSpeed(score);

    gameLoopRef.current = setInterval(() => {
      setSnake(prevSnake => {
        // Get the next direction for this tick
        const directionForThisTick = nextDirectionRef.current;

        // Update the last processed direction for next input validation
        lastProcessedDirectionRef.current = directionForThisTick;

        // Update the visual direction state
        setDirection(directionForThisTick);

        // Move snake
        const hasEatenFood = checkFoodCollision(prevSnake[0], food);
        const newSnake = moveSnake(prevSnake, directionForThisTick, hasEatenFood);
        const newHead = newSnake[0];

        // Check collisions
        if (checkWallCollision(newHead, gridSize) || checkSelfCollision(newSnake)) {
          setGameState('gameOver');

          // Check and save high score
          const currentScore = score + (hasEatenFood ? 10 : 0);
          const isNewHigh = saveHighScore(currentScore);
          if (isNewHigh) {
            setHighScore(currentScore);
            setIsNewHighScore(true);
          }

          return prevSnake;
        }

        // If food was eaten, generate new food and increase score
        if (hasEatenFood) {
          setFood(generateFood(gridSize, newSnake));
          setScore(prev => prev + 10);
        }

        return newSnake;
      });
    }, speed);

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameState, score, food, gridSize]);

  // Render grid cell
  const renderCell = (x, y) => {
    const isSnakeHead = snake[0].x === x && snake[0].y === y;
    const isSnakeBody = snake.slice(1).some(segment => segment.x === x && segment.y === y);
    const isFood = food.x === x && food.y === y;

    let cellContent = '';
    let cellColor = 'text-comment-green/20';

    if (isSnakeHead) {
      cellContent = '█';
      cellColor = 'text-lime-terminal';
    } else if (isSnakeBody) {
      cellContent = '▓';
      cellColor = 'text-matrix-green';
    } else if (isFood) {
      cellContent = '●';
      cellColor = 'text-error-red animate-pulse';
    }

    return (
      <div
        key={`${x}-${y}`}
        className={`flex items-center justify-center font-fira text-base sm:text-lg ${cellColor}`}
        style={{ width: '24px', height: '24px' }}
      >
        {cellContent}
      </div>
    );
  };

  // Render game grid
  const renderGrid = () => {
    const grid = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        grid.push(renderCell(x, y));
      }
    }
    return grid;
  };

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
      <div className="w-full max-w-3xl mx-auto my-auto">
        {/* Header */}
        <div className="bg-elevated-black border-2 border-lime-terminal p-4 mb-2 flex justify-between items-center">
          <div className="font-fira text-lime-terminal">
            <span className="text-sm sm:text-base">$ snake_game</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="font-fira text-xs sm:text-sm">
              <span className="text-comment-green">Score: </span>
              <span className="text-lime-terminal">{score}</span>
            </div>
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

        {/* Game Board */}
        <div className="bg-elevated-black border-2 border-lime-terminal p-4 sm:p-6 relative flex items-center justify-center">
          {/* Grid */}
          <div
            className="grid gap-0 border-2 border-comment-green/30 bg-terminal-black"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, 24px)`,
              gridTemplateRows: `repeat(${gridSize}, 24px)`,
            }}
          >
            {renderGrid()}
          </div>

          {/* Overlays */}
          <AnimatePresence>
            {/* Ready Screen */}
            {gameState === 'ready' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-terminal-black/90 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center font-fira p-6">
                  <h2 className="text-lime-terminal text-2xl sm:text-3xl mb-4">SNAKE</h2>
                  <div className="text-comment-green text-xs sm:text-sm space-y-2 mb-6">
                    <p>Use Arrow Keys or WASD to move</p>
                    <p className="text-matrix-green">Eat the <span className="text-error-red">●</span> to grow</p>
                    <p>Don't hit the walls or yourself!</p>
                    <p className="mt-4 text-lime-terminal">Press ENTER or tap START to begin</p>
                  </div>
                  <button
                    onClick={startGame}
                    className="bg-lime-terminal text-terminal-black px-6 py-2 font-fira hover:bg-matrix-green transition-colors"
                  >
                    &gt; START_
                  </button>
                </div>
              </motion.div>
            )}

            {/* Paused Screen */}
            {gameState === 'paused' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-terminal-black/80 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center font-fira">
                  <h2 className="text-lime-terminal text-2xl sm:text-3xl mb-4">PAUSED</h2>
                  <p className="text-comment-green text-sm">Press SPACE to resume</p>
                </div>
              </motion.div>
            )}

            {/* Game Over Screen */}
            {gameState === 'gameOver' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-terminal-black/90 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center font-fira p-6">
                  <h2 className="text-error-red text-2xl sm:text-3xl mb-4">GAME OVER</h2>
                  {isNewHighScore && (
                    <p className="text-lime-terminal text-lg mb-2 animate-pulse">
                      🎉 NEW HIGH SCORE! 🎉
                    </p>
                  )}
                  <p className="text-comment-green text-base sm:text-lg mb-6">
                    Final Score: <span className="text-lime-terminal">{score}</span>
                  </p>
                  <button
                    onClick={startGame}
                    className="bg-lime-terminal text-terminal-black px-6 py-2 font-fira hover:bg-matrix-green transition-colors"
                  >
                    &gt; PLAY_AGAIN_
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Controls */}
        <div className="mt-4 sm:hidden">
          <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
            <div></div>
            <button
              onClick={() => changeDirection(DIRECTIONS.UP)}
              className="bg-elevated-black border-2 border-lime-terminal text-lime-terminal p-4 font-fira text-xl active:bg-lime-terminal active:text-terminal-black transition-colors"
              aria-label="Move up"
            >
              ↑
            </button>
            <div></div>

            <button
              onClick={() => changeDirection(DIRECTIONS.LEFT)}
              className="bg-elevated-black border-2 border-lime-terminal text-lime-terminal p-4 font-fira text-xl active:bg-lime-terminal active:text-terminal-black transition-colors"
              aria-label="Move left"
            >
              ←
            </button>
            <button
              onClick={togglePause}
              className="bg-elevated-black border-2 border-comment-green text-comment-green p-4 font-fira text-xs active:bg-comment-green active:text-terminal-black transition-colors"
              aria-label="Pause game"
            >
              {gameState === 'playing' ? 'PAUSE' : 'RESUME'}
            </button>
            <button
              onClick={() => changeDirection(DIRECTIONS.RIGHT)}
              className="bg-elevated-black border-2 border-lime-terminal text-lime-terminal p-4 font-fira text-xl active:bg-lime-terminal active:text-terminal-black transition-colors"
              aria-label="Move right"
            >
              →
            </button>

            <div></div>
            <button
              onClick={() => changeDirection(DIRECTIONS.DOWN)}
              className="bg-elevated-black border-2 border-lime-terminal text-lime-terminal p-4 font-fira text-xl active:bg-lime-terminal active:text-terminal-black transition-colors"
              aria-label="Move down"
            >
              ↓
            </button>
            <div></div>
          </div>
        </div>

        {/* Desktop Controls Hint */}
        <div className="hidden sm:block mt-4">
          <div className="bg-elevated-black border border-comment-green/30 p-3 text-center font-fira text-xs text-comment-green">
            <span className="text-lime-terminal">Arrow Keys</span> or{' '}
            <span className="text-lime-terminal">WASD</span> to move |{' '}
            <span className="text-lime-terminal">SPACE</span> to pause |{' '}
            <span className="text-lime-terminal">ESC</span> to exit
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SnakeGame;
