const mongoose = require('mongoose');

const VendeurSchemaVrai = new mongoose.Schema({

    nomVendeur          : {type: String, require:true},
    prenomVendeur       : {type: String, require:true},
    mailVendeur         : {type: String, require:true,unique:true,lowercase: true},
    nomEntreprise       : {type: String, require:true,unique:true,lowercase: true,},
    motDePassVendeur    : {type: String, require:true},
    villeEntreprise     : {type: String, default: "Abidjan"},
    numeroEntreprise    : {type: Number, require:true, unique:true },
    solde               : {type:Number,require:true},
    date                : {type: Date,   default: Date.now},
    
}); 

const Vendeur = mongoose.model("Vendeur",VendeurSchemaVrai);
module.exports= Vendeur;