// Боковой текст
const sideData = `
ACCESS LEVEL 4 REQUIRED
OVERRIDE DENIED
CONTAINMENT ACTIVE
DATA ENCRYPTED
OMEGA UNIT READY
PROTOCOL 7 INITIALIZED
SECURITY CLEARANCE OK
BREACH STATUS: FALSE
`;

document.querySelector('.left').innerText = sideData.repeat(12);
document.querySelector('.right').innerText = sideData.repeat(12);

// Анимация печати
const text = "Загрузка протоколов безопасности...";
const el = document.getElementById("loadingText");
let i = 0;

function typeEffect(){
  if(i <= text.length){
    el.textContent = text.slice(0,i);
    i++;
    setTimeout(typeEffect,70);
  } else {
    setTimeout(()=>{
      i=0;
      typeEffect();
    },1500);
  }
}
typeEffect();

// Музыка
const music = document.getElementById("bg-music");
music.volume = 0.25;

// попытка автозапуска
window.addEventListener("load", () => {
  music.play().catch(()=>{});
});

// запуск по клику (обход блокировки браузера)
document.addEventListener("click", () => {
  music.play();
});