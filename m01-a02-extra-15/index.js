const button = document.getElementById('calcule');

function calc() {
  const varA = document.getElementById('varA').value;
  const varB = document.getElementById('varB').value;
  const varC = document.getElementById('varC').value;

  let result = document.getElementById('h3');

  result.innertext = '';
  const delta = (varB ^ 2) - 4 * varA * varC;
  console.log(delta);
  if (delta < 0) {
    let resp = 'Delta negativa, não dá';
    result.innerHTML = resp;
  } else {
    let raizP = ((-varB + Math.sqrt(delta)) / (2 * varA)).toFixed(2);
    let raizN = ((-varB - Math.sqrt(delta)) / (2 * varA)).toFixed(2);
    let resp = `As raízes são ${raizP} e ${raizN}`;
    result.innerHTML = resp;
  }
}
