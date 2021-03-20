let populaçãoInicialInfectada = 1_000
let transmissividade = 4
let tempoEmDias = 100

// fórmula P = Po * X elevado a (t/7)

const pessoasInfectadas = populaçãoInicialInfectada * Math.pow(transmissividade, (tempoEmDias / 7));


console.log(pessoasInfectadas);
