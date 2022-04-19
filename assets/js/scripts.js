const burgerBtn = document.querySelector(".nav__hamburger-icon");
const menuOptions = document.querySelector(".nav__menu-options");

const openMenu = (menuElement, optionsElement) => {
    menuElement.classList.toggle("js-open");
    optionsElement.classList.toggle("js-show");
};

const toggleMobileMenu = (event) => {
    openMenu(burgerBtn, menuOptions);
};

burgerBtn.addEventListener("click", toggleMobileMenu);
