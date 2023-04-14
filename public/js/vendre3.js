
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
    // Get the code entered by the user
    const enteredCodeMail = codeInputs[0].value + codeInputs[1].value + codeInputs[2].value + codeInputs[3].value;
    const enteredCodeNumero = codeInputs[4].value + codeInputs[5].value + codeInputs[6].value + codeInputs[7].value;
    console.log('====================================');
    console.log(enteredCodeMail);
    console.log(enteredCodeNumero);
    console.log('====================================');
    // Get the email address and phone number entered by the user
    const objVendeur = JSON.parse(localStorage.getItem('objVendeur'));

    // Send the code and contact information to the server
    fetch('/InscriptionVendeur3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code1: enteredCodeMail, code2: enteredCodeNumero, vendeur: objVendeur })
    })
    .then(response => {
      if (response.ok) {
        // Code is correct, do something
        console.log('Code is correct');
      } else {
        // Code is incorrect, do something
        console.log('Code is incorrect');
      }
    })
    .catch(error => {
      console.error('Error sending verification code:', error);
    });
  }
});
