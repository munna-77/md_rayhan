let isResultDisplayed = false;

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;
            handleButtonPress(value);
        });
    });

    document.getElementById('clear').addEventListener('click', clearDisplay);
    document.getElementById('backspace').addEventListener('click', backspace);
    document.getElementById('squareRoot').addEventListener('click', calculateSquareRoot);
    document.getElementById('percent').addEventListener('click', calculatePercentage);
    document.getElementById('equal').addEventListener('click', calculateResult);

    document.addEventListener('keydown', handleKeyPress);
});

function handleButtonPress(value) {
    if (!isNaN(value) || value === '.') {
        appendToDisplay(value);
    } else if (value === 'C') {
        clearDisplay();
    } else if (value === '⌫') {
        backspace();
    } else if (value === '√') {
        calculateSquareRoot();
    } else if (value === '%') {
        calculatePercentage();
    } else if (value === '=') {
        calculateResult();
    } else {
        appendToDisplay(value);
    }
}

function handleKeyPress(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    }
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (isResultDisplayed) {
        display.innerText = value;
        isResultDisplayed = false;
    } else {
        display.innerText = (display.innerText === '0' && value !== '.') ? value : display.innerText + value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
    isResultDisplayed = false;
}

function backspace() {
    const display = document.getElementById('display');
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1) || '0';
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        if (isValidExpression(display.innerText)) {
            const result = new Function('return ' + display.innerText)();
            display.innerText = result;
            isResultDisplayed = true;
        } else {
            display.innerText = 'Error';
        }
    } catch (error) {
        display.innerText = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    try {
        const expression = display.innerText;
        if (isValidExpression(expression)) {
            const currentValue = parseFloat(eval(expression));
            if (currentValue < 0) {
                display.innerText = 'Error';
            } else {
                const result = Math.sqrt(currentValue);
                display.innerText = result;
                isResultDisplayed = true;
            }
        } else {
            display.innerText = 'Error';
        }
    } catch (error) {
        display.innerText = 'Error';
    }
}

function calculatePercentage() {
    const display = document.getElementById('display');
    try {
        const expression = display.innerText;
        if (isValidExpression(expression)) {
            const result = parseFloat(eval(expression)) / 100;
            display.innerText = result;
            isResultDisplayed = true;
        } else {
            display.innerText = 'Error';
        }
    } catch (error) {
        display.innerText = 'Error';
    }
}

function isValidExpression(expression) {
    return /^[\d\+\-\*\/\.\(\)\s]+$/.test(expression);
}
