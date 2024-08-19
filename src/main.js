import { Game } from './game.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const game = new Game(canvas.width, canvas.height);

function gameLoop() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  game.update();
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();

document.addEventListener('keydown', (e) => game.handleKeyDown(e));
document.addEventListener('keyup', (e) => game.handleKeyUp(e));
