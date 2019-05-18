const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "0d0d0d";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const onMouseMove = event => {
  if (filling) return null;

  const { offsetX, offsetY } = event;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
  } else {
    ctx.stroke();
    ctx.lineTo(offsetX, offsetY);
  }
};

const startPainting = () => {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  } else {
    painting = true;
  }
};

const stopPainting = () => {
  if (filling) return null;

  painting = false;
};

const hangleCM = event => {
  event.preventDefault();
};

const handleColorClick = event => {
  const {
    target: {
      style: { background }
    }
  } = event;

  ctx.strokeStyle = background;
  ctx.fillStyle = background;
};

const handleRangeChange = event => {
  const {
    target: { value }
  } = event;

  ctx.lineWidth = value;
};

const handleModeClick = () => {
  if (filling === true) {
    filling = false;
    mode.innerText = "Paint";
  } else {
    filling = true;
    mode.innerText = "Fill";
  }
};

const handleSaveClick = () => {
  const image = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = image;
  link.download = new Date().getTime().toString();
  link.click();
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("contextmenu", hangleCM);
}

Array.from(colors).forEach(color =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}
