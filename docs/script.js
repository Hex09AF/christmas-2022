var btnToggle = document.getElementById("toggle");
var body = document.getElementById("root");
var audio = new Audio("./sounds/Jingle-bells-short-intro.mp3");
var corgis = document.getElementsByClassName("corgi-mode");

audio.loop = true;
var flag = 0;
btnToggle.addEventListener("click", function() {
    if (!flag) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
    [...corgis].forEach(function(corgi){
        corgi.classList.toggle("basic-corgi-mode");
        corgi.classList.toggle("december-holiday-corgi-mode");
    });
    flag = !flag;
    body.classList.toggle("dark");
});

