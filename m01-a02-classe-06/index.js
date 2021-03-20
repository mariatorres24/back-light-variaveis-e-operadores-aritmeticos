let btnCalc = document.querySelector('#btn-calc');

btnCalc.addEventListener('click', () => {
  let weight = document.querySelector('#weight').value;
  let height = document.querySelector('#height').value;

  if (weight == '' || height == '') {
    alert('Preencha corretamente os campos.');
  } else {
    weight = weight.replace(',', '.');
  height = height.replace(',', '.');

  weight = parseFloat(weight).toFixed(3);
  height = parseFloat(height).toFixed(2);

  let imc = weight / Math.pow(height, 2);
  imc = imc.toFixed(1);
  let status = '';

  if (imc <= 18.5) {
    status = 'Magreza';
  } else if (imc >= 18.5 && imc <= 24.9) {
    status = 'Normal';
  } else if (imc >= 25 && imc <= 29.9) {
    status = 'Sobrepeso';
  } else if (imc >= 30 && imc <= 39.9) {
    status = 'Obesidade';
  } else {
    status = 'Obesidade Grave';
  }

  let resElement = document.querySelector('.res');
  let statusElement = document.querySelector('.status');

  resElement.innerHTML = `<h3>${imc}</h3>`;
  statusElement.innerHTML = `<p>${status}</p>`;

  let resetElement = document.querySelector('#reset');
  resetElement.classList.remove('deactive');
  
  let btnReset = document.querySelector('#btn-reset');

  btnReset.addEventListener('click', () => {
    document.querySelector('#weight').value = '';
    document.querySelector('#height').value = '';
    document.querySelector('.res').innerHTML = '';
    document.querySelector('.status').innerHTML = '';
  });
  }
});