// select elements

const mobile__menu = document.querySelector('.nav__mobile-menu');
const nav = document.querySelector('.nav__list');


mobile__menu.addEventListener('click', () => {
    
    if (nav.style.animationName && nav.style.animationName === 'menu_slide_in') {
        nav.style.animationName = 'menu_slide_out';
    } else {
        nav.style.animationName = 'menu_slide_in';
    }
    mobile__menu.classList.toggle('change__menu')
})