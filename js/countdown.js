let countdownInitialized = false;
let countdownInterval;

function initCountdown() {

    if (countdownInitialized) return;
    countdownInitialized = true;

    const targetDate = new Date("August 1, 2026 00:00:00").getTime();

    function updateCountdown() {

        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {

            document.getElementById("days").textContent = "0";
            document.getElementById("hours").textContent = "0";
            document.getElementById("minutes").textContent = "0";
            document.getElementById("seconds").textContent = "0";

            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}