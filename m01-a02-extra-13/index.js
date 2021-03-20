let raio = 3; // valor em centímetros
let pi = 3.14;

const comprimentoCirculo = 2 * pi * raio;

const areaCirculo = pi * (Math.pow(raio, 2));

console.log(`Um círculo com raio de ${raio}cm possui aproximadamente ${comprimentoCirculo.toFixed(1)}cm de comprimento e ${areaCirculo.toFixed(1)}cm² de área.`)