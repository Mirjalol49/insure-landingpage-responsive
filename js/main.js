var elBurgerBtn = document.querySelector(".burger-menuv");
var elHiddenHeader = document.querySelector(".hidden-site-nav");
var elBurgerImg = document.querySelector(".burger-menu__img");

var icon = true;

elBurgerBtn.addEventListener("click", function() {
    elHiddenHeader.classList.toggle("shownav");

    if (icon) {
        elBurgerImg.src = "../images/burger-close.svg";
        icon = false;
    } else {
        elBurgerImg.src = "../images/burger-menu.svg";
        icon = true;
    }
});