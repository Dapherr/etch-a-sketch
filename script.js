const container = document.querySelector("#container");
const gridSizeButton = document.querySelector(".gridSize");
const clearButton = document.querySelector(".clear");

function createInitialGrid() {
    for (let i = 0; i < (16 ** 2); i++) {
        const createNewDiv = document.createElement("div");

        container.appendChild(createNewDiv);
        createNewDiv.classList.add("tile");
    }
}
createInitialGrid();

function getNewNumberOfTiles() {
    let numberOfTiles;
    do {
        numberOfTiles = Number(prompt("Enter the number of squares. This must be a whole number between 1 and 100"));

        if (numberOfTiles < 1 || numberOfTiles > 100 || isNaN(numberOfTiles) || !Number.isInteger(numberOfTiles)) {
            alert("Invalid. Please only enter a whole number between 1 and 100");
        }
    } while (numberOfTiles < 1 || numberOfTiles > 100 || isNaN(numberOfTiles) || !Number.isInteger(numberOfTiles));

    return numberOfTiles;
};

function removeTiles() {
    let tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.remove();
    })
}

function generateNewGrid() {
    const numberOfTiles = getNewNumberOfTiles();

    for (let i = 0; i < (numberOfTiles ** 2); i++) {
        const newTile = document.createElement("div");
        const tileSize = 800 / numberOfTiles;
        newTile.classList.add("tile");
        newTile.style.width = tileSize + "px";
        newTile.style.height = tileSize + "px";
        container.appendChild(newTile);
    }
}

function appendGrid() {
    removeTiles();
    generateNewGrid();
}

function clearGrid() {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.style.backgroundColor = "white";
        tile.style.border = "1px solid black";
    })
}

gridSizeButton.addEventListener("click", appendGrid);
clearButton.addEventListener("click", clearGrid)

// Event listener added to container ID rather than tile class since the class was created after DOM was loaded
container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.border = "1px solid gray";
});