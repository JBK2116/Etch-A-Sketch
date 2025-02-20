// Variables Used To Run The Game
let gameGrid = document.getElementById("game-grid")
let gameColor = "white";
let gridSize = 2;
let gridSlider = document.getElementById("game-grid-slider")
let gridDescription = document.getElementById("game-grid-description");
let resetGameBtn = document.getElementById("reset-game");

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
    let colorButtons = document.querySelectorAll(".game-btn");
    colorButtons.forEach(btn => btn.addEventListener("click",() => {
        colorButtons.forEach(button => button.style.backgroundColor = '');
        btn.style.backgroundColor = '#666666';
    }))
    
}

function getGridSize() { //Get The Users Desired Grid Size For Sketching To Use It
    // First Reset The Grid Slider To 2x2
    gridSize = parseInt(gridSlider.value, 10); // Convert Current Slider Value To Integer For Use
    gridDescription.textContent = `Grid Size: ${gridSize}x${gridSize}`;
    return gridSize;
}

function createGrid(gridSize) {
    const gameGrid = document.getElementById("game-grid");
    gameGrid.innerHTML = "";
    
    // First set the container to be square
    const containerWidth = gameGrid.clientWidth;
    gameGrid.style.height = `${containerWidth}px`;
    
    // Then calculate cell size AFTER setting container dimensions
    const cellSize = (containerWidth - 2) / gridSize; // Subtract border width
    
    gameGrid.style.display = "grid";
    gameGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gameGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
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

function resetGame() {
    gameColor = "white";
    createGrid(getGridSize());
    changeGridColor();
}

function main() {
    resetGameBtn.addEventListener("click", resetGame);
    getColor()
    gridSlider.oninput = function() {
        createGrid(getGridSize());
        changeGridColor();
    };
}

main()
