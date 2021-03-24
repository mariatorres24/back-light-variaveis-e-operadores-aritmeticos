//M = C(1 + i)^t
//C = 1000
//i = 0,125
//t = 5
/**
 * primeiro declarei as variáveis, atribuindo valores a elas. Depois adaptei as varíaveis à fórmula com o math.pow. Ao fim concatenei a variável total com a string templete 
 */

let capital = 1000;
let taxaFixaDeJuros = 12.5;
let i = taxaFixaDeJuros/100;
let tempo = 5;

let montante = capital * Math.pow((1 + i), tempo);

let total = montante;

console.log (`O montante é: ${total}`);