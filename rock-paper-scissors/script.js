const values = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// STEP 1: Get computer choice
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};

// STEP 2: Play a single round
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    showResult(`It's a tie! You both chose ${humanChoice}`);
    return;
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock");

  if (humanWins) {
    humanScore++;
    showResult(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    showResult(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  updateScore();
  checkWinner();
};

// STEP 3: Update UI score
const updateScore = () => {
  document.querySelector(
    ".score-div"
  ).textContent = `You: ${humanScore}  |  Computer: ${computerScore}`;
};

// STEP 4: Display results in UI
const showResult = (message) => {
  document.querySelector(".result-div").textContent = message;
};

// STEP 5: Check if someone reached 5 points
const checkWinner = () => {
  if (humanScore === 5) {
    showResult("🎉 Congratulations! You won the game!");
    disableButtons();
  }

  if (computerScore === 5) {
    showResult("💀 Sorry! The computer won the game.");
    disableButtons();
  }
};

// Disable all buttons after game ends
const disableButtons = () => {
  document.querySelectorAll("button.choice-btn").forEach((btn) => {
    btn.disabled = true;
  });
};

// STEP 6: Add event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button.choice-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const humanChoice = button.dataset.choice;
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    });
  });

  updateScore(); // initialize score display
});
