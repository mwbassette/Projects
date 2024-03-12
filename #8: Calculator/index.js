const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const display = document.querySelector(".display-area");

let currentNumber = '';
let previousNumber = '';
let operation = null;

numberButtons.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        appendNumber(numBtn.innerText);
    });
  });
operatorButtons.forEach(oprBtn => {
    oprBtn.addEventListener('click', () => {
        handleSelectedOperation(oprBtn.innerText);
    })
})

clearButton.addEventListener('click', clearDisplay);
equalButton.addEventListener('click', calculate);

function appendNumber(newNum) {
    currentNumber = currentNumber.toString() + newNum.toString();
    display.innerText = currentNumber;
    limitNumberCount();
}
function handleSelectedOperation(selectedOperation) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = selectedOperation;
    previousNumber = currentNumber;
    currentNumber = '';
}
function calculate() {
    let calculation;
    const prev = parseFloat(previousNumber);
    const cur = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(cur)) return;
    switch (operation) {
        case '÷':
            calculation = prev / cur;
            break;
        case '×':
            calculation = prev * cur;
            break;
        case '−':
            calculation = prev - cur;
            break;
        case '+':
            calculation = prev + cur;
            break;
        default:
            return;
    }
    currentNumber = calculation;
    operation = undefined;
    previousNumber = '';
    updateDisplay();
}    
function clearDisplay() {
    display.innerText = '';
    currentNumber = '';
    previousNumber = '';
}
function updateDisplay() {
    display.innerText = currentNumber;
}
function limitNumberCount() {
    if (currentNumber.length > 13) {
        currentNumber = currentNumber.substring(0,13);
    }
}
}



// IDEA: RNG greeting text upon refresh
// e.g. "Let's do some math" "Math rules."
// "No math, no life"