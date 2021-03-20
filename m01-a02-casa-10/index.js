const x1 = 1;
const x2 = 1;
const y1 = 1;
const y2 = 4;
let d = Math.sqrt((x2 - x1) ^ (2 + (y2 - y1)) ^ 2);
let roundD = d.toFixed(2);

console.log(`A distância entre os dois pontos é ${roundD} unidade de medida`);
