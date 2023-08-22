let input = "";
let output = document.getElementById("output");

function displayInput(event) {
  input += event.target.value;
  if (input.includes("clear")) input = "";
  output.innerHTML = input;
  console.log(input);
}

document.querySelectorAll("#calculatorButtons button").forEach((button) => {
  button.addEventListener("click", (event) => {
    displayInput(event);
  });
});

function applyOperator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    case "^":
      return Math.pow(num1, num2);
    default:
      throw Error(`unsupported operator: ${operator}`);
  }
}
