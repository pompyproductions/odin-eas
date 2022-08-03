console.log("script.js: flotation device");

const gridContainer = document.querySelector(".grid-container");

for (let i=0; i<=36; i++) {
    let elem = document.createElement("div");
    elem.setAttribute("class", "grid-cell");
    gridContainer.appendChild(elem);
    console.log("append element");
}