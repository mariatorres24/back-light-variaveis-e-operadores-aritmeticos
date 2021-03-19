let tempFahr = prompt("Insira a temperatura em Fahrenheit");
const tempCelsius = ((tempFahr - 32)*(5/9));

console.log(`O equivalente em Celsius é ${tempCelsius.toFixed(1)}°`);