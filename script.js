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

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use a safer approach instead of eval
        const result = new Function('return ' + display.innerText)();
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
