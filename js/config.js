// Wszystkie stałe gry w jednym miejscu.
window.Pong = window.Pong || {};

Pong.config = {
  width: 800,
  height: 500,

  paddle: {
    width: 12,
    height: 90,
    margin: 24, // odległość paletki od krawędzi planszy
    speed: 420, // px/s przy wciśniętym klawiszu
  },

  ball: {
    size: 12,
    speed: 360, // px/s na starcie
    speedUp: 1.05, // mnożnik prędkości po każdym odbiciu od paletki
    maxSpeed: 900,
    maxBounceAngle: Math.PI / 4, // maksymalny kąt odbicia od paletki
    serveDelay: 1, // s przerwy przed serwem po zdobytym punkcie
  },

  // Klawisze (KeyboardEvent.code) dla każdego gracza.
  controls: {
    left: { up: 'KeyW', down: 'KeyS' },
    right: { up: 'ArrowUp', down: 'ArrowDown' },
  },

  colors: {
    background: '#000',
    foreground: '#fff',
    net: '#555',
    score: '#888',
  },
};
