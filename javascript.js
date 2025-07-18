const GRIDWIDTH = 18
const GRIDHEIGHT = 18
const gridWrapper = document.querySelector("#grid-wrapper");

function fillGrid() {
    for(let i = 0; i < GRIDHEIGHT; i++){
        const gridRow = document.createElement("div");
        gridRow.className = "grid-row"
        gridWrapper.appendChild(gridRow)
        for(let j = 0; j < GRIDWIDTH; j++){
            const gridDiv = document.createElement("div");
            gridDiv.className = "grid-square"
            gridRow.appendChild(gridDiv);
        }
    }
}

fillGrid()