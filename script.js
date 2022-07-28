const container = document.querySelector(".container");

createGridSize(100, 100);
createBoxes(100, 100);

function createBoxes(rows, columns) {
  for (let i = 0; i < rows * columns; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridDiv");
    container.appendChild(gridDiv);
  }
}

function createGridSize(rows, columns) {
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}
