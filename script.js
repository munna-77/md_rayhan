function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
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
        // Find the last operator in the expression
        const lastOperatorIndex = Math.max(
            expression.lastIndexOf('+'),
            expression.lastIndexOf('-'),
            expression.lastIndexOf('*'),
            expression.lastIndexOf('/')
        );

        let percentageValue;
        if (lastOperatorIndex > -1) {
            const baseValue = parseFloat(expression.slice(0, lastOperatorIndex));
            const percentValue = parseFloat(expression.slice(lastOperatorIndex + 1));
            percentageValue = baseValue * (percentValue / 100);
            display.innerText = expression.slice(0, lastOperatorIndex + 1) + percentageValue;
        } else {
            const value = parseFloat(expression);
            percentageValue = value / 100;
            display.innerText = percentageValue;
        }
    } catch (error) {
        display.innerText = 'Error';
    }
}

function isValidExpression(expression) {
    return /^[0-9+\-*/.()]+$/.test(expression) && !/[\-*/+]$/.test(expression);
}
