const numeroDeLados = 7
const somaDosAngulos = (numeroDeLados - 2) * 180
const valorDosAngulos = (somaDosAngulos / numeroDeLados).toFixed(0)

console.log (`A soma dos ângulos internos de um polígono com ${numeroDeLados} lados é igual a ${somaDosAngulos}° e cada um de seus ângulos possui um valor aproximado de ${valorDosAngulos}°.`)