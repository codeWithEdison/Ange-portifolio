let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function selectOperator(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function calculate() {
  let result = 0;
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      alert("Division by zero is not allowed!");
    } else {
      result = num1 / num2;
    }
  }

  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = currentNumber;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = "";
}
