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
const createCanvas = (row, col) => {
    // get rid of existing table
    console.log(document.querySelectorAll(".grid-cell"));
    document.querySelectorAll(".grid-cell").forEach(item => item.remove());
    
    // set up the cell size
    let gridSize;
    if (row > col) {
        gridSize = (50/row);
    } else {
        gridSize = (50/col);
    };
    
    // set up the table size
    gridContainer.setAttribute("style", 
    `grid-template-columns:repeat(${col}, ${gridSize}vh); \
    grid-template-rows:repeat(${row}, ${gridSize}vh)`);

    // create and append cells
    for (let i=0; i<=row*col; i++) {
        let elem = document.createElement("div");
        elem.setAttribute("class", "grid-cell");
        gridContainer.appendChild(elem);
    }
}

gridContainer.addEventListener("mouseover", onMouseOver);
freezeButton.addEventListener("click", toggleFreeze);
resetButton.addEventListener("click", resetCanvas);

createCanvas(20, 20);

// gridContainer.setAttribute("style", "grid-template-columns:repeat(6, 5vh);grid-template-rows:repeat(6, 5vh)");
// for (let i=0; i<=36; i++) {
//     let elem = document.createElement("div");
//     elem.setAttribute("class", "grid-cell");
//     gridContainer.appendChild(elem);
// }