const nome = 'Karine'
let peso = 56.6
const altura = 1.53
imc = (peso / (Math.pow(altura, 2))).toFixed(2);
console.log(`O cálculo do imc de ${nome} é igual a ${imc}.`);
