const F = 73;
let C = ((F - 32) * 5) / 9;
let roundC = C.toFixed(2);
console.log(
  'De acordo com o aplicativo do tempo, agora está 73 ºF na sua cidade, se convertêssemos isso para Celsius, qual seria o resultado?'
);
console.log(`${roundC}ºC`);
