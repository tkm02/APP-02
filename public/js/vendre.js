// let btnSouscription = document.querySelectorAll('.btn-souscription');
// let containerIncription = document.getElementById('container-inscription');
// let offreDemande = document.getElementById('offre-demande');
// let type= document.getElementById('type-offre');
// let nomType = document.createElement('span');
// let btnDemarreInscription = document.getElementsByClassName("btn-demarer-inscription");
// nomType.textContent='Basic';
// nomType.classList.add('nom-type');
// type.classList.add('type-offre');
// type.appendChild(nomType);


// let objetInfo = {
//     "basic" : {
//         'avantage':[
//             'piege',
//             'Lorem ipsum dolor sit , adipisicing elit.',
//             'Lorem  amet consectetur, adipisicing elit.',
            
//         ],
//     'limite':[
//         'Lorem ipsum dolor sit amet consectetur, adipisicing 8.',
//         'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//         'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//     ],
        
//     },
//     "prenium" : {
//         'avantage':[
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//         ],
//         'limite':[
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//         ],
        
//     },
//     "vip" : {
//         'avantage':
//             [
//                 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//                 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//                 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//                 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//             ],
//         'limite':[
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//         ],
        
//     },
// }

// let tabBasic = Object.entries(objetInfo.basic);
// let tabPrenium = Object.entries(objetInfo.prenium);
// let tabVip = Object.entries(objetInfo.vip);

// let modeleInfo = document.getElementById('modele-info');
// let texteInfo = document.querySelectorAll('.texte-info');
// let icon = document.querySelectorAll('.fa-sharp ');




// btnSouscription.forEach(el => el.addEventListener('click',(e)=>{
//         const typeOffre = el.getAttribute('data-offre');

//         switch (typeOffre) {
//             case "basic":
//                 tabBasic.forEach((el)=> {
//                     if (el[0] == 'avantage') {
//                         let tabInter = el[1];
//                             texteInfo.forEach((texte,index)=>{
//                                 if (index <= 2) {
//                                     icon[index].classList.add('fa-circle-check');
//                                 }
//                                 texte.textContent = tabInter[index];
//                             })
//                     }
//                     else if(el[0] == 'limite'){
//                         let tabInter = el[1];
//                         texteInfo.forEach((texte,index)=>{
//                             let nvIndex = index+3;
//                             if (index <= 2) {
//                                 icon[nvIndex].classList.add('fa-circle-xmark');
//                             }
//                                 texte.textContent = tabInter[index];
//                         })
//                     }
//                 })
//                 type.classList.add('type-offre-1'); 
//                 nomType.textContent = typeOffre;
//                 break;
//             case "prenium":             
//                 type.classList.add('type-offre-2');   
//                 nomType.textContent = typeOffre;
//                 break;
//             case "vip":            
//                 type.classList.add('type-offre-3');   
//                 nomType.textContent = typeOffre;
//             default:
//                 break;
//         }
// }));


