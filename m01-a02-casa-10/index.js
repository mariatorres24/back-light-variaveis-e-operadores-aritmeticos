let pontoX1 = 1;
let pontoY1 = 1;

let pontoX2 = 1;
let pontoY2 = 4;

let distanciaEntrePontos = Math.sqrt(Math.pow((pontoX2 - pontoX1), 2) + Math.pow((pontoY2 - pontoY1), 2))

console.log(`A distância entre as coordenadas (${pontoX1}, ${pontoY1}) e (${pontoX2}, ${pontoY2}) é ${distanciaEntrePontos}.`);