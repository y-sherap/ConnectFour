const gameBoard = document.querySelector(".board");
const cell = document.querySelectorAll(".cell");
const button = document.querySelector("button");
const gameStatusMessage = document.querySelector(".gameStatus");
const playerTurn = document.querySelector(".playerTurn");
const token = document.querySelector(".token");

let isPlayer1 = true;
let isGameOver = false;
// starting set that will populate when players click on individual cells
let board = [
  "", "", "", "", "", "", "", 
  "", "", "", "", "", "", "", 
  "", "", "", "", "", "", "", 
  "", "", "", "", "", "", "", 
  "", "", "", "", "", "", "", 
  "", "", "", "", "", "", "", 
  "", "", "", "", "", "", "", 
];

const winningConditions = [
  [0, 1, 2, 3],
  [0, 7, 14, 21],
  [0, 8, 16, 24],
  [1, 2, 3, 4],
  [1, 9, 17, 25],
  [1, 8, 15, 22],
  [2, 3, 4, 5],
  [2, 9, 16, 23],
  [2, 10, 18, 26],
  [3, 4, 5, 6],
  [3, 20, 17, 24],
  [3, 11, 19, 27],
  [3, 9, 15, 21],
  [4, 10, 16, 22],
  [4, 11, 18, 25],
  [5, 12, 19, 26],
  [5, 11, 17, 23],
  [6, 12, 18, 24],
  [6, 13, 20, 27],
  [7, 8, 9, 10],
  [7, 14, 21, 28],
  [7, 15, 23, 31],
  [8, 9, 10, 11],
  [8, 15, 22, 29],
  [8, 16, 24, 32],
  [9, 16, 23, 30],
  [9, 10, 11, 12],
  [9, 17, 25, 33],
  [10, 11, 12, 13],
  [10, 17, 24, 31],
  [10, 16, 22, 28],
  [11, 17, 23, 29],
  [11, 18, 25, 32],
  [12, 18, 24, 30],
  [12, 19, 26, 33],
  [13, 19, 25, 31],
  [13, 20, 27, 34],
  [14, 15, 16, 17],
  [14, 21, 28, 35],
  [14, 22, 30, 38],
  [15, 16, 17, 18],
  [15, 22, 29, 36],
  [15, 23, 31, 39],
  [16, 17, 18, 19],
  [16, 23, 30, 37],
  [16, 24, 32, 40],
  [17, 23, 29, 35],
  [17, 18, 19, 20],
  [17, 24, 31, 38],
  [17, 25, 33, 41],
  [18, 24, 30, 36],
  [18, 25, 32, 39],
  [19, 25, 31, 37],
  [19, 26, 33, 40],
  [20, 26, 32, 38],
  [20, 27, 34, 41],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
];

let showWinningMessage = (winningMessage) => {
  gameStatusMessage.innerText = winningMessage
  isGameOver = true
  // message placeholder
};

// ! = opposite. Checking to see whether Player1 is playing
let alternatePlayer = () => {
  isPlayer1 = !isPlayer1;
};

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", (e) => {
    let numberOfColumns = 7
// needs to determine neighboring cell
    let neighborCell = i + numberOfColumns
    let hasValue = board[neighborCell] !== ""
    let neighborCellHasValue = i > 34 || hasValue
    // if it doesn't have an empty string, then neighbor Cell does have a value.  Neighbor celll is the cell underneath the clicked cell. 

    if (e.target.dataset.cellTaken || !neighborCellHasValue) {
      return;

      // if current cell we're clicking on has a value/if it's a true, or if a neighbor cell has value, we will return. can't double click
    }
    checkWinningConditions(i);
    e.target.style.backgroundColor = isPlayer1 ? "red" : "yellow";
    alternatePlayer();

    // create a function/setter that checks whether a cell already has a color/clicked
    e.target.dataset.cellTaken = true;
  });
}

//  everytime a useer clicks into a cell, we want to log the index of that cell into the variable "board" amd check if one of the winning conditions were met
const checkWinningConditions = (indexOfClickedCell) => {
  board[indexOfClickedCell] = isPlayer1;

  let winner;

  winningConditions.forEach((winningCondition) => {
    const conditionOne = board[winningCondition[0]];
    const conditionTwo = board[winningCondition[1]];
    const conditionThree = board[winningCondition[2]];
    const conditionFour = board[winningCondition[3]];

    // set the value of winner
    if (conditionOne && conditionTwo && conditionThree && conditionFour) {
      winner = "Player 1";
    } else if (conditionOne === false && conditionTwo === false && conditionThree === false && conditionFour === false) {
        winner = "Player 2";
    }
    // every item in the array we need to check for a se3t of trues and flases. true = player 1
  });
  // we'll iterate through the array to check which player it was that clicked on the cell and it would put out a true or false
  if (winner) {
    // display winner here
    const winnerMessage = `${winner} is the winner!`
    showWinningMessage(winnerMessage)
  } else {
    let checkDraw = board.find(element => element === "")
// checks if there's an empty string on the board
      if (checkDraw) {
        showWinningMessage ("It's a draw!")
      }
  }

};

// add an event listener so that when the button is clicked, board is reset

const resetBoard = () => {
  window.location.reload()
}


button.addEventListener('click', resetBoard)
