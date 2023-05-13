const User = require('../models/utilisateur');
const bcrypt        = require('bcrypt');

const connexionViewUtilisateur = (req,res)=>{
    res.render('connexionUtilisateur',{});
}

const inscriptionViewUtilisateur = (req,res)=>{
    res.render('inscriptionUtilisateur',{}); 
}
const interfaceUtilisateur = (req,res)=>{
    res.render('interfaceUtilisateur'); 
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
            req.body.password = hash;
            const user = new User({...req.body});
            user.save()
            .then(() => {
                console.log('====================================');
                console.log('bien joué');
                res.redirect('/interfaceUtilisateur');
                res.render('interfaceUtilisateur',{user});
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
                res.render('interfaceUtilisateur',{user});



        })
})    
}




module.exports ={
    connexionViewUtilisateur,
    inscriptionViewUtilisateur,
    inscription,
    interfaceUtilisateur,
    connexion,
    
}
