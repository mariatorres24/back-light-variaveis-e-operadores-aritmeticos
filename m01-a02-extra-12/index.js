let PopulacaoInicialInfectada = 1000
let transmissividade = 4
let tempoPercorrido = 100
 
//Fórmula P = Po * X ^ t/7
let PopulacaoFinallInfectada = (PopulacaoInicialInfectada * Math.pow(transmissividade, (tempoPercorrido / 7))).toFixed(0);

console.log(`Uma população que tenha ${PopulacaoInicialInfectada} pessoas infectadas, ao final de um período de ${tempoPercorrido} dias, terá um total de aproximadamente ${PopulacaoFinallInfectada} pessoas infectadas com COVID-19.`)
