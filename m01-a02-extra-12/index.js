var populacao = 1000
var x = 4
var t = 100

var p = Math.round (populacao * Math.pow(x, (t / 7)))

console.log(`O número de pessoas a serem infectadas após ${t} dias, é de: ${p}`)