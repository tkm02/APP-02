document.getElementById('inscription').addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire
    //event.preventDefault();

    // Créer un objet pour stocker les informations du formulaire
    const formulaireData = {
      nom: document.getElementById('nom').value,
      prenom: document.getElementById('prenom').value,
      numero: document.getElementById('numero').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      accepteCondition: document.getElementById('check1').checked,
      accepteNewsletter: document.getElementById('check2').checked
    };

    // Stocker l'objet dans le localStorage
    localStorage.setItem('formulaireData', JSON.stringify(formulaireData));

    
}) 