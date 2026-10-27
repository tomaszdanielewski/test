# Pong

Prosta gra Pong w czystym HTML5 Canvas i JavaScripcie, bez kroku budowania.

## Uruchomienie

Otwórz `index.html` w przeglądarce (wystarczy dwuklik).

## Sterowanie

| Gracz | Góra | Dół |
| --- | --- | --- |
| Lewy | `W` | `S` |
| Prawy | `↑` | `↓` |

## Struktura

| Plik | Rola |
| --- | --- |
| `js/config.js` | Stałe gry: rozmiary, prędkości, kolory |
| `js/paddle.js` | Paletka (pozycja, prędkość `dy`, ograniczenie do planszy) |
| `js/ball.js` | Piłka (ruch, serw, kolizja z prostokątem) |
| `js/game.js` | Stan gry i krok symulacji: odbicia, punktacja, serw po przerwie |
| `js/renderer.js` | Rysowanie planszy, siatki, wyniku, paletek i piłki |
| `js/input.js` | Stan klawiatury: które klawisze są wciśnięte |
| `js/main.js` | Pętla gry (`requestAnimationFrame`) |

## Stan

Gotowe: plansza, dwie paletki, piłka, pętla gry, odbicia od ścian i paletek, sterowanie z klawiatury dla dwóch graczy, punktacja z wynikiem na ekranie i serwem po sekundowej przerwie.

Planowane: przeciwnik AI. Miejsce rozszerzenia: sterowanie ustawia `paddle.dy` (px/s) przed `game.update(dt)` w `js/main.js`.
