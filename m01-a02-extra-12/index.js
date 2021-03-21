function casosCovid(popInicial, x, t) {
    let popFinal = popInicial * Math.pow(x, (t/7));
    return (`A quantidade de pessoas infectadas após ${t} dias é ${popFinal}.`);
}
console.log(casosCovid(1000, 4, 100));