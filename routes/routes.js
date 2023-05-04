const express   = require('express');
const router    = express.Router();
const {accueilView}  = require('../controllers/accueil');

const {
    connexionViewUtilisateur,
    inscriptionViewUtilisateur
}  = require('../controllers/utilisateur');

const {
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
}  = require('../controllers/vendeur');




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



router.post('/InscriptionVendeur3',InscriptionVendeur3);
router.post('/InscriptionVendeur3/confirme',confirmationInscriptionVendeur);
router.post('/connexionVendeur',connexionVendeur);



module.exports = router; 