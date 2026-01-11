"use strict"

document.addEventListener("DOMContentLoaded", init)

let container = null;
let liBadKids = null; 
let liGoodKids = null;
let liKarma = null;

function init () {
    // On hover make the border wider by adding dom-test-large
    container = document.querySelector(".dom-test")
    container.addEventListener("mouseover", hover_container_add)
    container.addEventListener("mouseleave", hover_container_remove)

    // Scratch good kids >:)
    const lis = container.querySelector("ul").children;
    liGoodKids = lis[0];
    liBadKids = lis[1];
    liKarma = lis[2];

    liBadKids.addEventListener("click", scratch_good_kids);

    liKarma.addEventListener("click", highlight_karma);
}

function hover_container_add() {
    container.classList.add('dom-test-large')
}
function hover_container_remove() {
    container.classList.remove('dom-test-large')
}

function scratch_good_kids() {
    liGoodKids.style['text-decoration'] = "line-through";
}

function highlight_karma() {
    liKarma.classList.toggle('lime-background')
}
