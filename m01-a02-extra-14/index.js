

let calcAngulosInternosPoligono = n => {
  let anguloTotal = (n - 2) * 180;
  let verificaAngulo = anguloTotal % n;
  let msg = null;

  if (verificaAngulo === 0) {
    let cadaAngulo = anguloTotal / n;
    msg = `Cada lado do polígono possui ${cadaAngulo}º \nA soma dos ângulos internos do polígono é de ${anguloTotal}º`;
  } else {
    msg = `Este polígono não possui lados iguais, mas a soma deles é ${anguloTotal}`;
  }

  return msg;
}

let n = 6.9;
console.log(calcAngulosInternosPoligono(n));