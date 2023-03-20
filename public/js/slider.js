let slider = document.getElementsByClassName("slider");
let message = document.getElementById('message');
// let suivant = document.querySelector(".suivant");
// let precedent = document.querySelector(".precedent");

let etap = 0 ;
const msg = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, iure..","Lorem ipsum dolor, sit amet consectetur adipisicing","Lorem ipsum dolor,","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, iure..","Lorem ipsum dolor, sit amet consectetur ","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,"];
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



