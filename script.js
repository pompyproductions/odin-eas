console.log("script.js: flotation device");

let newCanvasSize = [8, 8]

const onMouseOver = (event) => {
    if (isDrawing && event.target.classList.contains("grid-cell")) {
        event.target.classList.add("colored")
    };
}
const toggleFreeze = () => {
    isDrawing = !isDrawing;
    document.querySelectorAll(".colored").forEach((item) => {
        item.classList.toggle("frozen");
    });
    gridContainer.classList.toggle("frozen");
}
const resetCanvas = () => {
    document.querySelectorAll(".grid-cell").forEach((item) => {
        if (item.classList.contains("colored")) {item.classList.remove("colored")};
        if (item.classList.contains("frozen")) {item.classList.remove("frozen")};
    });
    if (gridContainer.classList.contains("frozen")) {gridContainer.classList.remove("frozen")};
    isDrawing = true;
}
const createGrid = (size) => {
    // get rid of existing table
    console.log(document.querySelectorAll(".grid-cell"));
    document.querySelectorAll(".grid-cell").forEach(item => item.remove());
    
    // set up the cell size
    let gridSize;
    if (size[0] > size[1]) {
        gridSize = (50/size[0]);
    } else {
        gridSize = (50/size[1]);
    };
    
    // set up the table size
    gridContainer.setAttribute("style", 
    `grid-template-columns:repeat(${size[1]}, ${gridSize}vh); \
    grid-template-rows:repeat(${size[0]}, ${gridSize}vh)`);
    
    // create and append cells
    for (let i=0; i<size[0]*size[1]; i++) {
        let elem = document.createElement("div");
        elem.setAttribute("class", "grid-cell");
        gridContainer.appendChild(elem);
    }
}

const hidePopup = () => {
    console.log("pressed");
    popupContainer.classList.toggle("hidden");
}

const createCanvas = () => {
    newCanvasSize = [
        document.getElementById("input-rows").value,
        document.getElementById("input-columns").value
    ];
    console.log(newCanvasSize);
    createGrid(newCanvasSize);
    resetCanvas();
    toggleFreeze();
    hidePopup();
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

const popupNewCanvasButton = document.getElementById("submit-new-canvas");
console.log(popupNewCanvasButton);
popupNewCanvasButton.addEventListener("click", createCanvas);

let isDrawing = true;


createGrid(newCanvasSize);