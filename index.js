const options = ["rock", "paper", "scissors"];

//////////////////////

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
let computerScore = 0;
let playerScore = 0;
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");

//////////////////////

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock, Paper, or Scissors");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLocaleLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    const p = document.createElement("p");
    p.innerText = `It's a tie!, you both picked ${playerSelection}`;
    outcomeDiv.append(p);
  } else if (result == "Player") {
    const p = document.createElement("p");
    p.innerText = `Player Wins! , ${computerSelection} beats ${playerSelection}`;
    outcomeDiv.append(p);
  } else {
    const p = document.createElement("p");
    p.innerText = `Computer Wins! , ${computerSelection} beats ${playerSelection}`;
    outcomeDiv.append(p);
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore++;
    return "Player";
  } else {
    computerScore++;
    return "Computer";
  }
}

const updatedScore = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`;
  computerScoreSpan.innerText = `Player Score: ${computerScore}`;
};

/////

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  updatedScore(playerScore, computerScore);
  if (playerScore === 5) {
    let h2 = document.createElement("h2");
    h2.classList.add = "player-won";
    h2.innerText = `You Won!, ${playerScore} to ${computerScore}`;
    outcomeDiv.append(h2);
  } else if (computerScore === 5) {
    let h2 = document.createElement("h2");
    h2.classList.add = "computer-won";
    h2.innerText = `You Lose! ${computerScore} to ${playerScore}`;
    outcomeDiv.append(h2);
  }
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  updatedScore(playerScore, computerScore);
  if (playerScore === 5) {
    let h2 = document.createElement("h2");
    h2.classList.add = "player-won";
    h2.innerText = `You Won!, ${playerScore} to ${computerScore}`;
    outcomeDiv.append(h2);
  } else if (computerScore === 5) {
    let h2 = document.createElement("h2");
    h2.classList.add = "computer-won";
    h2.innerText = `You Lose! ${computerScore} to ${playerScore}`;
    outcomeDiv.append(h2);
  }
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  updatedScore(playerScore, computerScore);
  if (playerScore === 5) {
    let h2 = document.createElement("h2");
    h2.classList.add = "player-won";
    h2.innerText = `You Won!, ${playerScore} to ${computerScore}`;
    outcomeDiv.append(h2);
  } else if (computerScore === 5) {
    let h2 = document.createElement("h2");
    h2.classList.add = "computer-won";
    h2.innerText = `You Lose! ${computerScore} to ${playerScore}`;
    outcomeDiv.append(h2);
  }
});
