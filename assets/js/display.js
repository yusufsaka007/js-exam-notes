"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const viewer = document.querySelector("#js-viewer code");
    if (!viewer) return;

    // find the last linked script
    const scripts = [...document.querySelectorAll("script[src]")];
    const target = scripts.at(-1);
    if (!target) return;

    fetch(target.src)
        .then(r => r.text())
        .then(code => {
            viewer.textContent = code;
            if (window.Prism) Prism.highlightElement(viewer);
        });
});

