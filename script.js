const display = document.getElementById("display");
function appendToDisplay(input) {
  display.value += input;
}

function appendToDisplaySq() {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.sqrt(currentValue);
  }
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;
    expression = expression.replace(/\^/g, "**");
    expression = expression.replace(
      /(\d+(\.\d+)?)%/g,
      (match, p1) => parseFloat(p1) / 100
    );
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}
