var boxes = document.querySelectorAll('div')

var scores = {
  playerOne: 0, 
  playerTwo: 0,
  games: 0,
  draw: 0,
}


// Function to switch between players
var count = 0;
var getCurrentPlayer = function(element) {
  count += 1;
  if (count % 2 === 1) {
    return playerOneClicked
  } else {
    element.style.backgroundColor = "green"
    return playerTwoClicked
  }
}

// Function to push up clicked
var playerOneClicked = []
var playerTwoClicked = []  

// Winning options
var winnerCombos = [
  ["box-1", "box-2", "box-3"],
  ["box-4", "box-5", "box-6"],
  ["box-7", "box-8", "box-9"],
  ["box-1", "box-4", "box-7"],
  ["box-2", "box-5", "box-8"],
  ["box-3", "box-6", "box-9"],
  ["box-1", "box-5", "box-9"],
  ["box-3", "box-5", "box-7"],
]

// Is winner - return TRUE
var isWinner = function() {
  for (i = 0; i < playerOneClicked.length; i++) {
    for (j = 0; j < winnerCombos.length; j++) {
      var counter = 0;
      for (k = 0; k < winnerCombos[j].length; k++) {
        if (playerOneClicked[i] === winnerCombos[j][k]) {
          counter++
        }
      }
    } 
  }
  if (counter === 3) {
    return true;
  }
}

// Announce winner, update score and reset game
// var announceWinner = function() {
//   if (count % 2 === 1 && isWinner()) {
//     document.querySelectorAll('div').forEach(function(item) {
//       item.classList.remove('completed')
//       scores.playerOne++
//     })
//   } else if (count % 2 === 0 && isWinner()) {
//     document.querySelectorAll('div').forEach(function(item) {
//       item.classList.remove('completed')
//       scores.playerTwo++
//     })  
//   } else if (document.querySelectorAll('.completed').length === 7) {
//     document.querySelectorAll('div').forEach(function(item) {
//       item.classList.remove('completed')
//       scores.draw++
//     })
//   }
// }

var handleClick = function(event) {
  event.target.classList.toggle('completed')
  // Pushing up class name of clicked boxes
  getCurrentPlayer(event.target).push(event.target.classList[0])
  isWinner()
  // announceWinner()
}
  
// Event listener
boxes.forEach(function(box) {
  box.addEventListener('click', handleClick)
})