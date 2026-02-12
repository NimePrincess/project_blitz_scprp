const music = document.getElementById("music");
const volume = document.getElementById("volume");

// стартовая громкость
music.volume = volume.value / 100;

// GitHub Pages + браузеры требуют взаимодействие
document.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    }
}, { once: true });

// изменение громкости
volume.addEventListener("input", () => {
    music.volume = volume.value / 100;
});