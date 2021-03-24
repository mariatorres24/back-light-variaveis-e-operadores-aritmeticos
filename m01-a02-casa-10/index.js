const distancia1 = 1;
const distancia2 = 1;
const distancia3 = 1;
const distancia4 = 4;

const distancia1Calculo = distancia1 - distancia2;
const distancia2Calculo = distancia2 - distancia4;
let distancia = Math.pow(distancia1Calculo, 2) + Math.pow(distancia2Calculo, 2);
distancia = Math.sqrt(distancia);
console.log(distancia);  