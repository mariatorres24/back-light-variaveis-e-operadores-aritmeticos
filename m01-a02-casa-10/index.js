/* Calcule a distância entre dois pontos utilizando a seguinte fórmula, considerando que (x1, y1) e (x2, y2) sejam dois pontos em um plano:

![d = \sqrt{(x2 - x1)^2 + (y2 - y1)^2}](https://i.imgur.com/EIXmgc9.png)

O seu programa deverá imprimir na tela o resultado **d** */

// Coordenadas do ponto 1:
let x1 = 1;
let x2 = 4;

// Coordenadas do ponto 2:
let y1 = 1;
let y2 = 5;

// Cálculo da distância entre dois pontos;

let d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(`A distância entre os dois pontos é de ${d} metros.`);