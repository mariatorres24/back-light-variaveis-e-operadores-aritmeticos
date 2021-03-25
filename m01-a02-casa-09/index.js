/*
Se um capital de R$1000 é aplicado durante 5 meses no sistema de juros 
compostos sob uma taxa mensal fixa de 12,5%, qual será o valor do montante?

Sendo:

C = 1000
i = 0,125
t = 5
*/

const taxa = 12.5;

let capital = 1000;
let tempo = 5;
let juros = 0;
let montante = 0;

juros = (Math.pow((1 + taxa/100),tempo));
montante = (capital * juros).toFixed(2); // .toFixed(x) define a quantidade de casas decimais

console.log(`\nO capital de R$${capital} gerou um montante de R$${montante}
após ${tempo} meses aplicados a uma taxa de ${taxa}% ao mês.\n`);
