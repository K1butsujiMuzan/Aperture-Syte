"use strict";

const burgerIcon = document.querySelector("[data-js-burger-icon]");
const burgerContentLinks = document.querySelector("[data-js-burger-links]");

burgerIcon.addEventListener("click", function() {
    burgerIcon.classList.toggle("Active");
    burgerContentLinks.classList.toggle("Active");
});