
let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === '') {
        currentInput = value;zsx3de
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function calculateResult() {
    try {
        
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (error) {
        
        display.textContent = 'Error';
        currentInput = '0';
    }
}
