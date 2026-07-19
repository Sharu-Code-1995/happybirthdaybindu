// ===============================
// HOME PAGE
// ===============================

// Typewriter Text
const message =
"Every love story is beautiful, but ours is my favourite. ❤️";

let i = 0;

function typeWriter() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    if (i < message.length) {

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 50);

    }

}

// Start typing after page loads
window.addEventListener("DOMContentLoaded", () => {
    typeWriter();
});


// ===============================
// FLOATING HEARTS
// ===============================

const heartsContainer = document.getElementById("hearts");

if (heartsContainer) {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (18 + Math.random() * 18) + "px";
        heart.style.animationDuration = (5 + Math.random() * 4) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9000);

    }, 400);

}


// ===============================
// START BUTTON
// ===============================

window.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("startBtn");

    if (!startBtn) return;

    startBtn.addEventListener("click", () => {

        alert("Welcome to our beautiful journey ❤️");

        showPage("story");

    });

});