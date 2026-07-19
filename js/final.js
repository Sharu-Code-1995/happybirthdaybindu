const button = document.getElementById("celebrate");

button.onclick = () => {

    for(let i=0;i<250;i++){

        const confetti=document.createElement("div");

        confetti.innerHTML=["🎉","🎊","❤️","✨","🌸"][Math.floor(Math.random()*5)];

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.fontSize=(15+Math.random()*20)+"px";

        confetti.style.transition="5s linear";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.style.top="110vh";

        },50);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

    alert("❤️ I Love You, Bindu ❤️");

setTimeout(() => {
    document.body.innerHTML = `
        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            background:#000;
            color:white;
            font-size:40px;
            text-align:center;
            font-family:cursive;">
            ❤️ Thank You ❤️<br>Forever Yours,<br>Sharath
        </div>
    `;
}, 50);
};
window.addEventListener("load",()=>{

    setTimeout(()=>{

        const loader=document.getElementById("loader");

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },600);

    },1200);

});