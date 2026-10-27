window.Pong = window.Pong || {};

Pong.Ball = class Ball {
  constructor(size) {
    this.size = size;
    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.dy = 0;
  }

  // Ustawia piłkę na środku planszy i wypuszcza ją pod losowym kątem w stronę `direction` (-1 lewo, 1 prawo).
  reset(boardWidth, boardHeight, speed, direction) {
    this.x = (boardWidth - this.size) / 2;
    this.y = (boardHeight - this.size) / 2;
    const angle = (Math.random() - 0.5) * (Math.PI / 3);
    this.dx = Math.cos(angle) * speed * direction;
    this.dy = Math.sin(angle) * speed;
  }

  update(dt) {
    this.x += this.dx * dt;
    this.y += this.dy * dt;
  }

  get speed() {
    return Math.hypot(this.dx, this.dy);
  }

  intersects(rect) {
    return (
      this.x < rect.x + rect.width &&
      this.x + this.size > rect.x &&
      this.y < rect.y + rect.height &&
      this.y + this.size > rect.y
    );
  }
};
