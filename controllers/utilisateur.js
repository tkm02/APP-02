const User          = require('../models/utilisateur');
const Produit       = require('../models/produits');
const bcrypt        = require('bcrypt');
const Vendeur       = require('../models/vendeur')
const connexionViewUtilisateur = (req,res)=>{
    res.render('connexionUtilisateur',{});
}
const live = (req,res)=>{
    res.render('live',{}); 
}
const inscriptionViewUtilisateur = (req,res)=>{
    res.render('inscriptionUtilisateur',{}); 
}
// /interfaceUtilisateur/${nom}/participer
const modifier = (req, res) => {
    // const nom               = req.params.nom;
    const nouveauPrix       = req.body.nouveauMontant.nouveauPrix;
    const nom               = req.params.nom;
    
        // Trouver le produit correspondant au nom dans la base de données
        Produit.findOne({ nom: nom })
            .then(prod => {
                // console.log(prod);
                prod.meilleure_proposition = nouveauPrix;
                prod.save();
                // res.send(prod);
            }) 


        // Mettre à jour le montant de l'enchère
        // produit.meilleur_proposition = nouveauPrix;
    
    
}

const interfaceUtilisateur = (req,res)=>{
    console.log(req.body);
    Produit.find()
        .then(produit=>{
            console.log('====================================');
            // console.log(produit); 
            console.log('====================================');

            res.render('interfaceUtilisateur',{produit}); 
        })
    // console.log(req.body);
}
const interUtilisateur = (req,res)=>{
    console.log(req.body);
    Produit.find()
        .then(produit=>{
            console.log('====================================');
            // console.log(produit); 
            console.log('====================================');

            res.render('interfaceUtilisateur',{produit}); 
        })
    // console.log(req.body);
}
const interfaceUtilisateurParticiper = (req,res)=>{
    const nomProduit = req.params.nom;

  Produit.findOne({ nom: nomProduit })
    .then((produit) => {
      if (!produit) {
        return res.status(404).send({ message: 'Produit non trouvé' });
      }

      res.render('interfaceUtilisateurParticiper',{produit}); 
    // res.send({produit})

    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
    // console.log(req.body);

}
const compteUtilisateur = (req,res)=>{
    res.render('compteUtilisateur'); 
    // console.log(req.body);

}
const enchere = (req,res)=>{
    res.render('enchere'); 
    // console.log(req.body);

}
const compteUtilisateur2 = (req,res)=>{
    res.render('compteUtilisateur2'); 
    // console.log(req.body);

}
const formulaire_payement = (req,res)=>{
    res.render('formulaire_payement'); 
    // console.log(req.body);

}


const inscription = (req,res)=>{
    // console.log(req.body);
    const saltRounds = 10;
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if (err) {
              console.log(err);
              return;
            }
            const min = 300000;
            const max = 3000000;
            const randomSolde = Math.floor(Math.random() * (max - min + 1)) + min;
            req.body.password = hash;
            const user = new User({
                nom: req.body.nom,
                prenom: req.body.prenom,
                numero: req.body.numero,
                email: req.body.email,
                password: req.body.password,
                accepteCondition: req.body.accepteCondition,
                accepteNewsletter: req.body.accepteNewsletter,
                solde:randomSolde,
            });
            user.save()
            .then(() => {
                console.log('====================================');
                console.log('bien joué');
                res.redirect('/interfaceUtilisateur');
                // res.render('interfaceUtilisateur',{user});
                console.log('====================================');
            })
            .catch((err) => {
                console.log('====================================');
                console.log(err);
                console.log('====================================');
            });
    });
    
} 

const connexion = (req,res)=>{
    const {email,password} = req.body;
    User.findOne({ email }) 
        .then(user=>{
            const hash = user.password;
            bcrypt.compare(password, hash, (err, result) => {
                  if (err) {
                    console.log(err);
                    return res.status(500).json({ message: 'Une erreur est survenue' });
                }
                  if (!result) {
                    return res.status(401).json({ message: 'Mot de passe incorrect' });
                }  
                // res.status(200).send({response:'ok'});
                // res.render('interfaceUtilisateur',{user});
                res.redirect('/interfaceUtilisateur');
                // res.json({user});
                // res.render('interfaceUtilisateur',{user}); 
        })
})    
} 

const condition = (req,res)=>{
    res.render("conditions")
}



module.exports ={
    connexionViewUtilisateur,
    inscriptionViewUtilisateur,
    inscription,
    interfaceUtilisateur,
    connexion,
    interfaceUtilisateurParticiper,
    compteUtilisateur,
    enchere,
    compteUtilisateur2,
    modifier,
    formulaire_payement,
    interUtilisateur,
    live,
    condition
    
} 
