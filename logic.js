function addToDisplay(input) { 
    const displayScreen = document.getElementById('calculator-display');
    displayScreen.value += input;
}

function calculateResult() {
    const displayScreen = document.getElementById('calculator-display');
    try {
        displayScreen.value = eval(displayScreen.value);
    } catch (e) {
        displayScreen.value = 'Error';
    }
}

function clearDisplay() {
    const displayScreen = document.getElementById('calculator-display');
    displayScreen.value = '';
}