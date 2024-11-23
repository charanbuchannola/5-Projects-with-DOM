var img = document.querySelector(".box img");
var like = document.querySelector("i");

img.addEventListener("dblclick", () => {
  like.style.transform = " translate(-50%, -50%) scale(2)";

  setTimeout(() => {
    like.style.transform = " translate(-50%, -50%) scale(0)";
  }, 1000);
  setTimeout(() => {
    like.style.opacity = "0";
  }, 1000);
});



