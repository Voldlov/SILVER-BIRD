var burgerMenu = document.querySelector('.burger__menu');

burgerMenu.addEventListener('click', function () {
    toggleBurgerMenu(burgerMenu, menuResponsive, overlayMenu);
});