var column = document.querySelectorAll(".column");

column.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.backgroundColor = "beige";
    element.childNodes[1].style.opacity = "1";
  });

  element.addEventListener("mouseleave", () => {
    element.style.backgroundColor = "white";
    element.childNodes[1].style.opacity = "0";
  });
  element.addEventListener("mousemove", (dets) => {
    element.childNodes[1].style.left = dets.x + "px";
  });
});
