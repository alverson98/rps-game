var gameStart = alert("Press 'OK' to start the game.");

 var userChoice =  ["R", "P", "S"];

 var computerOptions =  ["R", "P", "S"];

 var computerChoice = computerOptions [Math.floor(Math.random()*computerOptions.length)];

userChoice = prompt("Please enter R, P, or S.");

alert("The computer chose " + computerChoice);


if (userChoice === computerChoice) {
alert("It was a tie!");
} else if (userChoice([0]), computerChoice([1])) {
alert("The computer won!");
} else if (userChoice([0]), computerChoice([2])) {
    alert("You won!");
} else if (userChoice([1]), computerChoice([0])) {
    alert("You won!");
} else if (userChoice([1]), computerChoice([2])) {
    alert("The computer won!");
} else if (userChoice([2]), computerChoice([0])) {
    alert("You won!");
} else (userChoice([2]), computerChoice([1])) 
    alert("The computer won!");


