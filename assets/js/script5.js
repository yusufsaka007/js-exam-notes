"use strict"

document.addEventListener("DOMContentLoaded", init)


function init() {
    // Stop propagation
    document.querySelector("#container1").addEventListener("click", eventContainer);
    document.querySelector("#container1 #container-btn1").addEventListener("click", eventBtn1);
    document.querySelector("#container1 #container-btn2").addEventListener("click", eventBtn2);


    // Event capturing
    document.querySelector("#container2").addEventListener("click", eventContainer, true); // Set the third element to true
    document.querySelector("#container2 p").addEventListener("click", eventParagraph, true);
    document.querySelector("#container2 a").addEventListener("click", eventAnchor);

    // e.currentTarget
    document.querySelector("#container3 ul").addEventListener("click", eventUl);
}

function eventContainer(e) {
    e.preventDefault();
    console.log("clicked div")
}

// Stop propagation
function eventBtn1(e) {
    e.preventDefault();
    console.log("clicked button 1")
}
function eventBtn2(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("clicked button 2")
}

// Event capturing
function eventParagraph(e) {
    console.log("clicked paragraph");
}
function eventAnchor(e) {
    e.preventDefault();
    console.log("clicked anchor");
}

// e.currentTarget
function eventUl(e) {
    console.log(e.target);
    console.log(e.currentTarget);
}
