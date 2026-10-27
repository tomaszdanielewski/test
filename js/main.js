(function () {
  const canvas = document.getElementById('game');
  const game = new Pong.Game(Pong.config);
  const renderer = new Pong.Renderer(canvas, Pong.config);
  const keyboard = new Pong.Keyboard(window, Pong.config.controls);
  const ai = new Pong.AI(game.rightPaddle, Pong.config);

  // Przełącznik 1 gracz (prawa paletka to AI) / 2 graczy. Przycisk albo klawisz M.
  const modeButton = document.getElementById('mode-toggle');
  function toggleMode() {
    ai.setEnabled(!ai.enabled);
    modeButton.textContent = ai.enabled ? 'Tryb: 1 gracz (vs komputer)' : 'Tryb: 2 graczy';
    modeButton.blur(); // żeby spacja/enter nie przełączały trybu podczas gry
  }
  modeButton.addEventListener('click', toggleMode);
  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyM' && !e.repeat) toggleMode();
  });

  // Ogranicza krok czasu, żeby po przełączeniu karty piłka nie "przeskoczyła" przez paletkę.
  const MAX_DT = 1 / 30;
  let last = performance.now();

  function frame(now) {
    const dt = Math.min((now - last) / 1000, MAX_DT);
    last = now;

    const speed = Pong.config.paddle.speed;
    game.leftPaddle.dy = keyboard.axis('left') * speed;
    game.rightPaddle.dy = keyboard.axis('right') * speed;
    // W trybie 1 gracza AI nadpisuje sterowanie prawej paletki.
    ai.update(game, dt);

    game.update(dt);
    renderer.draw(game);

    requestAnimationFrame(frame);
  }

  // Udostępnione do debugowania z konsoli przeglądarki.
  Pong.game = game;
  Pong.ai = ai;
  requestAnimationFrame(frame);
})();
