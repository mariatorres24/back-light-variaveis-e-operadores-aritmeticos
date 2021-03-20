//dando continuidade, o conversor de Fahrenheit para Celsius

let fToC = (fahrenheit) => {

    return (fahrenheit - 32) * (5/9); //quase nunca me lembro sobre precendencia de sinal então eu separo em parenteses as expressões
    
}

console.log(fToC(73));