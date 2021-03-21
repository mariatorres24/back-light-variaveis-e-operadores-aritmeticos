let pessoasInfectadasInicio = 1000;
let tempoEmDias = 100;
let alcanceDaContaminacao = 4;
let pessoasASeremInfectadas = Math.round(pessoasInfectadasInicio * Math.pow(alcanceDaContaminacao, (tempoEmDias / 7)));

console.log(`O número de pessoas a serem infectadas após ${tempoEmDias} dias é ${pessoasASeremInfectadas}.`);