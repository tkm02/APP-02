const formProduits = document.getElementById('formProduits');
const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // ajoute un 0 au début si le mois est < 10
        const day = now.getDate().toString().padStart(2, '0'); // ajoute un 0 au début si le jour est < 10
        const hours = now.getHours().toString().padStart(2, '0'); // ajoute un 0 au début si l'heure est < 10
        const minutes = now.getMinutes().toString().padStart(2, '0'); // ajoute un 0 au début si les minutes sont < 10
        const dateString = `${year}-${month}-${day}T${hours}:${minutes}`;
        document.getElementById('date_debut').value = dateString;

formProduits.addEventListener('submit', (e) => {
  e.preventDefault();

  const nomProduit      = document.getElementById('nom').value;
  const dateDebut       = document.getElementById('date_debut').value;
  const montantInitial  = document.getElementById('montant_initial').value;
  const image           = document.getElementById('image').value;
  const description     = document.getElementById('description').value;
  const categorie       = document.getElementById('categorie').value;


  const objProduits = {

    nomProduit,
    dateDebut,
    montantInitial,
    image,
    description,
    categorie 
    
  }
  sessionStorage.setItem('objProduits', JSON.stringify(objProduits));

const objVendeurConnexion        = JSON.parse(sessionStorage.getItem('objVendeurConnexion'));
    
  fetch('/ajouteEnchere', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ produits : JSON.parse(sessionStorage.getItem('objProduits')),objVendeurConnexion })
  })
 window.location.reload();
//   nomProduit,dateDebut,montantInitial,image,description  = '';

}); 

// .then(response => response.json())
// .then(data => { 
//   const {mailVendeur,motDePassVendeur,nomEntreprise,nomVendeur,numeroEntreprise,prenomVendeur,villeEntreprise} = data.vend;
//   bienvenue.textContent = `Bienvenue ${nomVendeur}${prenomVendeur}`;
// });

