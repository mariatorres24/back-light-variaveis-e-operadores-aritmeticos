let capital = 10000;
let taxa = (12.5 / 100);
let tempoEmMeses = 5;
let m = "O montante após o prazo será de" + " " + capital * Math.pow(1 + taxa, tempoEmMeses);
console.log(m);
