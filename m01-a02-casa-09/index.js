var c = 1000
var i = Math.pow((1 + 0.125), 5)
var t = 5

var m = (c * i).toFixed(2)

console.log(`O valor do montante é de ${m}$. Sendo o capital: ${c}, a taxa fixa de ${(i).toFixed(2)} ao mês e o período de tempo ${t}(expresso em meses)`)
