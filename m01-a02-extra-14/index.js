const lados = 5;
//não existe poligono com lado 1 ou 2
if(lados == 1 || lados == 2){
  console.log("Não é um polígono.");
  return;
}

//soma dos angulos internos de um polígono
const soma = (lados-2)*180;
const ehRegular = true; 

console.log(`A soma dos ângulos internos é ${soma}`); 
if(ehRegular){
  const angulo = soma/lados;
  console.log(`O ângulo desse polígono regular é ${angulo}`);
}