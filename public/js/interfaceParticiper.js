// Récupérer les éléments de proposition
const propositions = document.querySelectorAll('.elmtCINF2 .elmt');
// Ajouter un gestionnaire d'événements click à chaque élément de proposition
propositions.forEach((proposition) => {
  proposition.addEventListener('click', () => {
    // Récupérer la valeur de la proposition
    const valeurProposition = parseInt(proposition.innerText.replace('+', ''));
    // Récupérer la valeur du prix actuel
    const prixActuelElement = document.querySelector('.elmtCINF1 .elmtCINF14 .proposition');  
    const prixActuel = parseInt(prixActuelElement.innerText.replace(/[^0-9]/g, ''));
    
    // Calculer le nouveau prix
    const nouveauPrix = prixActuel + valeurProposition;
    
    // Mettre à jour la valeur de la meilleure proposition
    prixActuelElement.innerText = `Plus forte proposition : ${nouveauPrix} F CFA`;
    var nom = document.getElementById("nom").textContent;
 
    const requestOptions = {  
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nouveauMontant: {nouveauPrix,nom} })
      };
      console.log('====================================');
      console.log(requestOptions);
      console.log('====================================');
      fetch(`/interfaceUtilisateur/${nom}/participer`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data)) 
        .catch(error => console.log(error)); 
      
    // Ajouter l'utilisateur à la liste des participants à l'enchère
    // (à implémenter selon vos beso ins)
  });
//   Window.location.reload(); 
});


// Récupération de la date de début de l'enchère depuis le serveur
const dateDebut = document.getElementById('decompte').textContent;
const dateDebutEnchere = new Date(dateDebut);
console.log(dateDebutEnchere);
// Durée de l'enchère en millisecondes
// const dureeEnchere =  8*60*60 * 1000; // 2 jours
const dureeEnchere = 2 * 24 * 60 * 60 * 1000; // 2 jours

// Calcul de la date de fin de l'enchère
const dateFinEnchere = new Date(dateDebutEnchere.getTime() + dureeEnchere);

// Fonction pour afficher le compte à rebours
function afficherCompteRebours() {
  const maintenant = new Date();
  const difference = dateFinEnchere.getTime() - maintenant.getTime();

  if (difference <= 0) {
    // L'enchère est terminée, on affiche un message
    document.getElementById('decompte').innerHTML = "L'enchère est terminée.";
const propositions1 = document.getElementById("cinq")
const propositions2 = document.getElementById("cent")
const propositions3 = document.getElementById("quiz")
const propositions4 = document.getElementById("trent")


    propositions1.style.display="none";
    propositions2.style.display="none";
    propositions3.style.display="none";
    propositions4.style.display="none";
          

  } else {
    // L'enchère est toujours en cours, on affiche le compte à rebours
    const secondes = Math.floor(difference / 1000) % 60;
    const minutes = Math.floor(difference / (1000 * 60)) % 60;
    const heures = Math.floor(difference / (1000 * 60 * 60)) % 24;
    const jours = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById('decompte').innerHTML = `<i class="fa-solid fa-clock"></i> : ${jours}j ${heures}h ${minutes}m ${secondes}s`;
  }

}

// Appel de la fonction toutes les secondes pour mettre à jour le compte à rebours
setInterval(afficherCompteRebours, 1000);

