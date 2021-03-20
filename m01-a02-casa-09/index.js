let c = 5000; // capital
let i = 0.125; // taxa fixa de juros por mes
let t = 5; // tempo em meses
const m = c * (1 + i)**t // montante (capital + juros)
console.log(`${m} é o montante.`);