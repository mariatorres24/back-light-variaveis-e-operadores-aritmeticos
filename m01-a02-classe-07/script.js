function verificar() {
    let tfahrenheit = window.document.getElementById('fahrenheit');
    let fahrenheit = Number(tfahrenheit.value).toFixed(1);

    // Cálculo da temperatura em celsius:
    let celsius = ((fahrenheit - 32) / 1.8).toFixed(1);

    res.innerHTML = 'O resultado será apresentado aqui: <br><br>';
    if (fahrenheit == '') {
        window.alert('Digite a temperatura.');
    } else {
        res.innerHTML += `Para ${fahrenheit} ºF, tem-se ${celsius} ºC. <br><br>`;
    }
    tfahrenheit.value = ''
}