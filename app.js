var boxes = document.querySelectorAll("div");
var playerOneScore = document.querySelector(".player1")
var playerTwoScore = document.querySelector(".player2")
var draw = document.querySelector(".draw")

// Game Info
var scores = {
  playerOne: 0,
  playerTwo: 0,
  games: 0,
  draw: 0
};

// Function to switch between players
var count = 0;
var getCurrentPlayer = function() {
  count += 1;
  if (count % 2 === 1) {
    return playerOneClicked;
  } else {
    return playerTwoClicked;
  }
};

// Function to push up clicked
var playerOneClicked = [];
var playerTwoClicked = [];

// Winning options
var winnerCombos = [
  ["box-1", "box-2", "box-3"],
  ["box-4", "box-5", "box-6"],
  ["box-7", "box-8", "box-9"],
  ["box-1", "box-4", "box-7"],
  ["box-2", "box-5", "box-8"],
  ["box-3", "box-6", "box-9"],
  ["box-1", "box-5", "box-9"],
  ["box-3", "box-5", "box-7"]
];


// Is winner - returns TRUE
var playerOneWinner = function() {
  for (i = 0; i < winnerCombos.length; i++) {
    var counter = 0;
    for (k = 0; k < winnerCombos[i].length; k++) {
      for (j = 0; j < playerOneClicked.length; j++) {
        if (winnerCombos[i][k] === playerOneClicked[j]) {
          counter++
          if (counter === 3) {
            return true;
          }
        } 
      }
    }
  }
};
var playerTwoWinner = function() {
  for (i = 0; i < winnerCombos.length; i++) {
    var counter = 0;
    for (k = 0; k < winnerCombos[i].length; k++) {
      for (j = 0; j < playerTwoClicked.length; j++) {
        if (winnerCombos[i][k] === playerTwoClicked[j]) {
          counter++
          if (counter === 3) {
            return true;
          }
        } 
      }
    }
  }
};

// Announce winner, update score and reset game
var announceWinner = function() {
  if (playerOneWinner()) {
    playerOneClicked = [];
    playerTwoClicked = [];
    scores.playerOne++
    playerOneScore.textContent = scores.playerOne
    document.querySelectorAll('div').forEach(function(item) {
      item.classList.remove('playerOne')
      item.classList.remove('playerTwo')
    })
  } else if (playerTwoWinner()) {
    playerOneClicked = [];
    playerTwoClicked = [];
    scores.playerTwo++
    playerTwoScore.textContent = scores.playerTwo
    document.querySelectorAll('div').forEach(function(item) {
      item.classList.remove('playerOne')
      item.classList.remove('playerTwo')
    })
  } else if (document.querySelectorAll('.playerOne').length === 4) {
    playerOneClicked = [];
    playerTwoClicked = [];
    scores.draw++
    draw.textContent = scores.draw
    document.querySelectorAll('div').forEach(function(item) {
      item.classList.remove('playerOne')
      item.classList.remove('playerTwo')
    })
  }
}

// Runs all functions
var handleClick = function(event) {
  if (count % 2 === 1) {
    event.target.classList.toggle("playerOne");
  } else {
    event.target.classList.toggle("playerTwo");
  }
  // Pushing up class name of clicked boxes
  getCurrentPlayer(event.target).push(event.target.classList[0]);
  playerOneWinner();
  playerTwoWinner();
  announceWinner()
};

// Event listener
boxes.forEach(function(box) {
  box.addEventListener("click", handleClick);
});