let capital = 100000; //Em centavos
let taxaJuros = 12.5;
let tempo = 5;
let montante = ((capital * Math.pow((1 + (taxaJuros / 100)), tempo)) / 100).toFixed(2); //Em reais

console.log(`Aplicando um capital de R$${capital / 100} por ${tempo} meses à uma taxa mensal fixa de ${taxaJuros}% no sistema de juros compostos, meu montante será de R$${montante}`);