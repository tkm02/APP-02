const express = require('express');
const nodemailer = require('nodemailer');
const app = express();


app.set("view engine", "ejs");
app.use(express.json());


app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render("accueil")
});
app.get('/connexion',(req,res)=>{
    res.render('connexionUtilisateur');
})
app.get('/inscription',(req,res)=>{
    res.render('inscriptionUtilisateur');
})

app.get('/vendre',(req,res)=>{
    res.render('vendre');
})

app.get('/InscriptionVendeur',(req,res)=>{
    res.render('InscriptionVendeur');
}); 

// app.post('/InscriptionVendeur2', (req, res) => {
//     const {nomVendeur,prenomVendeur,mailVendeur} = req.body;
//     res.redirect(`/InscriptionVendeur2?nomVendeur=${nomVendeur}&prenomVendeur=${prenomVendeur}&mailVendeur=${mailVendeur}`);
// });


// app.post('/InscriptionVendeur3',(req,res)=>{
//     const {nomEntreprise,villeEntreprise,numeroEntreprise} = req.body;

// })

app.get('/InscriptionVendeur2',(req,res)=>{
    res.render('InscriptionVendeur2'); 
});

app.get('/InscriptionVendeur3',(req,res)=>{
    res.render('InscriptionVendeur3'); 
});

app.post('/InscriptionVendeur3',(req,res)=>{
    
    const email = req.body.vendeur.mailVendeur;
  const phone = req.body.vendeur.numeroEntreprise;

  // Generate a random 4-digit code
  const code1 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
  const code2 = Math.floor(Math.random() * (9989 - 1000 + 1) + 1000);
  let testAccount = nodemailer.createTestAccount();
  // Send the code by email
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: testAccount.user,
        pass: testAccount.pass
    },
    tls: {
        rejectUnauthorized: false,
        ciphers:"SSLv3"
      }
});
const mailOptions = {
    from: 'mamadoutuo77@gmail.com',
    to: email,
    subject: 'Confirmation code',
    text: `Ton code de confirmation : ${code1}`,
  }; 

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }

})
})
    




module.exports = app;                                                   
