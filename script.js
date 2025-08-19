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

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);


function getHumanChoice() {
  rock.addEventListener("click", () => choice = "rock");
  paper.addEventListener("click", () => choice = "paper");
  scissors.addEventListener("click", () => choice = "scissors");
  return choice;
}

function playGame() {

  let humanScore = 0;
  let computerScore = 0;
  const score = document.createElement("p");
  document.body.appendChild(score);
  score.append("Human: ", humanScore, " Computer: ", computerScore);

  const result = document.createElement("div");
  document.body.appendChild(result);

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      result.textContent = "DRAW!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore += 1;
      result.textContent = "You lose! Paper beats Rock!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      result.textContent = "You win! Paper beats Rock!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      result.textContent = "You win! Scissors beat Paper!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore += 1;
      result.textContent = "You lose! Rock beats Scissor";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore += 1;
      result.textContent = "You lose! Scissors beats Rock!";
    }
  }



  //   let round = 1;
  //   while (round <= 5) {
  //     console.log("Round:", round);
  //     let humanSelection = getHumanChoice();
  //     let computerSelection = getComputerChoice();
  //     playRound(humanSelection, computerSelection);
  //     round += 1;
  //     console.log("Human Score:", humanScore, "Computer Score:", computerScore);
  //   }
}

playGame();
