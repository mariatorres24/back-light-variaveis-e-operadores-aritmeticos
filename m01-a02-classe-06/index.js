/*
### Calculadora de IMC

Para calcularmos o IMC de alguém, podemos utilizar a seguinte fórmula:

![I = \frac{P}{A²}]
*/

let peso = 95;
let altura = 1.83;
let imc = 0;

imc = (peso / (Math.pow(altura, 2))).toFixed(1); // .toFixed(x) define a quantidade de casas decimais

console.log(`\nO IMC calculado é ${imc}.\n`);