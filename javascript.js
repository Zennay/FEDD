var deNav = document.querySelector("header section:nth-child(1)")
var button = document.querySelector("header section:nth-child(2) div")
var menu = 0


deButton.addEventListener("click", toggleMenu,);
deCloseButton.addEventListener("click", closeMenu,)

function toggleMenu() {
    deNav.style.setProperty('transform', 'translateX(0%)', 'important');
}

function closeMenu() {
    deNav.style.setProperty('transform', 'translateX(-100%)', 'important');
}

function myFunction() {

    if (menu == 0) {
        button.classList.toggle("change");
        deNav.style.setProperty('transform', 'translateX(0%)', 'important');
        menu++;
    }

    else if (menu == 1) {
        deNav.style.setProperty('transform', 'translateX(-100%)', 'important');
        button.classList.toggle("change");
        menu--;
    }

}

