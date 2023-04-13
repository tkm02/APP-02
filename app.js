const express = require('express');
const app = express();


app.set("view engine", "ejs");
app.use(express.json());


app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render("accueil")
});
app.get('/connexion',(req,res)=>{
    res.render('connexionUtilisateur');
})
app.get('/inscription',(req,res)=>{
    res.render('inscriptionUtilisateur');
})
app.get('/vendre',(req,res)=>{
    res.render('vendre');
})
app.get('/InscriptionVendeur',(req,res)=>{
    res.render('InscriptionVendeur');
})
app.get('/InscriptionVendeur2',(req,res)=>{
    res.render('InscriptionVendeur2');
})
app.get('/InscriptionVendeur3',(req,res)=>{
    res.render('InscriptionVendeur3'); 
})
    




module.exports = app;                                                   
