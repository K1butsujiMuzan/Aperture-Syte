'use strict';

const burgerIcon = document.querySelector('[data-js-burger-icon]');
const burgerContentLinks = document.querySelector('[data-js-burger-links]');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    burgerContentLinks.classList.toggle('active');
});