const objVendeurConnexion        = JSON.parse(sessionStorage.getItem('objVendeurConnexion'));
const bienvenue                  = document.getElementById('bienvenue');

fetch('/tableauDeBord', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ vendeur : objVendeurConnexion })
})
.then(response => response.json())
.then(data => { 
  const {mailVendeur,motDePassVendeur,nomEntreprise,nomVendeur,numeroEntreprise,prenomVendeur,villeEntreprise} = data.vend;
  bienvenue.textContent = `Bienvenue ${nomVendeur} ${prenomVendeur}`; 
});

