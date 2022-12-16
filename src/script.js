var btnToggle = document.getElementById("toggle");
var body = document.getElementById("root");
btnToggle.addEventListener("click", function() {
    console.log("HIHI");
    body.classList.toggle("dark");
});
