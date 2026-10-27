window.Pong = window.Pong || {};

// Stan gry i logika jednego kroku symulacji. Nie wie nic o rysowaniu ani o pętli.
Pong.Game = class Game {
  constructor(config) {
    this.config = config;
    const { width, height, paddle, ball } = config;
    const paddleY = (height - paddle.height) / 2;

    this.leftPaddle = new Pong.Paddle(paddle.margin, paddleY, paddle.width, paddle.height);
    this.rightPaddle = new Pong.Paddle(
      width - paddle.margin - paddle.width, paddleY, paddle.width, paddle.height
    );
    this.ball = new Pong.Ball(ball.size);

    this.serve(Math.random() < 0.5 ? -1 : 1);
  }

  serve(direction) {
    const { width, height, ball } = this.config;
    this.ball.reset(width, height, ball.speed, direction);
  }

  update(dt) {
    const { width, height } = this.config;

    this.leftPaddle.update(dt, height);
    this.rightPaddle.update(dt, height);
    this.ball.update(dt);

    this.bounceOffWalls();
    this.bounceOffPaddle(this.leftPaddle, 1);
    this.bounceOffPaddle(this.rightPaddle, -1);

    // Piłka wyszła za boczną krawędź. Tu w kolejnym etapie dojdzie liczenie punktów.
    if (this.ball.x + this.ball.size < 0) {
      this.onBallOut('left');
    } else if (this.ball.x > width) {
      this.onBallOut('right');
    }
  }

  bounceOffWalls() {
    const { ball } = this;
    const { height } = this.config;

    if (ball.y < 0) {
      ball.y = 0;
      ball.dy = Math.abs(ball.dy);
    } else if (ball.y + ball.size > height) {
      ball.y = height - ball.size;
      ball.dy = -Math.abs(ball.dy);
    }
  }

  // `direction` to kierunek, w którym piłka ma polecieć po odbiciu (1 w prawo, -1 w lewo).
  bounceOffPaddle(paddle, direction) {
    const { ball } = this;
    const movingTowardPaddle = Math.sign(ball.dx) === -direction;
    if (!movingTowardPaddle || !ball.intersects(paddle)) return;

    const cfg = this.config.ball;

    // Im dalej od środka paletki trafi piłka, tym ostrzejszy kąt odbicia.
    const offset = (ball.y + ball.size / 2 - paddle.centerY) / (paddle.height / 2);
    const angle = Math.max(-1, Math.min(1, offset)) * cfg.maxBounceAngle;
    const speed = Math.min(ball.speed * cfg.speedUp, cfg.maxSpeed);

    ball.dx = Math.cos(angle) * speed * direction;
    ball.dy = Math.sin(angle) * speed;

    // Wypchnij piłkę poza paletkę, żeby nie odbiła się dwa razy.
    ball.x = direction === 1 ? paddle.x + paddle.width : paddle.x - ball.size;
  }

  // `side` to strona, za którą wyleciała piłka. Na razie po prostu serwujemy od nowa.
  onBallOut(side) {
    this.serve(side === 'left' ? 1 : -1);
  }
};
