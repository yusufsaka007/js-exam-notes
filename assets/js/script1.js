"use strict"

document.addEventListener("DOMContentLoaded", init);

let liChildren = null;

function init()  {
    liChildren = document.querySelector("p").nextElementSibling.nextElementSibling.children[5];

    console.log(liChildren);
}
