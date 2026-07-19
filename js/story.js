const cards=document.querySelectorAll(".reveal");

function reveal(){

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

window.addEventListener("load",()=>{

    setTimeout(()=>{

        const loader=document.getElementById("loader");

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },600);

    },1200);

});