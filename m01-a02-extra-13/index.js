let raio = 3;

let comprimento = (raio * Math.PI).toFixed(1);

let area = (Math.PI * Math.pow(raio, 2)).toFixed(1);

console.log(`Para uma circunferência com um raio de ${raio}m, temos um comprimento de ${comprimento}m e uma área de ${area}m²`);
