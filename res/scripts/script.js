const header = document.querySelector('.header');
const welcome = document.querySelector('.welcome');

let lastScrollY = 0;
let isHidden = false;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY
