let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
          [0, 1, 2],
          [0, 3, 6],
          [0, 4, 8],
          [1, 4, 7],
          [2, 5, 8],
          [2, 4, 6],
          [3, 4, 5],
];

// ✅ disable all boxes
const disableBoxes = () => {
          boxes.forEach((box) => box.disabled = true);
};

// ✅ reset / new game
const resetGame = () => {
          turnO = true;
          msgContainer.classList.add("hide");

          boxes.forEach((box) => {
                    box.innerText = "";
                    box.disabled = false;
          });
};

// ✅ show winner
const showWinner = (winner) => {
          msg.innerText = `Congratulations, Winner is ${winner}`;
          msgContainer.classList.remove("hide");
};

// game logic
boxes.forEach((box) => {
          box.addEventListener("click", () => {
                    if (turnO) {
                              box.innerText = "O";
                              turnO = false;
                    } else {
                              box.innerText = "X";
                              turnO = true;
                    }
                    box.disabled = true;
                    checkWinner();
          });
});


const checkWinner = () => {
          for (let pattern of winPatterns) {
                    let a = boxes[pattern[0]].innerText;
                    let b = boxes[pattern[1]].innerText;
                    let c = boxes[pattern[2]].innerText;

                    if (a !== "" && a === b && b === c) {
                              showWinner(a);
                              disableBoxes();
                              return;
                    }
          }
};


resetBtn.addEventListener("click", resetGame);
newGamebtn.addEventListener("click", resetGame);
