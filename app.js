const express    = require('express');
const app        = express();
const dotenv     = require('dotenv');
const mongoose   = require('mongoose');
const routes     = require('./routes/routes');
dotenv.config({path:'process.env'});
const database = process.env.DATA_BASE ;


mongoose.connect(`${database}`,{useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('connexion a mongodb réussie!'))
        .catch(err => console.log(err,'impossible de se connecter vérifie et réessaie'));

app.set("view engine", "ejs"); 
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use('/',routes);
 
module.exports = app;                                                   
