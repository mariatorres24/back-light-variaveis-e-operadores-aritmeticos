let popInfectada = 1000, qtdPessoas = 4, tempo = 100; p = 0;

p = popInfectada * Math.pow(qtdPessoas, (tempo/7));
p = Math.round(p);

console.log(p);

