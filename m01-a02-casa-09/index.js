let btnCalc = document.querySelector('#btn-calc');
 
btnCalc.addEventListener('click', () => {
  let capitalElement = document.querySelector('#capitpal').value; 
  let taxElement = document.querySelector('#tax').value;
  let durationElement = document.querySelector('#duration').value;

  capitalElement = capitalElement.replace(',', '.');
  capitalElement = parseFloat(capitalElement);
  taxElement = taxElement.replace(',', '.');
  taxElement = parseFloat(taxElement) / 100;
  durationElement = Number(durationElement);

  let amount = 0;

  amount = capitalElement * Math.pow((1 + taxElement), durationElement);
  

  let res = document.querySelector('.res');
  res.innerHTML = `<p>R$${paramount.toFixed(2)}</p>`; 

  

  
});