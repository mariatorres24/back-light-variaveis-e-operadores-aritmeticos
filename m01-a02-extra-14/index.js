//calculando angulos de um polígono

let calculaAngulosInternos = (nDeLados) => {

    return (nDeLados - 2) * 180;

}

let angulosIguais = (nDeLados, anguloTotal) => {

    if(anguloTotal % nDeLados == 0){

        return anguloTotal / nDeLados;

    }else{

        return false;

    }

}

let anguloTotalHexagono = calculaAngulosInternos(6)
console.log(`angulos internos de um hexagono: ${anguloTotalHexagono} :: valor de cada angulo: ${angulosIguais(6, anguloTotalHexagono)}`);
//deu certo, top