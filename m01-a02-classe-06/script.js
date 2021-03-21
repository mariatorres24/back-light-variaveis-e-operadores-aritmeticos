function verificar() {
    let tnome = window.document.getElementById('nome');
    let tidade = window.document.getElementById('idade');
    let tpeso = window.document.getElementById('peso');
    let taltura = window.document.getElementById('altura');
    let nome = tnome.value;
    let idade = Number(tidade.value);
    let peso = Number(tpeso.value).toFixed(1);
    let altura = Number(taltura.value).toFixed(2);
    /* Informando o IMC com precisão de uma casa decimal  */
    let imc = ((peso / (altura * altura)).toFixed(1));
    // Criando o elemento img no JS:
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');
    res.innerHTML = 'O resultado será apresentado aqui: <br><br>';
    if (nome == '') {
        window.alert('Digite seu nome.');
    } else {
        res.innerHTML += `Olá, ${nome}!<br><br>`;
    }
    if (idade == '') {
        window.alert('Digite sua idade.');
    } else {
        // Colocando no singular caso a idade esteja entre 0 e 1 ano.
        if (idade == 0 || idade == 1) {
            res.innerHTML += `Você tem ${idade} ano.<br><br>`;
        } else {
            res.innerHTML += `Você tem ${idade} anos.<br><br>`;
        }
    }
    if (peso == ''){
        window.alert('Digite seu peso.')
    } else {
        res.innerHTML += `Você pesa ${peso} kg.<br><br>`
    }
    if (altura == '') {
        window.alert('Digite sua altura.')
    } else {
        res.innerHTML += `Você mede ${altura}m.<br><br>`
    }
    if (nome == '' || idade == '' || peso == '' || altura == '') {
    } else {
        res.innerHTML += `Seu <strong>IMC</strong> é de <strong>${imc}</strong>.<br><br>`
        if (imc < 18.5) {
            res.innerHTML += 'Você está com <strong>magreza</strong>.<br><br>'
        } else if (imc <= 24.9) {
            res.innerHTML += 'Você está <strong>"normal"</strong>.<br><br>'
        } else if (imc <= 29.9) {
            res.innerHTML += 'Você está com <strong>sobrepeso</strong>.<br><br>'
        } else if (imc <= 39.9) {
            res.innerHTML += 'Você está com <strong>obesidade</strong>.<br><br>'
        } else {
            res.innerHTML += 'Você está com <strong>obesidade grave</strong>.<br><br>'
        }
        res.innerHTML += 'Veja a interpretação do IMC:<br><br>'
        img.setAttribute('src', 'tabela-imc.jpg')
        res.appendChild(img)
    }
    tnome.value = ''
    tidade.value = ''
    tpeso.value = ''
    taltura.value = ''
}