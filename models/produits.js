const mongoose = require('mongoose');


const produitSchema = new mongoose.Schema({

    nom                     : {type: String,required: true,unique:true},
    date_debut              : {type: Date,   default: Date.now},
    montant_initial         : {type: Number,required: true},
    image                   : {type: String, data:Buffer,required: true,},
    description             : {type: String,required: true,},
    vendeur                 : {type: mongoose.Types.ObjectId,ref: 'Vendeur',required: true},
    participants            : [{ type: mongoose.Types.ObjectId, ref: 'Client' }],
    meilleure_proposition   : {type: Number, default: 0},
    est_termine             : { type: Boolean, default: false },
    categorie               : {type: String, require:true},


});

const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit; 
