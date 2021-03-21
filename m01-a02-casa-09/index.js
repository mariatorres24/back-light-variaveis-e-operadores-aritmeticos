/* Cálculo do montante: */

let capital = 1000, taxaMensal = 0.125, tempoMes = 5;

let montante = (capital * Math.pow((1 + taxaMensal), tempoMes)).toFixed(2);

console.log(`Se um capital de R$${capital.toFixed(2)} é aplicado durante ${tempoMes} meses no sistema de juros compostos sob uma taxa mensal fixa de ${(taxaMensal * 100).toFixed(1)}%, o valor do montante será R$${montante}.`)