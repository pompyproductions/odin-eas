console.log("script.js: flotation device");

const gridContainer = document.querySelector(".grid-container");
const freezeButton = document.getElementById("freeze-button");
const resetButton = document.getElementById("reset-button");
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
const resetCanvas = () => {
    document.querySelectorAll(".grid-cell").forEach((item) => {
        if (item.classList.contains("colored")) {item.classList.remove("colored")};
        if (item.classList.contains("frozen")) {item.classList.remove("frozen")};
    });
    isDrawing = true;
}

gridContainer.addEventListener("mouseover", onMouseOver);
freezeButton.addEventListener("click", toggleFreeze);
resetButton.addEventListener("click", resetCanvas);

for (let i=0; i<=36; i++) {
    let elem = document.createElement("div");
    elem.setAttribute("class", "grid-cell");
    gridContainer.appendChild(elem);
}