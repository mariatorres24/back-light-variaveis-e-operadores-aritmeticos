let populacaoInicial = 1000;
let transmissao = 4; // quantidade de pessoas para quais um paciente infectado por transmitir
let tempo = 100; //tempo (em dias) para a transmissão

const pessoasInfectadas = populacaoInicial * (Math.pow(transmissao, (tempo/7)));

console.log(`Após ${tempo} dias, ${pessoasInfectadas} pessoas estarão infectadas`);