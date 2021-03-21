// // P = Po * x ^\frac{t}{7}
// Po = a população incial de pessoas infectadas
// X = quantidade de pessoas paras as quais um paciente infectado pode transmitir
// t = tempo percorrido
// Po = 1000
// x = 4
// t = 100

// const Po = 1000, x = 4, t = 100;

// const P = (Po * Math.pow(x, (t/7))).toFixed(0);

// console.log(`A quantidade de pessoas contaminadas a partir do ${x}º dia será de ${P} pessoas.`)


// Utilizando o function;

const Po = 1000, x = 4, t = 100;

function P() {
    P = (Po * Math.pow(x, (t/7))).toFixed(0);
};
P();

console.log(`A quantidade de pessoas contaminadas a partir do ${x}º dia será de ${P} pessoas.`)

