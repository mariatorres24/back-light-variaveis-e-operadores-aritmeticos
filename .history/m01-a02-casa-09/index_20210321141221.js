// Calcular Juros Compostos

 let capital = 1000; taxaJuros = 10; tempoAplicacao = 12; 
 let montante = capital * Math.pow((1 + taxaJuros), tempoAplicacao);
 let valorMensal = montante / tempoAplicacao;
 console.log(Math.round(valorMensal));