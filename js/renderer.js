window.Pong = window.Pong || {};

Pong.Renderer = class Renderer {
  constructor(canvas, config) {
    this.ctx = canvas.getContext('2d');
    this.config = config;
  }

  draw(game) {
    const { ctx, config } = this;
    const { width, height, colors } = config;

    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, width, height);

    this.drawNet();
    this.drawScore(game.score);

    ctx.fillStyle = colors.foreground;
    for (const p of [game.leftPaddle, game.rightPaddle]) {
      ctx.fillRect(p.x, p.y, p.width, p.height);
    }

    const b = game.ball;
    ctx.fillRect(b.x, b.y, b.size, b.size);
  }

  drawScore(score) {
    const { ctx, config } = this;
    ctx.fillStyle = config.colors.score;
    ctx.font = 'bold 48px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(String(score.left), config.width / 4, 24);
    ctx.fillText(String(score.right), (config.width * 3) / 4, 24);
  }

  drawNet() {
    const { ctx, config } = this;
    const segment = 16;
    ctx.fillStyle = config.colors.net;
    for (let y = 0; y < config.height; y += segment * 2) {
      ctx.fillRect(config.width / 2 - 2, y + segment / 2, 4, segment);
    }
  }
};
