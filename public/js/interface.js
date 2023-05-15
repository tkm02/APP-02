const    formulaireData = JSON.parse(localStorage.getItem('formulaireData'));

const user = document.getElementById('user');
console.log('====================================');
console.log(formulaireData);
console.log('====================================');
user.textContent = formulaireData.nom;
     