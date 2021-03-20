let btnCalc = document.querySelector('#btn-calc');

btnCalc.addEventListener('click', () => {
  let degreesF = document.querySelector('#degreesF');
  
  if (degreesF.value == '') {
    alert('Preencha o campo corretamente.');
  } else {
    degreesF = Number(degreesF.value);
  let degreesC = 0;

  let f2c = input => {
    degreesC = (degreesF - 32) * 5/9;
    degreesC = Math.round(degreesC);
    return degreesC;
  }

  f2c(degreesF);
  
  let resElement = document.querySelector('.res');
  resElement.innerHTML = `<p>${degreesC}ºc</p>`

  let resetElement = document.querySelector('#reset');
  resetElement.classList.remove('deactive');

  let btnReset = document.querySelector('#btn-reset');

  btnReset.addEventListener('click', () => {
    document.querySelector('#degreesF').value = '';
    document.querySelector('.res').innerHTML = '';
  });
  }
});

