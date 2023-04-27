// const Mailgun       = require('mailgun.js');
const nodemailer = require('nodemailer');
// const formData      = require('form-data');
// const mailgun       = new Mailgun(formData);
const dotenv        = require('dotenv');
dotenv.config({path:'process.env'});
// const MAILGUN_KEY   = process.env.MAILGUN_KEY;
// const mg            = mailgun.client({username: 'api', key: `${MAILGUN_KEY}`});
// const DOMAIN        = process.env.DOMAIN;
var   code1         = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    tls:{
        rejectUnauthorized: false,
        ciphers:"SSLv3",
    },
    auth: {
        user: 'mamadoutuo77@gmail@gmail.com',
        pass: 'enbkpizrsheeqiun'
    }
});
 

const vendreView = (req,res)=>{
    res.render('vendre');
}
const inscriptionViewVendeur = (req,res)=>{
    res.render('InscriptionVendeur');
}
const inscriptionViewVendeur2 = (req,res)=>{
    res.render('InscriptionVendeur2'); 
}
const inscriptionViewVendeur3 = (req,res)=>{
    res.render('InscriptionVendeur3'); 
    console.log(code1);
}
const tableauDeBordView = (req,res)=>{
    res.render('tableauDeBord'); 
    // console.log(code1)
}


const InscriptionVendeur3 = (req,res)=>{
    
    const email         = req.body.vendeur.mailVendeur;
    let mailOptions = {
        from: 'mamadoutuo77@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Confirmation Mail", // Subject line
        text: `Votre code de confirmation est ${code1}`, // plain text body
        html: "<h1>Votre code de confirmation est</h1>"+` ${code1}` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error); 
        } else {
            console.log('Message sent: %s', info.messageId);
        }
    });

}

const confirmationInscriptionVendeur = (req,res)=>{

    const codeGenerer       = code1;
    const codeSaisie        = req.body.code1;
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    // const {nomVendeur,prenomVendeur,mailVendeur,nomEntreprise,villeEntreprise,numeroEntreprise,motDePassVendeur} = req.body.vendeur;
    if ( parseInt(codeSaisie)  === codeGenerer) {
        res.status(200).send({response:'ok'});
        // res.redirect('/InscriptionVendeur3/save');
        
        //enregistrer le client dans la base de donnée maintenant
    } else { res.sendStatus(400,{response:'error'}) }
}

const enregistrementVendeur = (req,res)=>{
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
}

module.exports ={

    vendreView,
    inscriptionViewVendeur,
    inscriptionViewVendeur2,
    inscriptionViewVendeur3,
    InscriptionVendeur3,
    confirmationInscriptionVendeur,
    enregistrementVendeur,
    tableauDeBordView

}