const express           = require('express');
const app               = express();
const Vendeur           = require('./models/vendeur')
const DOMAIN            = 'sandboxc2467ce6ab9142f9b6268aa9eb44e68f.mailgun.org';
const formData          = require('form-data');
const Mailgun           = require('mailgun.js');
const mailgun           = new Mailgun(formData);
const mg                = mailgun.client({username: 'api', key: 'dea8743e705ae7d77d329e7399cbb9cf-2cc48b29-b90a0233'});
var code1               = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
const mongoose          = require('mongoose');
const bcrypt          = require('bcrypt');

mongoose.connect(`mongodb://tuo:hVcEyGxXnNw1bb6S@127.0.0.1/APP_02`,{useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('connexion a mongodb réussie!'))
        .catch(err => console.log(err,'impossible de se connecter vérifie et réessaie'));

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



app.get('/InscriptionVendeur2',(req,res)=>{
    res.render('InscriptionVendeur2'); 
});

app.get('/InscriptionVendeur3',(req,res)=>{
    res.render('InscriptionVendeur3'); 
    console.log(code1);

});

app.post('/InscriptionVendeur3',(req,res)=>{
    
    const email         = req.body.vendeur.mailVendeur;
    const messageData   = {

        from: "mamadoutuo77@gmail.com",
        to: email,
        subject: "Confirmation Mail",
        text: `Votre code de confirmation est ${code1}`,
        html: "<h1>Votre code de confirmation est</h1>"+` ${code1}`,

    }

    mg.messages.create(DOMAIN, messageData)
    .then((res) => {console.log(res);})
    .catch((err) => { console.error(err);});

});


app.post('/InscriptionVendeur3/confirme',(req,res)=>{

    const codeGenerer       = code1;
    const codeSaisie        = req.body.code1;
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    const {nomVendeur,prenomVendeur,mailVendeur,nomEntreprise,villeEntreprise,numeroEntreprise,motDePassVendeur} = req.body.vendeur;
    if ( parseInt(codeSaisie)  === codeGenerer) {
        res.status(200).send({response:'ok'});
        // res.redirect('/InscriptionVendeur3/save');
        
        //enregistrer le client dans la base de donnée maintenant
    } else { res.sendStatus(400,{response:'error'}) }
})

app.post('/InscriptionVendeur3/save',(req,res)=>{
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
})

module.exports = app;                                                   
