function distancia2pontos(x2, x1, y2, y1) {
    let distancia = Math.sqrt((Math.pow((x2 - x1), 2))+(Math.pow((y2 - y1), 2)));
    return (`A distância entre os dois pontos é ${distancia}.`)
}
console.log(distancia2pontos(1, 1, 4, 1));
