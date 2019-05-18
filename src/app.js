const canvas = document.getElementById("jsCanvas");

let painting = false;

const stopPainting = () => {
  painting = false;
};

const onMouseMove = event => {
  const { offsetX, offsetY } = event;
  console.log(offsetX, offsetY);
};

const onMouseDown = () => {
  painting = true;
};

const onMouseUp = () => {
  stopPainting();
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
