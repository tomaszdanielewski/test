// Wszystkie stałe gry w jednym miejscu.
window.Pong = window.Pong || {};

Pong.config = {
  width: 800,
  height: 500,

  paddle: {
    width: 12,
    height: 90,
    margin: 24, // odległość paletki od krawędzi planszy
  },

  ball: {
    size: 12,
    speed: 360, // px/s na starcie
    speedUp: 1.05, // mnożnik prędkości po każdym odbiciu od paletki
    maxSpeed: 900,
    maxBounceAngle: Math.PI / 4, // maksymalny kąt odbicia od paletki
  },

  colors: {
    background: '#000',
    foreground: '#fff',
    net: '#555',
  },
};
