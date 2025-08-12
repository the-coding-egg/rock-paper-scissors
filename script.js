function getComputerChoice() {
  let numberchoice = Math.floor(Math.random() * 100);
  let compchoice = "";

  if (numberchoice <= 33) {
    compchoice = "rock";
  } else if (numberchoice >= 67) {
    compchoice = "scissors";
  } else {
    compchoice = "paper";
  }

  return compchoice;
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  return choice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      console.log("You win! Rock beats Paper!");
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
      computerScore += 1;
      console.log("You lose! Paper beats Rock!");
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "rock") {
      console.log("Draw! Rock on Rock!");
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "paper") {
      console.log("Draw! Paper on Paper!");
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
      humanScore += 1;
      console.log("You win! Paper beats Rock!");
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
      computerScore += 1;
      console.log("You lose! Scissors beats Rock!");
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "scissors") {
      console.log("Draw! Scissor on Scissor!");
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      console.log("You win! Scissors beat Paper!");
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissor");
      computerScore += 1;
    }
  }

  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
}
