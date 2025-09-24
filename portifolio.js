// Handles reveal/hide for skill explanations
function toggleExplain(id) {
    const exp = document.getElementById(id);
    if (exp.style.display === "block") {
        exp.style.display = "none";
    } else {
        exp.style.display = "block";
    }
}
// ...existing code...

// Dropdown menu for mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-toggle');
    const navList = document.querySelector('#nav ul');
    if (menuBtn && navList) {
        menuBtn.addEventListener('click', function() {
            navList.classList.toggle('show');
        });
    }
});

// ...existing code...

// calculator js
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