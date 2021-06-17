let text=document.getElementById('text');
let bird1=document.getElementById('bird1');
let bird2=document.getElementById('bird2');
let rocks=document.getElementById('rocks');
let forest=document.getElementById('forest');
let btn=document.getElementById('btn');
let water=document.getElementById('water');
let header=document.getElementById('header');


window.addEventListener('scroll',function(){
    let value = window.scrollY;

    text.style.top= 50+ value * -0.5 + '%';
    bird1.style.top=50+ value * -1.5 + 'px';
    // text.style.top=50+ value * -0.5 + "%";

})