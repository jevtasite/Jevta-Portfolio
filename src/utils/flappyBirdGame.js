// Flappy Bird Game Utilities

// Game constants
export const GAME_CONFIG = {
  // Physics
  GRAVITY: 0.28,
  FLAP_FORCE: -8.5,
  MAX_FALL_SPEED: 5.5,
  MAX_RISE_SPEED: -10,

  // Pipes
  PIPE_SPEED_START: 1.2,
  PIPE_SPEED_MAX: 2.5,
  PIPE_SPEED_INCREMENT: 0.15,
  PIPE_GAP: 200,
  PIPE_WIDTH: 60,
  PIPE_MIN_HEIGHT: 50,
  PIPE_MAX_HEIGHT: 300,
  PIPE_SPACING: 250,

  // Bird
  BIRD_X: 80,
  BIRD_WIDTH: 34,
  BIRD_HEIGHT: 24,

  // Canvas
  CANVAS_WIDTH: 400,
  CANVAS_HEIGHT: 600,
  MOBILE_CANVAS_WIDTH: 300,
  MOBILE_CANVAS_HEIGHT: 500,
};

// Create a new bird object
export const createBird = (canvasHeight) => ({
  x: GAME_CONFIG.BIRD_X,
  y: canvasHeight / 2,
  width: GAME_CONFIG.BIRD_WIDTH,
  height: GAME_CONFIG.BIRD_HEIGHT,
  velocity: 0,
  rotation: 0,
});

// Apply gravity to bird
export const applyGravity = (bird) => {
  const newVelocity = bird.velocity + GAME_CONFIG.GRAVITY;
  return {
    ...bird,
    velocity: Math.min(newVelocity, GAME_CONFIG.MAX_FALL_SPEED),
    y: bird.y + newVelocity,
  };
};

// Apply flap force to bird
export const applyFlapForce = (bird) => ({
  ...bird,
  velocity: GAME_CONFIG.FLAP_FORCE,
});

// Update bird rotation based on velocity (for visual effect)
export const updateBirdRotation = (bird) => {
  // Rotate down when falling, up when rising
  const rotation = Math.min(Math.max(bird.velocity * 3, -30), 90);
  return {
    ...bird,
    rotation,
  };
};

// Create a new pipe
export const createPipe = (canvasWidth, canvasHeight) => {
  const minHeight = GAME_CONFIG.PIPE_MIN_HEIGHT;
  const maxHeight = Math.min(
    GAME_CONFIG.PIPE_MAX_HEIGHT,
    canvasHeight - GAME_CONFIG.PIPE_GAP - minHeight
  );

  const topHeight = Math.floor(
    Math.random() * (maxHeight - minHeight) + minHeight
  );

  return {
    x: canvasWidth,
    topHeight,
    bottomY: topHeight + GAME_CONFIG.PIPE_GAP,
    width: GAME_CONFIG.PIPE_WIDTH,
    passed: false,
  };
};

// Calculate current pipe speed based on score (progressive difficulty)
export const getCurrentPipeSpeed = (score) => {
  const speed =
    GAME_CONFIG.PIPE_SPEED_START + score * GAME_CONFIG.PIPE_SPEED_INCREMENT;
  return Math.min(speed, GAME_CONFIG.PIPE_SPEED_MAX);
};

// Move pipes to the left
export const movePipes = (pipes, speed = GAME_CONFIG.PIPE_SPEED_START) => {
  return pipes.map((pipe) => ({
    ...pipe,
    x: pipe.x - speed,
  }));
};

// Remove off-screen pipes
export const removeOffScreenPipes = (pipes) => {
  return pipes.filter((pipe) => pipe.x + pipe.width > 0);
};

// Check if bird collides with a pipe
export const checkBirdPipeCollision = (bird, pipe) => {
  // Check if bird is horizontally aligned with pipe
  if (bird.x + bird.width > pipe.x && bird.x < pipe.x + pipe.width) {
    // Check if bird hits top pipe or bottom pipe
    if (
      bird.y < pipe.topHeight || // Hit top pipe
      bird.y + bird.height > pipe.bottomY // Hit bottom pipe
    ) {
      return true;
    }
  }
  return false;
};

// Check if bird hits boundaries (ground or ceiling)
export const checkBirdBoundaryCollision = (bird, canvasHeight) => {
  return (
    bird.y < 0 || // Hit ceiling
    bird.y + bird.height > canvasHeight // Hit ground
  );
};

// Check if bird passed a pipe (for scoring)
export const checkPipePassed = (bird, pipe) => {
  return !pipe.passed && bird.x > pipe.x + pipe.width;
};

// Mark pipe as passed
export const markPipePassed = (pipes, pipeIndex) => {
  return pipes.map((pipe, index) =>
    index === pipeIndex ? { ...pipe, passed: true } : pipe
  );
};

// Get high score from localStorage
export const getHighScore = () => {
  const saved = localStorage.getItem("flappyHighScore");
  return saved ? parseInt(saved, 10) : 0;
};

// Save high score to localStorage
export const saveHighScore = (score) => {
  const currentHigh = getHighScore();
  if (score > currentHigh) {
    localStorage.setItem("flappyHighScore", score.toString());
    return true; // New high score!
  }
  return false;
};

// Check if we need to spawn a new pipe
export const shouldSpawnPipe = (pipes, canvasWidth) => {
  if (pipes.length === 0) return true;

  const lastPipe = pipes[pipes.length - 1];
  return canvasWidth - lastPipe.x >= GAME_CONFIG.PIPE_SPACING;
};
