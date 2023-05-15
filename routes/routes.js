const express   = require('express');
const router    = express.Router();
const {accueilView}  = require('../controllers/accueil');
const multer = require("multer");


const {
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
}  = require('../controllers/utilisateur');

const {
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
    enchere_live,
    
}  = require('../controllers/vendeur');

 

router.put('/interfaceUtilisateur/:nom/participer',modifier);


router.get('/',accueilView);
router.get('/connexion',connexionViewUtilisateur);
router.get('/inscription',inscriptionViewUtilisateur);
router.get('/vendre',vendreView)
router.get('/InscriptionVendeur',inscriptionViewVendeur); 
router.get('/InscriptionVendeur2',inscriptionViewVendeur2);
router.get('/InscriptionVendeur3',inscriptionViewVendeur3);
router.get('/tableauDeBord',tableauDeBordView);
router.get('/listeEnchere',listeEnchereView);
router.get('/ajouteEnchere',ajouteEnchereView);
router.get('/listeEnchereTerminer',listeEnchereTerminerView);
router.get('/connexionVendeur',connexionVendeurView);
router.get('/interfaceUtilisateur',interfaceUtilisateur);
router.get('/interfaceUtilisateur/:nom/participer',interfaceUtilisateurParticiper);
router.get('/compteUtilisateur',compteUtilisateur);
router.get('/compteUtilisateur/enchere',enchere);
router.get('/compteUtilisateur2',compteUtilisateur2);
router.get('/enchere_live',enchere_live);
router.get('/live', live);
router.get('/formulaire_payement',formulaire_payement);
router.get('/condition',condition);



router.post('/InscriptionVendeur3',InscriptionVendeur3);
router.post('/InscriptionVendeur3/confirme',confirmationInscriptionVendeur);
router.post('/connexionVendeur',connexionVendeur);
router.post('/tableauDeBord',tableauDeBord);
router.post('/ajouteEnchere',ajouteEnchere);
router.post('/listeEnchere',listeEnchere);
router.post('/inscription',inscription);
router.post('/connexion',connexion);
router.post('/interfaceUtilisateur',interUtilisateur);










module.exports = router; 