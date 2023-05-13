var   code1         = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
const bcrypt        = require('bcrypt');
const Vendeur       = require('../models/vendeur');
const Produits      = require('../models/produits');
const fs            = require('fs');

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
// Vendeur.find().then(vendeur=>console.log(vendeur))


const tableauDeBord = (req,res)=>{
    Vendeur.find()
        .then(vendeur=>{
            const {motDePassVendeur,nomEntreprise} = req.body.vendeur;
            vendeur.forEach(vend => {
                if(vend.nomEntreprise === nomEntreprise.toLowerCase()){
                    // console.log(vend);
                    res.statusCode =200;
                    res.json({vend}); 
                    // console.log("Bien");  
                    return;
                } 
            });
        })
}


const ajouteEnchere = (req,res)=>{

    Vendeur.find()
        .then(vendeur=>{
            const {motDePassVendeur,nomEntreprise} = req.body.objVendeurConnexion;

            vendeur.forEach(vend => {
                if(vend.nomEntreprise === nomEntreprise.toLowerCase()){
                    const vendeurId =  vend._id;
                    console.log(req.body.produits.nomProduit);
                    const {nomProduit,dateDebut,montantInitial,image,description} = req.body.produits ;
                    const imageData = fs.readFileSync(image);
                    const imageBinary = imageData.toString('binary');
                    const produit = new Produits({
                        nom: nomProduit,
                        date_debut: dateDebut,
                        montant_initial: montantInitial,
                        image,
                        description,
                        vendeur: vendeurId,
                });     
                   produit.save()
                    .then(() => res.redirect('/ajouteEnchere'))
                    .catch(err => console.log(err));

                } 
            });
        })

   

   
  

    
    
}
const tableauDeBordView = (req,res)=>{
    res.render('tableauDeBord'); 
}
const listeEnchere = (req,res)=>{
    const { motDePassVendeur,nomEntreprise } = req.body.vendeur;
    // console.log(req.body);
    Vendeur.find({nomEntreprise})
    .then(vendeurs => {
        console.log(vendeurs)
      vendeurs.forEach((vendeur) => {
        const vendeurId = vendeur._id;
        Produits.find({ vendeur: vendeurId })
          .then((produits) => {
            const produitsVendeur = produits.map((produit) => ({
              nom: produit.nom,
              date_debut: produit.date_debut,
              montant_initial: produit.montant_initial,
              image: produit.image,
              meilleure_proposition:produit.meilleure_proposition,
              vendeur: vendeur.nomEntreprise,
            }));
            
            res.status(200).json({produitsVendeur}) 
            // console.log(produitsVendeur);
          })
          .catch((err) => console.log(err));
      }); 
})
}
const listeEnchereView = (req,res)=>{
    res.render('listeEnchere')
    
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
    const {nomEntreprise,motDePassVendeur} = req.body.vendeur;
    Vendeur.findOne({ nomEntreprise }) 
        .then(vendeur=>{
            const hash = vendeur.motDePassVendeur;
            bcrypt.compare(motDePassVendeur, hash, (err, result) => {
                  if (err) {
                    console.log(err);
                    return res.status(500).json({ message: 'Une erreur est survenue' });
                }
                  if (!result) {
                    return res.status(401).json({ message: 'Mot de passe incorrect' });
                }  
                // res.status(200).send({response:'ok'});
                res.render('tableauDeBord')
        })
} 
)}

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
    tableauDeBord,
    listeEnchereView,
    listeEnchere,
    ajouteEnchereView,
    ajouteEnchere,
    listeEnchereTerminerView,
    connexionVendeurView,
    connexionVendeur,

}