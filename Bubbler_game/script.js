const container = document.querySelector(".container");

const targetElement = document.getElementById("target");
const scorecardElement = document.getElementById("scorecard");
const bubbleContainer = document.getElementById("bubbleContainer");

let score = 0;

function generateTarget() {
  const targetNumber = Math.floor(Math.random() * 9 + 1);
  targetElement.textContent = targetNumber;
}

function createBubbles() {
  container.innerHTML = "";

  for (let i = 0; i < 30; i++) {
    const bubbleValue = Math.floor(Math.random() * 10);
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    container.appendChild(bubble);

    bubble.textContent = bubbleValue;

    bubble.addEventListener("click", () => {
      if (
        parseInt(bubble.textContent) === parseInt(targetElement.textContent)
      ) {
        score++;
        scorecardElement.textContent = `Score: ${score}`;
        generateTarget();
        createBubbles();
      }
    });

    bubbleContainer.appendChild(bubble);
  }
}

function startGame() {
  generateTarget();
  createBubbles();
}

startGame();
