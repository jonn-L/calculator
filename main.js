function add(num1, num2=0) {
    return num1 + num2;
}

function subtract(num1, num2=0) {
    return num1 - num2;
}

function multiply(num1, num2=1) {
    return num1*num2;
}

function divide(num1, num2=1) {
    return num1/num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            console.log('error');

    }
}

function calculate(full_operation) {
    i = 1;
    while (full_operation.length > 1) {
        let num1 = parseFloat(full_operation[i-1]);
        let num2 = parseFloat(full_operation[i+1]);
        let operator = full_operation[i];

        full_operation.shift()
        full_operation.shift()
        full_operation[0] = operate(num1, num2, operator);
    }

    return full_operation[0];
}

const display = document.querySelector('.display')

const buttons_number = document.querySelectorAll('.number');
buttons_number.forEach(button => button.addEventListener('click', function() {
    if (button.id !== '.') {
        display.textContent += button.id;
    }
    else {
        current_display = display.textContent;
        let last_number = current_display.split(' ').pop();
        if (last_number.indexOf('.') === -1) {
            display.textContent += button.id;
        }
    }
}))

const operators = ['+', '-', '*', '/'];
const buttons_operator = document.querySelectorAll('.operator');
buttons_operator.forEach(button => button.addEventListener('click', function() {
    let current_display = display.textContent;
    if (!operators.includes(current_display[current_display.length-2])) {
        if (button.id !== '=') {
            display.textContent += ` ${button.id} `;
            current_display = display.textContent;
        }
        else {
            processed_display = current_display.split(" ");
            let result = calculate(processed_display);
            display.textContent = result;
        }
    }
}))


const button_clear = document.querySelector('.clear');
button_clear.addEventListener('click', function() {
    display.textContent = '';
})