const values = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};

const getHumanChoice = () => {
  const humanChoice = prompt("Enter rock, paper or scissors:").toLowerCase();
  return humanChoice;
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
    return;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
    return;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
    return;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
    return;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
    return;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
    return;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
    return;
  } else {
    console.log("Invalid choice! Please choose rock, paper, or scissors.");
    return;
  }
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry! The computer won the game!");
  } else {
    console.log("The game is a tie!");
  }
};

playGame();
