// inscription2.js
const form2 = document.getElementById('form2');

form2.addEventListener('submit', (e) => {
    
  e.preventDefault();
  const nomEntreprise           = document.getElementById('nomEntreprise').value;
  const villeEntreprise         = document.getElementById('villeEntreprise').value;
  const numeroEntreprise        = document.getElementById('numeroEntreprise').value;
  const objVendeur              = JSON.parse(localStorage.getItem('objVendeur'));
  objVendeur.nomEntreprise      = nomEntreprise;
  objVendeur.villeEntreprise    = villeEntreprise;
  objVendeur.numeroEntreprise   = numeroEntreprise;

  localStorage.setItem('objVendeur', JSON.stringify(objVendeur));

  fetch('/InscriptionVendeur3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ vendeur: objVendeur })
  })
  window.location.href = '/InscriptionVendeur3';
});
