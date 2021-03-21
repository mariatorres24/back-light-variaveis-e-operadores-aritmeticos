// Conversão de fahrenheit para celsius --> °C = (°F − 32) ÷ 1,8
// Conversão de celsius para fahrenheit --> °F = °C × 1,8 + 32

// Digite o valor da temperatura em fahrenheit e será retornado o valor da temperatura em celsius:

const fahrenheit = 73;

const celsius = (fahrenheit - 32) / 1.8;

console.log(`Para ${fahrenheit.toFixed(1)} ºF, tem-se ${celsius.toFixed(1)} ºC.`);

// Digite o valor da temperatura em celsius e será retornado o valor da temperatura em fahrenheit:

// const celsius = 0;

// const fahrenheit = celsius * 1.8 + 32;

// console.log(`Para ${celsius.toFixed(1)} ºC, tem-se ${fahrenheit.toFixed(1)} ºF.`)