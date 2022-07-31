const container = document.querySelector(".container");
const gridDivTarget = document.querySelector(".container").childNodes;
let mouseDown = false;

function createBoxes(rows, columns) {
  for (let i = 0; i < rows * columns; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridDiv");
    container.appendChild(gridDiv);
  }
  mouseDownFunc();
}

function createGridSize(rows, columns) {
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

const slider = document.querySelector(".slider");
const valueSlider = document.querySelector(".displayValue");
valueSlider.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function newValue() {
  valueSlider.innerHTML = this.value + " x " + this.value;
  updateGridSize(this.value);
};

function updateGridSize(size) {
  clearGrid();
  createGridSize(size, size);
  createBoxes(size, size);
}

function clearGrid() {
  container.innerHTML = "";
}

window.addEventListener("DOMContentLoaded", updateGridSize(slider.value));

function color(e) {
  e.target.style.backgroundColor = "yellow";
}

// experimental

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearColors);

function clearColors() {
  updateGridSize(slider.value);
}

//

document.querySelector("body").addEventListener("mousedown", function () {
  mouseDown = true;
  console.log(mouseDown);
  mouseDownFunc();
});

document.querySelector("body").addEventListener("mouseup", function () {
  mouseDown = false;
  console.log(mouseDown);
  mouseDownFunc();
});

function mouseDownFunc() {
  if (mouseDown === true) {
    for (let i = 0; i < gridDivTarget.length; i++) {
      gridDivTarget[i].addEventListener("mouseover", color);
      gridDivTarget[i].addEventListener("mouseout", color);
    }
  } else if (mouseDown === false) {
    for (let i = 0; i < gridDivTarget.length; i++) {
      gridDivTarget[i].removeEventListener("mouseover", color);
      gridDivTarget[i].removeEventListener("mouseout", color);
      gridDivTarget[i].addEventListener("click", color);
    }
  }
}

//
