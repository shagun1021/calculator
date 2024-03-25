let screen = document.getElementById('screen');

function addToScreen(value) {
    screen.innerText += value;
}

function clearScreen() {
    screen.innerText = '';
}

function calculate() {
    try {
        screen.innerText = eval(screen.innerText);
    } catch (error) {
        screen.innerText = 'Error';
    }
}
