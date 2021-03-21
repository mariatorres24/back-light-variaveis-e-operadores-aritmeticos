function calculoImc(pesoKg, alturaM) {
    let imc = pesoKg/Math.pow(alturaM, 2);
    return (`O valor do seu IMC é ${imc}`);
}
console.log(calculoImc(58, 1.63));