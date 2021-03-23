let valorTotalTenis = 129.99;
let dinheiroEmMaos = 80.00;

const porcentagem  = 100.00;
let porcentagemDinheiroEmMaos;
let cupomDeDesconto;

porcentagemDinheiroEmMaos = dinheiroEmMaos * porcentagem / valorTotalTenis;

cupomDeDesconto = porcentagem - porcentagemDinheiroEmMaos;
console.log(cupomDeDesconto);