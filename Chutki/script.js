var img = document.querySelector(" img");
var main = document.querySelector("main");

moveX = 0;
moveY = 0;

document.addEventListener("keydown", function (dets) {
  if (dets.code === "ArrowRight") {
    moveX += 10;
  } else if (dets.code === "ArrowLeft") {
    moveX -= 10;
  } else if (dets.code === "ArrowUp") {
    moveY -= 10;
  } else if (dets.code === "ArrowDown") {
    moveY += 10;
  }
  console.log(moveX, moveY);

  img.style.left = moveX + "px";
  img.style.top = moveY + "px";

  if (moveX >= 1100 && moveX <= 1330 && moveY >= 290 && moveY <= 530) {
    img.style.opacity = 0;
  } else {
    img.style.opacity = 1;
  }
});
