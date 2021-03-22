let populacaoInfect = 1000, transmissaoX = 4, tempo = 100

const contaminacao = populacaoInfect * (Math.pow(transmissaoX,(tempo/7)))

console.log(contaminacao)