let letterInitialized = false;

function initLetter() {

    if (letterInitialized) return;
    letterInitialized = true;

    const text = `

Happy Birthday, My Love ❤️

Today is all about celebrating the wonderful person you are.

Thank you for filling my life with happiness, laughter, and unforgettable memories.

Every moment with you has become one of my favourite memories.

Your smile brightens my darkest days.
Your kindness inspires me.
Your love makes me a better person.

I don't know what the future holds, but I know one thing...

I want you beside me for every adventure, every celebration, every challenge, and every beautiful moment.

Thank you for being you.

Happy 25th Birthday, Bindu.

I love you more than words can ever express.

❤️
`;

    const message = document.getElementById("message");
    message.innerHTML = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            message.innerHTML += text.charAt(i);

            i++;

            setTimeout(type, 35);

        }

    }

    type();

}