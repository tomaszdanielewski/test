window.Pong = window.Pong || {};

// Prosty przeciwnik komputerowy: podąża za piłką, ale z ograniczoną prędkością, więc da się go pokonać.
Pong.AI = class AI {
  constructor(paddle, config) {
    this.paddle = paddle;
    this.config = config;
    this.enabled = true;
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    // Po przekazaniu paletki graczowi nie zostawiamy jej w ruchu.
    this.paddle.dy = 0;
  }

  // Ustawia `paddle.dy` na ten krok. Wywoływane przed `Game.update`, żeby nadpisać ewentualne sterowanie.
  update(game, dt) {
    if (!this.enabled || dt <= 0) return;

    const { ball } = game;
    const { maxSpeed } = this.config.ai;
    const towardPaddle = Math.sign(ball.dx) === Math.sign(this.paddle.x - ball.x);

    // Gdy piłka leci do nas, celujemy w nią; gdy odlatuje, wracamy na środek.
    const targetY = towardPaddle ? ball.y + ball.size / 2 : this.config.height / 2;
    const diff = targetY - this.paddle.centerY;

    // Nie szybciej niż `maxSpeed` i nie dalej niż do celu w tym kroku, żeby paletka nie drgała.
    this.paddle.dy = Math.sign(diff) * Math.min(maxSpeed, Math.abs(diff) / dt);
  }
};
