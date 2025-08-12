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

function playGame() {


  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      console.log("You win! Rock beats Scissors!");
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

  let round = 1;
  while (round <= 5) {
    console.log("Round:", round);
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    round += 1;
    console.log("Human Score:", humanScore, "Computer Score:", computerScore);
  }
}

playGame();
