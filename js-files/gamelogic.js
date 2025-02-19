// Variables Used To Run The Game
let gameGrid = document.getElementById("game-grid")
let gameColor = "white";
let gridSize = 2;
let gridSlider = document.getElementById("game-grid-slider")
let gridDescription = document.getElementById("game-grid-description");

function getColor() { //Get The Users Desired Color For Sketching To Use It
    let blackColor = document.getElementById("black-btn");
    let grayColor = document.getElementById("gray-btn");
    let rainbowColor = document.getElementById("rainbow-btn")
    blackColor.addEventListener("click", function() {
        gameColor = "black";
    })
    grayColor.addEventListener("click", function() {
        gameColor = "gray";
    })
    rainbowColor.addEventListener("click", function() {
        gameColor = "rainbow";
    })
}

function getGridSize() { //Get The Users Desired Grid Size For Sketching To Use It
    // First Reset The Grid Slider To 2x2
    gridSize = parseInt(gridSlider.value, 10); // Convert Current Slider Value To Integer For Use
    gridDescription.textContent = `Grid Size: ${gridSize}x${gridSize}`;
    return gridSize;
}

function createGrid(gridSize) {
    const gameGrid = document.getElementById("game-grid");

    // First, empty the grid so that a new one can be built
    gameGrid.innerHTML = "";

    // Calculate the size of each grid cell based on the container's width and height
    const containerSize = gameGrid.clientWidth; // Width of the grid container
    const cellSize = containerSize / gridSize; // Size of each grid cell

    // Set the CSS grid properties for the gameGrid container
    gameGrid.style.display = "grid";
    gameGrid.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
    gameGrid.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;
    gameGrid.style.height = `${containerSize}px`; // Set height to match the width

    // Create the grid cells
    for (let i = 0; i < gridSize * gridSize; i++) {
        let singleGridDiv = document.createElement("div");
        gameGrid.appendChild(singleGridDiv);
    }
}


function changeGridColor() {
    let allDivs = gameGrid.querySelectorAll("div");
    allDivs.forEach(div => {
        div.addEventListener("mouseenter", () => {
            if (gameColor == "rainbow") {
                const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                div.style.backgroundColor = randomColor;
            }
            else {
             div.style.background = gameColor;
            }
        })
    })
}

function main() {
    createGrid(100)
}

main()
