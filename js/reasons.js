let reasonsInitialized = false;

function initReasons() {

    if (reasonsInitialized) return;
    reasonsInitialized = true;

    const reasons = [
        "Your beautiful smile lights up my world.",
        "You always believe in me.",
        "You make ordinary days extraordinary.",
        "I love how caring you are.",
        "You make me laugh.",
        "You understand me without words.",
        "You inspire me to be better.",
        "Your kindness is beautiful.",
        "I love every conversation with you.",
        "You're my peace.",
        "You make every journey special.",
        "You support my dreams.",
        "You are incredibly strong.",
        "You have a beautiful heart.",
        "You are my favourite person.",
        "I love making memories with you.",
        "You make me feel lucky.",
        "You bring happiness wherever you go.",
        "You are thoughtful.",
        "You make life colourful.",
        "I admire your confidence.",
        "You are my best friend.",
        "I feel at home with you.",
        "You make me believe in forever.",
        "I simply love you for being you. ❤️"
    ];

    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    reasons.forEach((reason, index) => {

        const card = document.createElement("div");
        card.className = "reason-card";
        card.style.background = "#ff4d6d";
        card.style.color = "white";
        card.style.height = "220px";

        card.innerHTML = `
            <div class="reason-inner">
                <div class="reason-front">${index + 1}</div>
                <div class="reason-back">${reason}</div>
            </div>
        `;

        card.addEventListener("click", () => {
            card.classList.toggle("flip");
        });

        grid.appendChild(card);
    });

}