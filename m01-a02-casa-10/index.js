/*
### Calcular a distância entre dois pontos

Calcule a distância entre dois pontos utilizando a seguinte fórmula, considerando que (x1, y1) e (x2, y2) sejam dois pontos em um plano:

![d = \sqrt{(x2 - x1)^2 + (y2 - y1)^2}]
*/

let x1 = 1, y1 = 1, x2 = 1, y2 = 4;
let distancia;

distancia = (Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2))).toFixed(2);

console.log(`\nA distância entre os pontos A(${x1}, ${y1}) e B(${x2}, ${y2}) é ${distancia}m.\n`);
