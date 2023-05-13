const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: {type: String,required: true},
  prenom: {type: String,required: true},
  numero: {type: String,required: true},
  email: {type: String,required: true,unique: true},
  password: {type: String,required: true},
  accepteCondition: {type: String,required: true},
  accepteNewsletter: {type: String,required: true},
  produits: [{type: mongoose.Schema.Types.ObjectId,ref: 'Produit'}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
