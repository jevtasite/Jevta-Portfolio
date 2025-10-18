// Snake Game Utilities

// Directions
export const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

// Initial snake position (center of grid)
export const createInitialSnake = (gridSize) => {
  const center = Math.floor(gridSize / 2);
  return [
    { x: center, y: center },
    { x: center - 1, y: center },
    { x: center - 2, y: center },
  ];
};

// Generate random food position
export const generateFood = (gridSize, snake) => {
  let food;
  let isOnSnake;

  do {
    food = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };

    // Check if food spawned on snake
    isOnSnake = snake.some(
      segment => segment.x === food.x && segment.y === food.y
    );
  } while (isOnSnake);

  return food;
};

// Move snake in current direction
export const moveSnake = (snake, direction, hasEatenFood) => {
  const head = snake[0];
  const newHead = {
    x: head.x + direction.x,
    y: head.y + direction.y,
  };

  const newSnake = [newHead, ...snake];

  // If snake ate food, don't remove tail (snake grows)
  if (!hasEatenFood) {
    newSnake.pop();
  }

  return newSnake;
};

// Check if snake hit wall
export const checkWallCollision = (head, gridSize) => {
  return (
    head.x < 0 ||
    head.x >= gridSize ||
    head.y < 0 ||
    head.y >= gridSize
  );
};

// Check if snake hit itself
export const checkSelfCollision = (snake) => {
  const head = snake[0];
  const body = snake.slice(1);

  return body.some(
    segment => segment.x === head.x && segment.y === head.y
  );
};

// Check if snake ate food
export const checkFoodCollision = (head, food) => {
  return head.x === food.x && head.y === food.y;
};

// Get game speed based on score (faster as score increases)
export const getGameSpeed = (score) => {
  const baseSpeed = 400; // milliseconds (much slower, more playable)
  const speedIncrease = Math.floor(score / 100) * 30; // Increase speed every 100 points (very gradual)
  const minSpeed = 150; // Maximum speed (minimum interval)

  return Math.max(minSpeed, baseSpeed - speedIncrease);
};

// Calculate score based on food eaten
export const calculateScore = (foodEaten) => {
  return foodEaten * 10;
};

// Check if direction change is valid (can't reverse into yourself)
export const isValidDirectionChange = (currentDirection, newDirection) => {
  // Can't go opposite direction
  if (
    (currentDirection === DIRECTIONS.UP && newDirection === DIRECTIONS.DOWN) ||
    (currentDirection === DIRECTIONS.DOWN && newDirection === DIRECTIONS.UP) ||
    (currentDirection === DIRECTIONS.LEFT && newDirection === DIRECTIONS.RIGHT) ||
    (currentDirection === DIRECTIONS.RIGHT && newDirection === DIRECTIONS.LEFT)
  ) {
    return false;
  }

  return true;
};

// Get high score from localStorage
export const getHighScore = () => {
  const saved = localStorage.getItem('snakeHighScore');
  return saved ? parseInt(saved, 10) : 0;
};

// Save high score to localStorage
export const saveHighScore = (score) => {
  const currentHigh = getHighScore();
  if (score > currentHigh) {
    localStorage.setItem('snakeHighScore', score.toString());
    return true; // New high score!
  }
  return false;
};
