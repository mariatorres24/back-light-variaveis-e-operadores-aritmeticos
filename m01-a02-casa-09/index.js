let emprestimo = 1200;
const taxaFixaDeJuros = 0.125;
let meses = 5;
const montante = emprestimo * (Math.pow(1+taxaFixaDeJuros,meses));

console.log(`O valor do montante é de R$ ${montante.toFixed()} !`);