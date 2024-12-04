const btn = document.querySelector("button");

let main = document.querySelector("main");

const images = [
  "https://cdn3d.iconscout.com/3d/premium/thumb/bugs-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bug-insect-creature-pack-animal-icons-5298154.png?f=webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcVhy126eQG_FUq7uDJIT5UkoWR_-Kj71tA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsgeOeWfnEiRu6pFDf9N2yo50s5i5576ZzQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgE8FV_GmrpsQwTzpUIKHU5B4oyayezksFaZuDaJP3jLjpUT3C8vcZ1iV_9gYZR9-hPsY&usqp=CAU",
];

btn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * images.length);
  //   const randomImage = images[randomIndex];
  let img = document.createElement("img");
  img.setAttribute("src", images[randomIndex]);
  img.style.left = `${Math.floor(Math.random() * 100)}%`;
  img.style.top = `${Math.floor(Math.random() * 100)}%`;
  img.style.rotate = `${Math.floor(Math.random() * 360)}degrees`;

  main.appendChild(img);
});
