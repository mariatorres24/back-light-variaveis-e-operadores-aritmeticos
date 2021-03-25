/*
### Fahrenheit x Celsius

Para convertermos graus em Fahrenheit para graus em Celsius utilizamos a seguinte fórmula:

![C = (F - 32) * \frac{5}{9}
*/

let f = 73;
let c = 0;

c = (f-32)*(5/9);

console.log(`\n${f}°F equivale aproximadamente a ${Math.round(c)}°C.\n`); //para aparecer o "°" -> Alt + 0176