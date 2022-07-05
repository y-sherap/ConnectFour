
const gameBoard = document.querySelector(".board")
const cell = document.querySelectorAll(".cell")
const playAgain = document.querySelector("button")
const gameStatusMessage = document.querySelector(".gameStatus")


const playerY = 'R'
const playerR = 'B'
let currentPlayer = PlayerR
let possibleClicks = 0

let board = [
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  ]



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
  [38, 39, 40, 41]
]





// use for loop here to add an on click 



let switchPlayer = () => {
  currentPlayer = currentPlayer === 'R' ? 'B' : 'R'
// winner/draw messages here
}