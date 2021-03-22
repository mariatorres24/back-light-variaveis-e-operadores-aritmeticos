let precoTenis = 129.99, valorDisponivel = 80

const cupomDesconto = 100-(((valorDisponivel*100)/precoTenis).toFixed(2))

console.log(cupomDesconto)
