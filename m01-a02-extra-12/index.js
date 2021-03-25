let populacaoInfectada = 1000; qntPessoaTransmitida = 4; tempoPercorrido = 100; totalPessoasInfectadas = 0;

totalPessoasInfectadas = populacaoInfectada * Math.pow(qntPessoaTransmitida, (tempoPercorrido / 7))


console.log(`O total de pessoas infectadas é de ${totalPessoasInfectadas}`)