gameStart = alert("Press 'OK' to start the game.");

var moveChoice = {
    computerChoice: ["R", "P", "S"],
    userChoice: ["R", "P", "S"]
}

var gameOutcome = ["Wins: ", "Losses: ", "Ties: "]


moveChoice.userChoice = prompt("Please enter R, P, or S.");
console.log(moveChoice.userChoice);



