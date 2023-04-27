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
    enregistrementVendeur,
    tableauDeBordView,
}  = require('../controllers/vendeur');




router.get('/',accueilView);
router.get('/connexion',connexionViewUtilisateur);
router.get('/inscription',inscriptionViewUtilisateur);
router.get('/vendre',vendreView)
router.get('/InscriptionVendeur',inscriptionViewVendeur); 
router.get('/InscriptionVendeur2',inscriptionViewVendeur2);
router.get('/InscriptionVendeur3',inscriptionViewVendeur3);
router.get('/tableauDeBord',tableauDeBordView);

router.post('/InscriptionVendeur3',InscriptionVendeur3);
router.post('/InscriptionVendeur3/confirme',confirmationInscriptionVendeur);
router.post('/InscriptionVendeur3/save',enregistrementVendeur);


module.exports = router;