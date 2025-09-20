const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();
const current_year= document.querySelector('#current_year');
current_year.textContent= `Last modification ${month}/${day}/${year} at ${hours}:${minutes}:${seconds}`;
current_year.style.fontSize= '0.75em';
current_year.style.textAlign= 'center';
current_year.style.color= 'black';

// hamberbuger 
let menu = document.querySelector('#menu');
let navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    navigation.classList.toggle('open');
});
