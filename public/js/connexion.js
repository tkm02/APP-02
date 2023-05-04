const form3 = document.getElementById('form3');

form3.addEventListener('submit', (e) => {
    
    e.preventDefault();
    const nomEntreprise           = document.getElementById('nomEntreprise').value;
    const motDePassVendeur        = document.getElementById('motDePassVendeur').value;
  
    const objVendeurConnexion = {
        motDePassVendeur,
        nomEntreprise,
    }
    console.log('====================================');
    console.log(objVendeurConnexion);
    console.log('====================================');
    sessionStorage.setItem('objVendeurConnexion', JSON.stringify(objVendeurConnexion));
    
    fetch('/connexionVendeur', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ vendeur: objVendeurConnexion })
    })
    
    })
  