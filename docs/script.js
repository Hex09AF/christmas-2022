var btnToggle = document.getElementById("toggle");
var body = document.getElementById("root");

var audio = new Audio("./sounds/Jingle-bells-short-intro.mp3");
audio.loop = true;

var corgis = document.getElementsByClassName("corgi-mode");

var isPlay = 0;
btnToggle.addEventListener("click", function () {
    if (!isPlay) {
        audio.play();
    } else {
        audio.pause();
    }
    [...corgis].forEach(function (corgi) {
        corgi.classList.toggle("basic-corgi-mode");
        corgi.classList.toggle("december-holiday-corgi-mode");
    });
    isPlay = !isPlay;
    body.classList.toggle("dark");
});

var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");
// var miliseconds = document.getElementById("miliseconds");

var nextChristMas = new Date();
if (nextChristMas.getMonth() == 1) {
    if (nextChristMas.getDate() > 25) {
        nextChristMas.setFullYear(nextChristMas.getFullYear() + 1);
    }
}
nextChristMas.setMonth(11);
nextChristMas.setDate(25);
nextChristMas.setHours(0);
nextChristMas.setMinutes(0);
nextChristMas.setSeconds(0);
nextChristMas.setMilliseconds(0);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

function countDown() {
    var cur = new Date();
    var dis = nextChristMas - cur;

    if (dis < 0) {
        clearInterval(timer); // stop the timer from continuing ..
    }
    var contentDays = Math.floor(dis / _day);
    var contentHours = Math.floor((dis % _day) / _hour);
    var contentMinute = Math.floor((dis % _hour) / _minute);
    var contntSeconds = Math.floor((dis % _minute) / _second);
    var contentMilliseconds = dis % _second;

    days.innerHTML = (contentDays + "").padStart(2, 0);
    hours.innerHTML = (contentHours + "").padStart(2, 0);
    minute.innerHTML = (contentMinute + "").padStart(2, 0);
    seconds.innerHTML = (contntSeconds + "").padStart(2, 0);
    // miliseconds.innerHTML = contentMilliseconds;
}
countDown();
timer = setInterval(countDown, 1000);