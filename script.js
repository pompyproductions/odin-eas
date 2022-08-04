console.log("script.js: flotation device");

const gridContainer = document.querySelector(".grid-container");
const freezeButton = document.getElementById("freeze-button");
let isDrawing = true;

const onMouseOver = (event) => {
    if (isDrawing && event.target.classList.contains("grid-cell")) {
        event.target.classList.add("colored")
    };
}
const toggleFreeze = () => {
    isDrawing = !isDrawing;
    console.log(document.querySelectorAll(".colored"));
    document.querySelectorAll(".colored").forEach((item) => {
        item.classList.toggle("frozen");
    })
}

gridContainer.addEventListener("mouseover", onMouseOver);
freezeButton.addEventListener("click", toggleFreeze);


for (let i=0; i<=36; i++) {
    let elem = document.createElement("div");
    elem.setAttribute("class", "grid-cell");
    gridContainer.appendChild(elem);
    console.log("append element");
}