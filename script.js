const container = document.querySelector("#container");
const gridSizeButton = document.querySelector(".btn-gridSize");


for (let i = 0; i < (16 * 16); i++) {
    const createNewDiv = document.createElement("div");

    container.appendChild(createNewDiv);
    createNewDiv.classList.add("tile");
};

// Event listener added to container ID rather than tile class since the class was created after DOM was loaded
container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
});