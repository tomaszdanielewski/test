# Pong

Prosta gra Pong w czystym HTML5 Canvas i JavaScripcie, bez kroku budowania.

## Uruchomienie

Otwórz `index.html` w przeglądarce (wystarczy dwuklik).

## Struktura

| Plik | Rola |
| --- | --- |
| `js/config.js` | Stałe gry: rozmiary, prędkości, kolory |
| `js/paddle.js` | Paletka (pozycja, prędkość `dy`, ograniczenie do planszy) |
| `js/ball.js` | Piłka (ruch, serw, kolizja z prostokątem) |
| `js/game.js` | Stan gry i krok symulacji: odbicia od ścian i paletek, wyjście piłki za planszę |
| `js/renderer.js` | Rysowanie planszy, siatki, paletek i piłki |
| `js/main.js` | Pętla gry (`requestAnimationFrame`) |

## Stan

Gotowe: plansza, dwie paletki, piłka, pętla gry, odbicia od ścian i paletek.

Planowane: sterowanie z klawiatury i punktacja, przeciwnik AI. Miejsca rozszerzeń:
- sterowanie ustawia `paddle.dy` (px/s),
- punktacja trafia do `Game.onBallOut(side)`.
