
var userChoice = prompt("Do you choose rock, paper, or scissors?");
console.log("you chose: " + userChoice)

var compChoice = Math.random()

if (compChoice <= .33){
	compChoice = "rock"
} 
else if (compChoice <= .66){
	compchoice = "paper";
}
else {
	compchoice = "scissors";
}

if (compChoice === userChoice) {
	console.log("You tied, try again!")
}
else if (compChoice === "rock") {
	if (userChoice === "paper") {
		console.log("You beat the computer!")
	}
	else {
		console.log("The computer beat you!")
	}
}
else if (compChoice === "paper"){
	if (userChoice === "rock"){
		console.log("The computer beat you!")
	}
	else {
		console.log("You beat the computer!")
	}
}
else if (compChoice === "scissors"){
	if (userChoice === "rock"){
		console.log("You beat the Computer!")
	}
	else {
		console.log("The Computer beat you!")
	}
}
else {
	console.log("invalid response")
}







