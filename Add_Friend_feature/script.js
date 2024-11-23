var h2 = document.querySelector("h2");
var remove = document.querySelector(".remove");
var add = document.querySelector(".add");

add.addEventListener("click", () => {
  h2.innerHTML = "Friends";
  h2.style.color = "green";
});

remove.addEventListener("click", () => {
  h2.innerHTML = "Stranger";
  h2.style.color = "red";
});
