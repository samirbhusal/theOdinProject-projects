let currentInput = ""; // number user is typing
let firstNumber = null; // first operand
let operator = null; // + - * /
let shouldResetScreen = false;

const display = document.querySelector(".calculator-display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".btn-clear");
const equalsBtn = document.querySelector(".btn-equals");

// ----- BASIC MATH FUNCTIONS -----
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error";
  return a / b;
}

// ----- OPERATE FUNCTION -----
function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

// ----- DIGIT BUTTONS -----
digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (shouldResetScreen) {
      currentInput = "";
      shouldResetScreen = false;
    }

    currentInput += button.dataset.num;
    display.textContent = currentInput;
  });
});

// ----- OPERATOR BUTTONS -----
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentInput === "") return;

    // If an operator is already chosen, calculate intermediate result
    if (firstNumber !== null && operator !== null) {
      const result = operate(firstNumber, operator, currentInput);
      display.textContent = result;
      firstNumber = result;
    } else {
      firstNumber = currentInput;
    }

    operator = button.dataset.op;
    shouldResetScreen = true;
  });
});

// ----- EQUALS BUTTON -----
equalsBtn.addEventListener("click", () => {
  if (firstNumber === null || operator === null || currentInput === "") return;

  const result = operate(firstNumber, operator, currentInput);
  display.textContent = result;

  // Prepare for next calculation
  firstNumber = result;
  currentInput = "";
  operator = null;
  shouldResetScreen = true;
});

// ----- CLEAR BUTTON -----
clearBtn.addEventListener("click", () => {
  currentInput = "";
  firstNumber = null;
  operator = null;
  display.textContent = "0";
});
