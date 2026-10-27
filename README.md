# Pong

Prosta gra Pong w czystym HTML5 Canvas i JavaScripcie, bez kroku budowania.

## Uruchomienie

Otwórz `index.html` w przeglądarce (wystarczy dwuklik).

## Sterowanie

| Gracz | Góra | Dół |
| --- | --- | --- |
| Lewy | `W` | `S` |
| Prawy | `↑` | `↓` |

Domyślnie gra startuje w trybie 1 gracza: prawą paletką steruje komputer. Przycisk nad planszą albo klawisz `M` przełącza na 2 graczy i z powrotem.

## Struktura

| Plik | Rola |
| --- | --- |
| `js/config.js` | Stałe gry: rozmiary, prędkości, kolory |
| `js/paddle.js` | Paletka (pozycja, prędkość `dy`, ograniczenie do planszy) |
| `js/ball.js` | Piłka (ruch, serw, kolizja z prostokątem) |
| `js/game.js` | Stan gry i krok symulacji: odbicia, punktacja, serw po przerwie |
| `js/renderer.js` | Rysowanie planszy, siatki, wyniku, paletek i piłki |
| `js/input.js` | Stan klawiatury: które klawisze są wciśnięte |
| `js/ai.js` | Przeciwnik komputerowy: ustawia `dy` prawej paletki, goniąc piłkę z ograniczoną prędkością |
| `js/main.js` | Pętla gry (`requestAnimationFrame`) |

## Stan

Gotowe: plansza, dwie paletki, piłka, pętla gry, odbicia od ścian i paletek, sterowanie z klawiatury dla dwóch graczy, punktacja z wynikiem na ekranie i serwem po sekundowej przerwie, przeciwnik AI.

Trudność AI ustawia `Pong.config.ai.maxSpeed` (px/s).
