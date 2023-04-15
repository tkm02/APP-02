let page        = document.getElementById('form');
let p           = document.getElementById('info');
let divAnime    = document.getElementById('animation');
let lottie      = document.getElementById('lottie');
let fin         = document.getElementById('fin');


const codeInputs = document.querySelectorAll('.code-input');

codeInputs.forEach((input, index) => {

  input.addEventListener('input', () => {

    if (input.value.length === 1) {

      if (index < codeInputs.length - 1) {

        codeInputs[index + 1].focus();

      }
    }
  });
});


codeInputs[codeInputs.length - 1].addEventListener('input', () => {

  if (codeInputs[codeInputs.length - 1].value.length === 1) {

    const codeMail   = codeInputs[0].value + codeInputs[1].value + codeInputs[2].value + codeInputs[3].value;
    const objVendeur = JSON.parse(localStorage.getItem('objVendeur'));

    fetch('/InscriptionVendeur3/confirme', {

      method: 'POST',
      headers: {

        'Content-Type': 'application/json'

      },

      body: JSON.stringify({ code1: codeMail,vendeur: objVendeur })

    })
    .then(response => {

      if (response.ok) {

        console.log(' le Code est correct');
        page.style.display='none';
        divAnime.style.width="100%";
        lottie.style.display='none';
        fin.style.display='flex';

        setTimeout(() => {

            window.location.href='/....';

        }, 3000);
        
      } else {

        console.log('Code is incorrect');
        p.textContent =  'Code incorrecte ' ;

        setTimeout(() => {

            p.textContent='';
            codeInputs.forEach((input) => {

                input.value = '';
                
            });
              codeInputs[0].focus();
        }, 2000);

      }
    })
    .catch(error => { console.error('Error sending verification code:', error); });
  }
});
