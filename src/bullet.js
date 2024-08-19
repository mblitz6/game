export class Bullet {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 10;
    this.speed = speed;
    this.markedForDeletion = false;
  }

  update() {
    this.y += this.speed;
    if (this.y < 0 || this.y > 500) {
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
