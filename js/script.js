"use strict";

const burgerIcon = document.querySelector(".header__inner-burger");
const burgerContentLinks = document.querySelector(".header__inner-right");

burgerIcon.addEventListener("click", function() {
    burgerIcon.classList.toggle("Active");
    burgerContentLinks.classList.toggle("Active");
});