let numeroDeLados = 3;
const s = (numeroDeLados -2) * 180;

console.log(`A soma dos ângulos internos deste polígono é de ${s}°`);

const inteiro = s / numeroDeLados

if (Number.isInteger(inteiro)){
    console.log(`Todos os seus ângulos são idênticos e cada um vale ${inteiro}°`);
}