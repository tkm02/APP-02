// index.js
const form1 = document.getElementById('form1');

form1.addEventListener('submit', (e) => {
  e.preventDefault();

  const nomVendeur = document.getElementById('nomVendeur').value;
  const prenomVendeur = document.getElementById('prenomVendeur').value;
  const mailVendeur = document.getElementById('mailVendeur').value;

  const objVendeur = {
    nomVendeur,
    prenomVendeur,
    mailVendeur
  }
  localStorage.setItem('objVendeur', JSON.stringify(objVendeur));

  window.location.href = '/InscriptionVendeur2';
});



// let page = document.getElementById('form');
// let btnTerminer = document.getElementById('btnTermine');
// let divAnime = document.getElementById('animation');
// let lottie = document.getElementById('lottie');
// let fin = document.getElementById('fin')

// btnTerminer.addEventListener('click',(e)=>{
//     e.preventDefault();
//     page.style.display='none';
//     divAnime.style.width="100%";
//     lottie.style.display='none';
//     fin.style.display='flex';
// })