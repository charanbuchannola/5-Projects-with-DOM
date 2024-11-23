var cursor = document.querySelector(".circle");
var main = document.querySelector("main");

main.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});