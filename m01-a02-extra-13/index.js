// Cálculo do comprimento e da área da circunferência:

// let raio = 3;

// let comprimento = (raio * Math.PI).toFixed(1);

// let area = (Math.PI * Math.pow(raio, 2)).toFixed(1);

// console.log(`Para uma circunferência com um raio de ${raio}m, temos um comprimento de ${comprimento}m e uma área de ${area}m²`);

// Utilizando o function:

let raio = 3;

function comprimento() {
    comprimento = (raio * Math.PI).toFixed(1);
}
comprimento()

function area() {
    area = (Math.PI * Math.pow(raio, 2)).toFixed(1);
};
area()

console.log(`Para uma circunferência com um raio de ${raio}m, temos um comprimento de ${comprimento}m e uma área de ${area}m²`);
