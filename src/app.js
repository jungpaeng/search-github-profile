const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#0d0d0d";
ctx.lineWidth = 2.5;

let painting = false;

const onMouseMove = event => {
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
  painting = true;
};

const stopPainting = () => {
  painting = false;
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
