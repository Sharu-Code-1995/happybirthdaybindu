let galleryInitialized = false;

function initGallery() {

    if (galleryInitialized) return;
    galleryInitialized = true;

    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const preview = document.getElementById("preview");
    const close = document.getElementById("close");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    let current = 0;

    function show(index) {
        current = index;
        preview.src = images[index].src;
        lightbox.style.display = "flex";
    }

    images.forEach((img, index) => {
        img.onclick = () => show(index);
    });

    close.onclick = () => {
        lightbox.style.display = "none";
    };

    next.onclick = () => {
        current = (current + 1) % images.length;
        show(current);
    };

    prev.onclick = () => {
        current = (current - 1 + images.length) % images.length;
        show(current);
    };

    document.addEventListener("keydown", (e) => {

        if (lightbox.style.display !== "flex") return;

        if (e.key === "ArrowRight") next.click();
        if (e.key === "ArrowLeft") prev.click();
        if (e.key === "Escape") close.click();

    });

}