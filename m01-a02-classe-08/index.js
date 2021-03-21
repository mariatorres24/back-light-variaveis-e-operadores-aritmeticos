function desconto (valorDisp, valorTenis) {
    let dif = valorTenis - valorDisp;
    let percDesconto = dif*100/valorTenis;
    return (`O desconto necessário pra você poder comprar o tênis é ${percDesconto}.`);
}
console.log(desconto(80, 129.99));