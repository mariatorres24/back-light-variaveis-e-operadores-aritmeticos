let capitalC = 1000
let jurosI = 0.125
let tempoT = 5

const montanteM = capitalC*(Math.pow((1+jurosI), tempoT))

console.log(Math.round(montanteM))
