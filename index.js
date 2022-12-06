const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner (playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
             (playerSelection == "scissors" && computerSelection == "paper") ||
             (playerSelection == "paper" && computerSelection == "rock")) {
    return "Player";    
    }
    else {
        return "Computer";
    }
}


function playRound (playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a Tie!";
    }
    else if (result == "Player"){
        return `Player Wins!, ${playerSelection} beats ${computerSelection}`;
    }
      else{
          return `Computer Wins! , ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice(){ 
   let validatedInput = false;
   while(validatedInput == false) {
    const choice = prompt("Rock, Paper, or Scissors");
    if(choice == null){
        continue;
    }
    const choiceInLower = choice.toLocaleLowerCase();
    if(options.includes(choiceInLower)){
        validatedInput = true;
        return choiceInLower;
    }
   }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome")
for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection));
 console.log("----------------------");
 if(checkWinner(playerSelection, computerSelection) == "Player"){
    playerScore++;
 } else if(checkWinner(playerSelection, computerSelection) == "Computer"){
    computerScore++;
 }
 
}
console.log("Game Over")
if(playerScore > computerScore){
    console.log("Player Wins")
}
else if(playerScore < computerScore){
    console.log("Computer Wins")
}
else{
    console.log("It's a tie")
}
}
game();
