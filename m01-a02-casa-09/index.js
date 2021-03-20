let M = 0, C = 1000, i = 12.5/100, t = 5, a = 0, potencia = 0;

a = 1 + i;
potencia = Math.pow(a, t);
M = C * potencia;
console.log(`O valor do montante é R$ ${M}`);
