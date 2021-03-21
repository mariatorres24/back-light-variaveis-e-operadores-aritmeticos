// Calcular Juros Compostos

 let capital = 1.000; taxaJuros = 0.1; tempoAplicacao = 12; 
 let montante = capital * Math.pow((1 + taxaJuros), tempoAplicacao);
 let valorMensal = montante / tempoAplicacao;
 console.log(montante.toFixed(3));
 console.log(valorMensal.toFixed(3));