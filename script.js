
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const pencilBtn = document.getElementById("pencil-btn");
const eraserBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-btn");
const colorInput = document.getElementById("color-input");

let isDrawing = false;
let lastX = 0;
let lastY = 0;


function draw(event) {
    if(!isDrawing) return;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
} 


function startDrawing(event) {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
}


function stopDrawing() {
    isDrawing = false;
}

function activatePencil() {
    ctx.strokeStyle = colorInput.value;
    ctx.lineWidth = 2;
    pencilBtn.classList.add("active");
    eraserBtn.classList.remove("active");
}

function activateEraser() {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    eraserBtn.classList.add("active");
    pencilBtn.classList.remove("active");
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

pencilBtn.addEventListener("click", activatePencil);
eraserBtn.addEventListener("click", activateEraser);
clearBtn.addEventListener("click", clearCanvas);
colorInput.addEventListener("input", activatePencil);
