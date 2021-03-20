let numeroLados = 4;

const somaAngulos = (numeroLados - 2)*180;

const ladosIguais = somaAngulos % numeroLados;

if(ladosIguais === 0) {
  let tamanhoAngulo = somaAngulos/numeroLados;
  console.log(`A soma dos ângulos do polígono de ${numeroLados} lados é de ${somaAngulos}° que possuem angulos iguais de ${tamanhoAngulo}°`);
} else {
  console.log(`A soma dos ângulos do polígono de ${numeroLados} lados é de ${somaAngulos}° e não possui lados iguais`);
}