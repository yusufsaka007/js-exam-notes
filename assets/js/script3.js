"use strict"

document.addEventListener("DOMContentLoaded", init);

let section = null

const firstName = "Jane"
const lastName = "Doe"
const job = "Engineer";
const hobbies = ["Hiking", "Reading", "Travelling"]
const mutantPowers = ['Keen eye-sight',
    'Regeneration',
    'Levitation',
    'Lazer eyes'];
const numbers = [10, 20, 30];

function init() {
    section = document.querySelector("div section");
    const buttons = document.querySelectorAll("button");
    const btnAdd = buttons[0];
    const btnDel = buttons[1];

    document.querySelector("#test-for-each").addEventListener("click", function() {
        mutantPowers.forEach(showMutantPowers);
    })
    document.querySelector("#test-for-of").addEventListener("click", function() {
        for (const value of numbers) {
            console.log(value);
        }
    })

    btnAdd.addEventListener("click", insert_html);
    btnDel.addEventListener("click", remove_html);
}

function insert_html() {
    let html = `<h1>${firstName} ${lastName}</h1>
<p>Job: ${job}</p>
<p>Hobbies: </p>
<ul>`
    for (let hobby of hobbies) {
        html = html + `<li>${hobby}</li>`
    }
    html = html + "</ul>"

    section.innerHTML = html;
}

function remove_html() {
    section.innerHTML = "";
}

function showMutantPowers(power) {
    console.log(power);
}
