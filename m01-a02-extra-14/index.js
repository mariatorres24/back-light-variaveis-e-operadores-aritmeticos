//Soma dos ângulos internos de um polígono

//Input Data
const numeroLados = 6;

//Formulas
const somaAngulos = ( numeroLados - 2 ) * 180 ;
const anguloInternoPoligonoRegular = somaAngulos / numeroLados ;

//Outout Message
console.log(`Um polígono regular de ${numeroLados} lados possui ângulos internos de ${anguloInternoPoligonoRegular}° e somatório total de ângulo é ${somaAngulos}°.`) ;