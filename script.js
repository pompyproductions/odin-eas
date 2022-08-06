console.log("script.js: flotation device");

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

const hidePopup = () => {
    console.log("pressed");
    popupContainer.classList.toggle("hidden");
}


const gridContainer = document.querySelector(".grid-container");
gridContainer.addEventListener("mouseover", onMouseOver);

const popupContainer = document.querySelector(".popup-container");

const freezeButton = document.getElementById("freeze-button");
freezeButton.addEventListener("click", toggleFreeze);

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetCanvas);

const newButton = document.getElementById("new-button");
newButton.addEventListener("click", hidePopup);

const popupHideButton = document.getElementById("popup-hide-button");
popupHideButton.addEventListener("click", hidePopup);


let isDrawing = true;


createCanvas(20, 20);