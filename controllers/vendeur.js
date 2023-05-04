var   code1         = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
const bcrypt        = require('bcrypt');
const Vendeur       = require('../models/vendeur');
 const vendreView = (req,res)=>{
    res.render('vendre');
}
const inscriptionViewVendeur = (req,res)=>{
    res.render('InscriptionVendeur');
}
const inscriptionViewVendeur2 = (req,res)=>{
    res.render('InscriptionVendeur2'); 
}
const inscriptionViewVendeur3 = (req,res)=>{
    res.render('InscriptionVendeur3'); 
    console.log(code1);
}
const tableauDeBordView = (req,res)=>{
    res.render('tableauDeBord'); 
}
const listeEnchereView = (req,res)=>{
    res.render('listeEnchere'); 
}
const ajouteEnchereView = (req,res)=>{
    res.render('ajouteEnchere'); 
}
const listeEnchereTerminerView = (req,res)=>{
    res.render('listeEnchereTerminer'); 
}
const connexionVendeurView = (req,res)=>{
    res.render('connexionVendeur'); 
}


const connexionVendeur = (req,res)=>{
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    // res.send('bien')
}

const InscriptionVendeur3 = (req,res)=>{
    const email         = req.body.vendeur.mailVendeur;
}

const confirmationInscriptionVendeur = (req,res)=>{

    const codeGenerer       = code1;
    const codeSaisie        = req.body.code1;
    // console.log('====================================');
    // console.log(req.body);
    // console.log('====================================');
    // const {nomVendeur,prenomVendeur,mailVendeur,nomEntreprise,villeEntreprise,numeroEntreprise,motDePassVendeur} = req.body.vendeur;
    if ( parseInt(codeSaisie)  === codeGenerer) {
        res.status(200).send({response:'ok'});
        console.log(req.body);
        const saltRounds = 10;
        bcrypt.hash(req.body.vendeur.motDePassVendeur, saltRounds, (err, hash) => {
            if (err) {
              console.log(err);
              return;
            }
            req.body.vendeur.motDePassVendeur = hash;
            const vendeur = new Vendeur({...req.body.vendeur});
            vendeur.save()
            .then(() => {
                console.log('====================================');
                console.log('bien joué');
                console.log('====================================');
            })
            .catch((err) => {
                console.log('====================================');
                console.log(err);
                console.log('====================================');
            });
    });
        
        // res.redirect('/InscriptionVendeur3/save');
        
        //enregistrer le client dans la base de donnée maintenant
    } else { res.sendStatus(400,{response:'error'}) }
}



module.exports ={

    vendreView,
    inscriptionViewVendeur,
    inscriptionViewVendeur2,
    inscriptionViewVendeur3,
    InscriptionVendeur3,
    confirmationInscriptionVendeur,
    tableauDeBordView,
    listeEnchereView,
    ajouteEnchereView,
    listeEnchereTerminerView,
    connexionVendeurView,
    connexionVendeur,

}