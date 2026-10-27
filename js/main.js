(function () {
  const canvas = document.getElementById('game');
  const game = new Pong.Game(Pong.config);
  const renderer = new Pong.Renderer(canvas, Pong.config);

  // Ogranicza krok czasu, żeby po przełączeniu karty piłka nie "przeskoczyła" przez paletkę.
  const MAX_DT = 1 / 30;
  let last = performance.now();

  function frame(now) {
    const dt = Math.min((now - last) / 1000, MAX_DT);
    last = now;

    game.update(dt);
    renderer.draw(game);

    requestAnimationFrame(frame);
  }

  // Udostępnione do debugowania z konsoli przeglądarki.
  Pong.game = game;
  requestAnimationFrame(frame);
})();
