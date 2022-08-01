const container = document.querySelector(".container");
const gridDivTarget = document.querySelector(".container").childNodes;
let mouseDown = false;
const colorPicker = document.querySelector(".colorPicker");
const eraser = document.querySelector(".eraser");
const randomBtn = document.querySelector(".randomColors");
const slider = document.querySelector(".slider");
const valueSlider = document.querySelector(".displayValue");
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", clearColors);

window.addEventListener("DOMContentLoaded", updateGridSize(slider.value));

valueSlider.innerHTML = slider.value + " x " + slider.value;

document.querySelector("body").addEventListener("mousedown", function () {
  mouseDown = true;
  mouseDownFunc();
});

document.querySelector("body").addEventListener("mouseup", function () {
  mouseDown = false;
  mouseDownFunc();
});

function createBoxes(rows, columns) {
  for (let i = 0; i < rows * columns; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridDiv");
    container.appendChild(gridDiv);
  }
  mouseDownFunc();
}

eraser.addEventListener("click", eraserFunc);
function eraserFunc() {
  eraser.classList.toggle("eraserClicked");
}

randomBtn.addEventListener("click", randomColor);
function randomColor() {
  randomBtn.classList.toggle("randomColorsClicked");
}

function createGridSize(rows, columns) {
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

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

function clearColors() {
  updateGridSize(slider.value);
}

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

function randomColorMath() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return (rgb = `rgb(${r},${g},${b})`);
}

function color(e) {
  if (eraser.classList.contains("eraserClicked") === true) {
    e.target.style.backgroundColor = "#ffffff";
  } else if (randomBtn.classList.contains("randomColorsClicked") === true) {
    e.target.style.backgroundColor = randomColorMath();
  } else e.target.style.backgroundColor = `${colorPicker.value}`;
}
