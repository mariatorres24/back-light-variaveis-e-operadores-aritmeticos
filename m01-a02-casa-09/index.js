let m = 0, c = 3000, i = 0.125, t = 15;
m = c * Math.pow((1 + i), t)

var montante = m.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

console.log(montante)