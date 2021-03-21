function angulosPoligono (n){
    let soma = (n - 2)*180;
    let angulo = soma/6;
    return (`A soma dos ângulos do polígono é ${soma} graus e cada ângulo corresponde a ${angulo} graus.`);
}
console.log(angulosPoligono(6));