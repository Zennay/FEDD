var deButton = document.querySelector("header a:first-child");
var deCloseButton = document.querySelector("header a:nth-of-type(2)");

deButton.addEventListener("click", toggleMenu,);

function toggleMenu() {
    var deButton = document.querySelector("header a:first-child");
    deNav.classList.toggle("toonMenu");
}

function closeMenu() {
    var deCloseButton = document.querySelector("header button:nth-of-type(2)");
    deCloseNav.classList.toggle("closeMenu");
}