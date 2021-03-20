let i = 0;
let z = 0;
let x1 = 1;
let y1 = 1;
let x2 = 1;
let y2 = 4;
let d = 0;

i = x2 - x1;
i = Math.pow(i, 2);
z = y2 - y1;
z = Math.pow(z, 2);
distPercorrida = i + z;
distPercorrida= Math.sqrt(distPercorrida);
console.log(`A Distância utilizando os dois pontos é de ${distPercorrida} metros`);


