const box = document.querySelectorAll(".box");
const h4 = document.querySelector(".h4");
const btn = document.querySelector(".btn");
let isGameStart = true;
let currentTurn = "x";

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startGame();

function startGame() {
  box.forEach((item) => {
    item.addEventListener("click", () => {
      isGameStart = true;
      item.innerHTML = currentTurn;
      winner();
      //calling alert box to stop and reset game with winner
      if (isGameStart == false) {
        setTimeout(() => {
          alert(`${currentTurn} wins`);
          resetGame();
        }, 200);
      }
    });
  });
}

//function to know which player turn
function boxClicked() {
  if (currentTurn == "x") {
    currentTurn = "0";
  } else {
    currentTurn = "x";
  }

  h4.innerText = `${currentTurn}'s turn`;
}

//function to get winner of game
function winner() {
  let gameEnd = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    const cellOne = box[condition[0]];
    const cellTwo = box[condition[1]];
    const cellThree = box[condition[2]];

    if (
      cellOne.innerText == "" ||
      cellTwo.innerText == "" ||
      cellThree.innerText == ""
    ) {
      continue;
    }
    if (
      cellOne.innerText == cellTwo.innerText &&
      cellTwo.innerText == cellThree.innerText
    ) {
      gameEnd = true;
      break;
    }
  }
  if (gameEnd) {
    h4.innerHTML = `${currentTurn} wins`;
    isGameStart = false;
  } else {
    boxClicked();
  }
}

//function to reset the game
function resetGame() {
  box.forEach((item) => {
    item.innerHTML = "";
  });
  currentTurn = "x";
  h4.innerText = `${currentTurn}'s turn`;
}
