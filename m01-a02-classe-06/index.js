let pesoEmQuilos = 50;
let alturaEmMetros = 1.80;
let indiceMassaCorporal = (pesoEmQuilos / Math.pow(alturaEmMetros, 2)).toFixed(2);

console.log(`Seu peso é ${pesoEmQuilos}kg e sua altura ${alturaEmMetros} metros, logo seu IMC é ${indiceMassaCorporal}`);