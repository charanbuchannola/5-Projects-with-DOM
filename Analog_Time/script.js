// const hourHand = document.querySelector(".hour-hand");

setInterval(() => {
  const secondHand = document.querySelector(".second-hand");
  const seconds = new Date().getSeconds();
  secondHand.style.transform = `rotate(${seconds * 6}deg) translateY(-50%)  `;
  const minuteHand = document.querySelector(".minute-hand");
  const minutes = new Date().getMinutes();
  minuteHand.style.transform = `rotate(${minutes * 6}deg)  translateY(-50%) `;
  const hourHand = document.querySelector(".hour-hand");
  const hours = new Date().getHours();
  hourHand.style.transform = `rotate(${
    hours * 30 + (minutes / 60) * 30
  }deg) translateY(-50%) `;
}, 1000);
