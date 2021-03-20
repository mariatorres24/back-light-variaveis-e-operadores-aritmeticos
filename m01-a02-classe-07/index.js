function transFahr (fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

/* Chamada da Função */
let grausC = transFahr(73);
console.log(`A Conversão em Graus Celsius é ${grausC}`); 

