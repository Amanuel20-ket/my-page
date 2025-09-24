 function appendToDisplay(val) {
    const display = document.getElementById('display');
    display.value += val;
}

function Result() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression safely
        // Replace '×' and '÷' if you use those symbols
        let expression = display.value.replace(/[^-()\d/*+.]/g, '');
        display.value = eval(expression);
    } catch {
        display.value = 'Error';
    }
}

function Clear() {
    document.getElementById('display').value = '';
}