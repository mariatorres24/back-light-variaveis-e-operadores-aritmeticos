function imc(peso, altura) {
    imc = peso / Math.pow(altura, 2)
};
imc(76, 1.79);

console.log(`Seu eu IMC é ${imc.toFixed(1)}.`);

if (imc < 18.5) {
    console.log(`Você está abaixo do peso.`);
} else if (imc < 25) {
    console.log(`Seu peso está normal.`);
} else if (imc < 30) {
    console.log(`Você está com sobrepeso.`);
} else if (imc < 35) {
    console.log(`Você está com obesidade grau 1.`);
} else if (imc < 40) {
    console.log(`Você está com obesidade grau 2`);
} else {
    console.log(`Você está com obesidade grau 3 ou mórbida.`);
}
console.log(`Independente do valor do seu IMC, cuide-se!`);