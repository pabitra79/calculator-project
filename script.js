let inputBox = document.getElementById('inputbox');
function appendNumber(number) {
    inputBox.value += number;
}

function appendOperator(operator) {
    inputBox.value += operator;
}

function clearInput() {
    inputBox.value = '';
}

function deleteLast() {
    inputBox.value = inputBox.value.slice(0, -1);
}

function calculate() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        inputBox.value = 'Error';
    }
}

