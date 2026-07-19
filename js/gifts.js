let giftsInitialized = false;

function initGifts() {

    if (giftsInitialized) return;
    giftsInitialized = true;

    const messages = [
        "🌹 A rose for your beautiful smile.",
        "☕ A coffee date with me.",
        "🍫 Your favourite chocolate.",
        "📖 A book you'll love.",
        "💌 A handwritten love letter.",
        "💍 A promise to always care for you.",
        "🎵 Our favourite playlist.",
        "🌄 A future trip together.",
        "📸 More beautiful memories.",
        "🤗 Unlimited hugs.",
        "😘 Endless kisses.",
        "🎂 Birthday cake made with love.",
        "🌙 Late-night conversations.",
        "🍕 A surprise dinner date.",
        "🧸 A cute teddy bear.",
        "💖 My heart forever.",
        "🌟 Dreams we'll achieve together.",
        "🎬 A movie night.",
        "🛍️ Shopping with you.",
        "💐 Fresh flowers.",
        "😊 Your smile every day.",
        "🌈 Happiness together.",
        "❤️ My respect and trust.",
        "💞 A lifetime of love.",
        "♾️ You are my greatest gift."
    ];

    const grid = document.getElementById("giftGrid");
    grid.innerHTML = "";

    messages.forEach((msg, index) => {

        const gift = document.createElement("div");
        gift.className = "gift";

        gift.innerHTML = `
        <div class="gift-inner">
             <div class="gift-front">
             <div>🎁</div>
        <h3>Gift ${index + 1}</h3>
         </div>

            <div class="gift-back">
            <h3>Gift ${index + 1}</h3>
            <p>${msg}</p>
        </div>
        </div>
        `;

        gift.addEventListener("click", () => {
            gift.classList.toggle("open");
        });

        grid.appendChild(gift);

    });

}