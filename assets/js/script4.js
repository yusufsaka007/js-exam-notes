"use strict"

document.addEventListener("DOMContentLoaded", init)
let clickedItem = null;

function init() {
    clickedItem = document.querySelector('#clicked-item');
    const wishes = document.querySelectorAll(".wish");

    wishes.forEach((wish) => {
        wish.addEventListener('click', showWhichOneWasClicked);
    });
}

function showWhichOneWasClicked(e) {
    clickedItem.innerText = e.target.innerText;
}
