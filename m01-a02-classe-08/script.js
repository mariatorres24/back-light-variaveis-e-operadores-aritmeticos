function verificar() {
    let tvalorEmMaos = window.document.getElementById('valorEmMaos');
    let valorEmMaos = Number(tvalorEmMaos.value);
    let tvalorTenis = window.document.getElementById('valorTenis');
    let valorTenis = Number(tvalorTenis.value);
    // Cálculo do desconto:
    let desconto = 100 - (valorEmMaos * 100 / valorTenis);
    
    res.innerHTML = 'O resultado será apresentado aqui: <br><br>';
    if (valorEmMaos == '') {
        window.alert('Digite o valor que você possui.');
    } else if (valorTenis == '') {
        window.alert('Digite o valor do tênis.')
    } else {
        res.innerHTML += `Para comprar um tênis no valor de R$${valorTenis.toFixed(2)} com R$${valorEmMaos.toFixed(2)} em mãos, vai precisar de um desconto de ${desconto.toFixed(1)}%. <br><br>`;
    }
    tvalorEmMaos.value = ''
    tvalorTenis.value = ''
}