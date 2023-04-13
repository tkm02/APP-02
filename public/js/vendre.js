let page = document.getElementById('form');
let btnTerminer = document.getElementById('btnTermine');
let divAnime = document.getElementById('animation');
let lottie = document.getElementById('lottie');
let fin = document.getElementById('fin')

btnTerminer.addEventListener('click',(e)=>{
    e.preventDefault();
    page.style.display='none';
    divAnime.style.width="100%";
    lottie.style.display='none';
    fin.style.display='flex';
})