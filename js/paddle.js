window.Pong = window.Pong || {};

Pong.Paddle = class Paddle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // Prędkość pionowa w px/s. Sterowanie (klawiatura, AI) ustawi ją w kolejnych etapach.
    this.dy = 0;
  }

  update(dt, boardHeight) {
    this.y += this.dy * dt;
    this.y = Math.max(0, Math.min(boardHeight - this.height, this.y));
  }

  get centerY() {
    return this.y + this.height / 2;
  }
};
