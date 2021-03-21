function jurosCompostos(c, i, t) {
    let montante = c*Math.pow((1+i), t);
    return (`Seu montante é ${montante}.`)
}
console.log(jurosCompostos(1000, 0.125, 5));