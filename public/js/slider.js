let slider = document.getElementsByClassName("slider");
let message = document.getElementById('message');
// let suivant = document.querySelector(".suivant");
// let precedent = document.querySelector(".precedent");

let etap = 0 ;
const msg = ["Bienvenue sur notre site ! Découvrez notre gamme de produits de haute qualité.",
"Explorez un monde de possibilités avec notre entreprise. Trouvez tout ce dont vous avez besoin en un seul endroit.",
"Simplifiez votre vie avec nos solutions innovantes. Faites confiance à notre expertise pour répondre à vos besoins.",
"Rejoignez notre communauté et profitez d'offres exclusives. Découvrez une expérience d'achat unique et personnalisée.",
"Faites un pas vers l'excellence. Découvrez notre entreprise et laissez-nous vous accompagner vers la réussite."];
 message.textContent = msg[0];
 
let nbre__slider= slider.length;

function enleverClass(){
    for(let i = 0; i < nbre__slider; i++){
        slider[i].classList.remove('active');
    }
};

setInterval(() =>{
    etap++;
    if(etap >= nbre__slider){
        etap=0;
    }
    enleverClass();
    slider[etap].classList.add("active");
    message.textContent = msg[etap];
},5000);

// suivant.addEventListener('click',function(){
//     etap++;
//     if(etap >= nbre__slider){
//         etap=0;
//     }
//     enleverClass();
//     slider[etap].classList.add("active");
// });

// precedent.addEventListener('click',function(){
//     etap--;
//     if(etap < 0){
//         etap =nbre__slider-1;
//     }
//     enleverClass();
//     slider[etap].classList.add('active')
// });



