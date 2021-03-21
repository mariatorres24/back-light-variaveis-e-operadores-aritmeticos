// Calcular Juros Compostos

 let capital = 1.000; taxaJuros = 10; tempoAplicacao = 12; 
 let montante = capital * Math.pow((1 + taxaJuros), tempoAplicacao);
 console.log(Math.round(montante.toFixed(2)));