let GRIDSIZE = 16

const gridWrapper = document.querySelector("#grid-wrapper");
const gridButton = document.querySelector("#grid-button");

gridButton.onclick = () => {
    let size = parseInt(prompt("Enter the size of the grid. (MAX of 100)"));


    if (Number.isInteger(size) && size < 100){
        while (gridWrapper.firstChild) {
            gridWrapper.removeChild(gridWrapper.firstChild);
        }
        GRIDSIZE = size;
    }
    console.log(GRIDSIZE);
    fillGrid();
};

function fillGrid() {
    for(let i = 0; i < GRIDSIZE; i++){
        const gridRow = document.createElement("div");
        gridRow.className = "grid-row"
        gridWrapper.appendChild(gridRow)
        for(let j = 0; j < GRIDSIZE; j++){
            const gridDiv = document.createElement("div");
            gridDiv.className = "grid-square"

            gridDiv.addEventListener('mouseover', function() {
                this.style.cssText = "background-color: gray;"
            })

            gridRow.appendChild(gridDiv);
        }
    }
}

fillGrid()