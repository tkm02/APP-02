// index.js
const form1 = document.getElementById('form1');

form1.addEventListener('submit', (e) => {
  e.preventDefault();

  const nomVendeur      = document.getElementById('nomVendeur').value;
  const prenomVendeur   = document.getElementById('prenomVendeur').value;
  const mailVendeur     = document.getElementById('mailVendeur').value;

  const objVendeur = {

    nomVendeur,
    prenomVendeur,
    mailVendeur
    
  }
  sessionStorage.setItem('objVendeur', JSON.stringify(objVendeur));

  window.location.href = '/InscriptionVendeur2';
});

