const objVendeurConnexion        = JSON.parse(sessionStorage.getItem('objVendeurConnexion'));
// const bienvenue                  = document.getElementById('bienvenue');

  
fetch('/listeEnchere', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ vendeur: objVendeurConnexion })
  })
  .then(response => response.json())
  .then(data => {
    const produits = data.produitsVendeur;
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = '';
  
    produits.forEach(produit => {
      const { nom, date_debut, montant_initial, meilleure_proposition, image } = produit;
  
      // Convertir la date de début en millisecondes
      const dateDebutMs = new Date(date_debut).getTime();
      const dateFinMs = dateDebutMs + (2 * 24 * 60 * 60 * 1000); // Durée de l'enchère : 2 jours
      const date = new Date(date_debut);
      const formattedDate = date.toLocaleString('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    //   console.log(formattedDate); // Affiche "13/05/2023 12:51:00"
      
      // Créer une ligne de tableau pour le produit
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${nom}</td>
        <td>${formattedDate}</td>
        <td class="decompte"></td>
        <td>${montant_initial}</td>
        <td>${meilleure_proposition}</td>
        <td><img src="${image}" alt="${nom}"></td>
      `;
      tbody.appendChild(tr);
  
      // Récupérer le td correspondant au décompte
      const tdDecompte = tr.querySelector('.decompte');
  
      // Actualiser le décompte automatiquement
      function updateDecompte() {
        const maintenantMs = new Date().getTime();
        const tempsRestantMs = dateFinMs - maintenantMs;
  
        if (tempsRestantMs < 0) {
          tdDecompte.textContent = "Terminé";
        } else {
          const jours = Math.floor(tempsRestantMs / (24 * 60 * 60 * 1000));
          const heures = Math.floor((tempsRestantMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
          const minutes = Math.floor((tempsRestantMs % (60 * 60 * 1000)) / (60 * 1000));
          const secondes = Math.floor((tempsRestantMs % (60 * 1000)) / 1000);
          tdDecompte.textContent = `${jours} jours ${heures} heures ${minutes} minutes ${secondes} secondes`;
        }
      }
  
      updateDecompte();
      setInterval(updateDecompte, 1000);
    });
  });
  
  