const capital = 1000 ;
const taxaDeJuros = 0.125;
const tempo = 5;
const montante = capital * Math.pow((1 + taxaDeJuros), tempo);

console.log(montante.toFixed(2));
