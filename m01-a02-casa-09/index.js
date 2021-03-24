const capital = 1000;
const taxaJuros = 12.5;
const tempoAplicacao = 5;

let montante = (capital * Math.pow((1 + taxaJuros/100), tempoAplicacao)).toFixed(2);
montante = capital * montante;

console.log(`Um capital de ${capital} reais, aplicado durante ${tempoAplicacao} meses e com uma taxa fixa mensal de ${taxaJuros}%, tera um montante de ${montante} reais`)