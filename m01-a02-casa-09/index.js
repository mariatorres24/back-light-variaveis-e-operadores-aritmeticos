let capital = 1000;
let taxaJuros = 12.5;
let tempo = 5;
let montante = (capital * Math.pow((1 + (taxaJuros / 100)), tempo)).toFixed(2);

console.log(`Aplicando um capital de R$${capital} por ${tempo} meses à uma taxa mensal fixa de ${taxaJuros}% no sistema de juros compostos, meu montante será de R$${montante}`);