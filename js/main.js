let popup = document.querySelector("aside.popup");
let layer = document.querySelector(".fade-layer");
let button = document.querySelector(".popup-button").addEventListener("click", showMenu);

layer.addEventListener("click", showMenu);

function showMenu() {
    popup.classList.toggle("show");
    layer.classList.toggle("visible");
}