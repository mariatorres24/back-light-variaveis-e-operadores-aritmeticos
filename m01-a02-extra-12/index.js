// t => tempo em dias
// Po => população inicial infectada
// t => tempo percorrido

let Po = 1, X = 4, T = 7, P = 0;
P = Po * Math.pow(X, T/7).toFixed(0);

console.log(`Após ${T} ${T === 1 ? "dia" : "dias"} teremos ${P} pessoas infectadas pelo virus. `)



