// select elements

const mobile__menu = document.querySelector('.nav__mobile-menu');
const nav = document.querySelector('.nav__list');


mobile__menu.addEventListener('click', () => {
    nav.classList.toggle('show');
    mobile__menu.classList.toggle('change__menu')
})