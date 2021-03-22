const capital = 1000, taxaFixa = 0.125, tempo = 5;
let resultado, montante, potencia ;

potencia = Math.pow(1 + taxaFixa, tempo);
montante = capital *  potencia;

console.log(montante);