let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-game")
let reSet = document.querySelector(".reset");
let boxx = document.querySelector(".box")

// PlayerO, PlayerX
let turn0 = true;

// Moves to Track Draw
let count = 0;

// All Possible win patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Hello Shubhh");

        if (turn0) {
            // player1
            box.innerHTML = "O"
            turn0 = false
        }else{
            // player2
            box.innerHTML = "X"
            turn0 = true
        }
        box.disabled = true
        count++;

        let isTie = checkWinner();

        if (count === 9  && !isTie) {
            drawGame();
            console.log("It was Tie");
        }
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Actual Winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations!!! , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner");
                showWinner(pos1Val);

                for (let j = 0; j < 3; j++) {
                    boxes[pattern[i][j]].style.background = "08D9D6";
                    // boxes[winPatterns[i][j]].style.background = "08D9D6"
                }
                // return true;
            }
        }
    }
};


// Tie
const drawGame = () =>{
    msg.innerText = `Game Drawn!!!, You Can Play Another Match`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// Reset Button
const resetGame = () =>{
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click", resetGame);
reSet.addEventListener("click", resetGame);