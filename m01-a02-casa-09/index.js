let c = 1000;
let i = 0.125;
let t = 5;
let m = c * Math.pow(1 + i, t);
console.log(`Um capital de R$${c.toFixed(2)} aplicado durante ${t} meses a uma taxa de ${(i * 100).toFixed(2)}%a.m. resulta em um montante de R$${m.toFixed(2)}.`);