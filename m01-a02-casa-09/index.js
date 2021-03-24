//Aplicando hoje na caderneta de poupança a quantia de R$ 20.000,00, 
//qual será o montante gerado ao final de 4 anos, sabendo que a rentabilidade mensal é de 0,5%?

const capital = 20000;
const taxaDeJuros = 0.005;
const tempo = 48;
const montante = capital * Math.pow((1 + taxaDeJuros), tempo);

console.log(montante);
