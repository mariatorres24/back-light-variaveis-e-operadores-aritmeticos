/* Calcule a distância entre dois pontos utilizando a seguinte fórmula, considerando que (x1, y1) e (x2, y2) sejam dois pontos em um plano: */

// Coordenadas do ponto 1:
const x1 = 1, x2 = 4;

// Coordenadas do ponto 2:
const y1 = 1, y2 = 5;

// Cálculo da distância entre dois pontos;

const d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(`A distância entre os dois pontos é de ${d} metros.`);