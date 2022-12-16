var btnToggle = document.getElementById("toggle");
var body = document.getElementById("root");
var audio = new Audio("./sounds/Jingle-bells-short-intro.mp3");
audio.loop = true;
var flag = 0;
btnToggle.addEventListener("click", function() {
    if (!flag) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
    flag = !flag;
    body.classList.toggle("dark");
});
