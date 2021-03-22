let capital = 1000, tempo = 5, juros = 12.5;


let montante = capital * (Math.pow ((1 + (juros / 100)), tempo));
console.log(`Se um capital de ${capital} reais é aplicado durante ${tempo} meses sob uma taxa mensal fixa de ${juros}%, o valor do montante será de ${montante} reais. `);