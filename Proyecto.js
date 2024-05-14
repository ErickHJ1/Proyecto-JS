let currentExpression = '';



function appendToScreen(value) {
    currentExpression += value;
    document.getElementById('screen').textContent = currentExpression;
}

function clearScreen() {
    currentExpression = '';
    document.getElementById('screen').textContent = '0';
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        document.getElementById('screen').textContent = result;
        currentExpression = result.toString();
    } catch (error) {
        document.getElementById('screen').textContent = 'Error';
    }
}

let resultados = localStorage.setItem("resulta", calculateResult)
localStorage.getItem(calculateResult)