let menuActive = document.querySelector('.menu-active');
let headerMenu = document.querySelector('.hamburger');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

headerMenu.addEventListener('click', toggleMenu);

