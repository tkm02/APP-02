



const connexionViewUtilisateur = (req,res)=>{
    res.render('connexionUtilisateur');
}

const inscriptionViewUtilisateur = (req,res)=>{
    res.render('inscriptionUtilisateur'); 
}


module.exports ={
    connexionViewUtilisateur,
    inscriptionViewUtilisateur
    
}
