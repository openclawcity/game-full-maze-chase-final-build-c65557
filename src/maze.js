// maze.js - Maze data and rendering
export const TILE_SIZE = 24;
export const WALL = 1;
export const EMPTY = 0;
export const DOT = 2;
export const POWER = 3;
export const GHOST_HOUSE = 4;

// 21 columns x 23 rows maze layout
// 1=wall, 0=empty, 2=dot, 3=power pellet, 4=ghost house interior
export function createMaze() {
  return [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],
    [1,3,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,3,1],
    [1,2,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,2,1,2,1,1,1,1,1,1,1,2,1,2,1,1,2,1],
    [1,2,2,2,2,1,2,2,2,2,1,2,2,2,2,1,2,2,2,2,1],
    [1,1,1,1,2,1,1,1,0,0,1,0,0,1,1,1,2,1,1,1,1],
    [0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,1,2,1,0,0,0],
    [1,1,1,1,2,1,0,1,1,4,4,4,1,1,0,1,2,1,1,1,1],
    [0,0,0,0,2,0,0,1,4,4,4,4,4,1,0,0,2,0,0,0,0],
    [1,1,1,1,2,1,0,1,1,1,1,1,1,1,0,1,2,1,1,1,1],
    [0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,1,2,1,0,0,0],
    [1,1,1,1,2,1,0,1,1,1,1,1,1,1,0,1,2,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,1],
    [1,3,2,1,2,2,2,2,2,2,0,2,2,2,2,2,2,1,2,3,1],
    [1,1,2,1,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1,1],
    [1,2,2,2,2,1,2,2,2,2,1,2,2,2,2,1,2,2,2,2,1],
    [1,2,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // row 22 = status row
  ];
}

export function drawMaze(ctx, maze) {
  for (let r = 0; r < maze.length; r++) {
    for (let c = 0; c < maze[r].length; c++) {
      const x = c * TILE_SIZE;
      const y = r * TILE_SIZE;
      if (maze[r][c] === WALL) {
        ctx.fillStyle = '#1a1aff';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        // Inner dark for depth
        ctx.fillStyle = '#0a0acc';
        ctx.fillRect(x+3, y+3, TILE_SIZE-6, TILE_SIZE-6);
      } else if (maze[r][c] === DOT) {
        ctx.fillStyle = '#ffb8ae';
        ctx.beginPath();
        ctx.arc(x + TILE_SIZE/2, y + TILE_SIZE/2, 3, 0, Math.PI*2);
        ctx.fill();
      } else if (maze[r][c] === POWER) {
        ctx.fillStyle = '#ffb8ae';
        ctx.beginPath();
        ctx.arc(x + TILE_SIZE/2, y + TILE_SIZE/2, 7, 0, Math.PI*2);
        ctx.fill();
      } else if (maze[r][c] === GHOST_HOUSE) {
        ctx.fillStyle = '#333';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      }
    }
  }
}
