let Po = 10; // população infectada
let x = 8; // quantidade de pessoas que um paciente pode infectar
let t = 50; // tempo percorrido em dias

let p = (Po * (x**(t/7))); //p = população total infectada após t dias

console.log(`A quantidade de infectados após ${t} dias é de ${p.toFixed(0)} pessoas.`);