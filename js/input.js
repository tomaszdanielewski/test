window.Pong = window.Pong || {};

// Śledzi wciśnięte klawisze i zamienia je na kierunek ruchu paletki dla każdego gracza.
Pong.Keyboard = class Keyboard {
  constructor(target, controls) {
    this.controls = controls;
    this.pressed = new Set();

    const handledKeys = new Set(
      Object.values(controls).flatMap((keys) => [keys.up, keys.down])
    );

    target.addEventListener('keydown', (e) => {
      if (!handledKeys.has(e.code)) return;
      e.preventDefault(); // strzałki nie przewijają strony
      this.pressed.add(e.code);
    });
    target.addEventListener('keyup', (e) => this.pressed.delete(e.code));
    // Po utracie fokusu keyup nie dotrze, więc zwalniamy wszystkie klawisze.
    target.addEventListener('blur', () => this.pressed.clear());
  }

  // -1 w górę, 1 w dół, 0 gdy żaden albo oba klawisze są wciśnięte.
  axis(player) {
    const keys = this.controls[player];
    return (this.pressed.has(keys.down) ? 1 : 0) - (this.pressed.has(keys.up) ? 1 : 0);
  }
};
