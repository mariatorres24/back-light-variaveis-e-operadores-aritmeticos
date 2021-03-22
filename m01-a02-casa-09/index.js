let capital = 1000, taxaFixaDeJuros = 0.125, periodoDeTempo = 5;
let montante = capital * Math.pow((1 + taxaFixaDeJuros), periodoDeTempo);
console.log(`Um capital no valor de ${capital} reais sendo aplicado durante ${periodoDeTempo} meses no sistema de juros compostos sob uma taxa mensal fixa de 12,5% tem o valor de ${montante} ao final do período de aplicação.`)