let d = 50; //distancia em metros
let t = 8; // tempo em segundos
let v = d/t; //em m/s
//transformando em km/h
const vf = v*3.6; //vf = velocidade final, em KM/h
console.log(`Sua velocidade média é de: ${vf.toFixed(2)}km/h.`);