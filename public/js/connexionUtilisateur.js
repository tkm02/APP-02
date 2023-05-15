document.getElementById('connexion').addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire
    // event.preventDefault();

    // Créer un objet pour stocker les informations du formulaire
    const formulaireData = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };

    // Stocker l'objet dans le localStorage
    localStorage.setItem('formulaireData', JSON.stringify(formulaireData));

    
})