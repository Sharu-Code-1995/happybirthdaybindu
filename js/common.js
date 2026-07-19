// Fade In
window.addEventListener("load",()=>{

    document.body.classList.add("page-loaded");

});

// Fade Out

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",function(e){

        const href=this.getAttribute("href");

        if(!href || href.startsWith("#")) return;

        e.preventDefault();

        document.body.classList.remove("page-loaded");

        setTimeout(()=>{

            window.location=href;

        },500);

    });

});

window.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    if (!music || !btn) return;

    // Restore saved position
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // Restore play state
    const isPlaying = localStorage.getItem("musicPlaying") === "true";

    if (isPlaying) {
        music.play().catch(() => {});
        btn.innerHTML = "⏸️";
    }

    btn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            localStorage.setItem("musicPlaying", "true");
            btn.innerHTML = "⏸️";
        } else {
            music.pause();
            localStorage.setItem("musicPlaying", "false");
            btn.innerHTML = "🎵";
        }
    });

    // Save current playback position
    setInterval(() => {
        localStorage.setItem("musicTime", music.currentTime);
    }, 1000);
});
function showPage(pageId){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    updateProgress(pageId);

    switch(pageId){

        case "story":
            if(window.initStory) initStory();
            break;

        case "gallery":
            if(window.initGallery) initGallery();
            break;

        case "countdown":
            if(window.initCountdown) initCountdown();
            break;

        case "gifts":
            if(window.initGifts) initGifts();
            break;

        case "reasons":
            if(window.initReasons) initReasons();
            break;

        case "letter":
            if(window.initLetter) initLetter();
            break;

        case "final":
            if(window.initFinal) initFinal();
            break;
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
function updateProgress(pageId) {

    const progress = {
        home: 10,
        story: 22,
        gallery: 35,
        countdown: 50,
        gifts: 65,
        reasons: 80,
        letter: 90,
        final: 100
    };

    document.querySelector(".progress-bar").style.width =
        progress[pageId] + "%";
}