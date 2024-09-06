const parent = document.getElementsByClassName('buttons')[0];
const display = document.getElementById('display');
let number = '';
let initial_isZero = true;
let expression = [];

parent.addEventListener('click', function (event) {
    let clicked_btn = event.target.innerText;
    let operator = event.target.innerText;

    if (!isNaN(clicked_btn) || clicked_btn === '.') {
        if (clicked_btn === '.' && number.includes('.')) {
            return; 
        }
        number += clicked_btn;
        if (initial_isZero) {
            display.innerText = clicked_btn;
            initial_isZero = false;
        } else {
            display.innerText += clicked_btn;
        }
    }

    else if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        if (number !== '') {
            expression.push(number); 
            number = ''; input
        }
        expression.push(operator); 
        display.innerText += ' ' + operator + ' ';
    }


    else if (operator === '=') {
        expression.push(number); 
        compute(expression); 
        initial_isZero = true; 
    }

    else if (operator === 'AC') {
        display.innerText = 0;
        expression = [];
        number = '';
        initial_isZero = true;
    }
});

function compute(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '*' || array[i] === '/') {
            let result = calculate(Number(array[i - 1]), array[i], Number(array[i + 1]));
            array.splice(i - 1, 3, result); // 
            i--; 
        }
    }

    let res = Number(array[0]);
    for (let i = 1; i < array.length; i += 2) {
        let operator = array[i];
        let nextNum = Number(array[i + 1]);
        res = calculate(res, operator, nextNum);
    }

    display.innerText = res; 
    expression = [];
    number = '';
}

function calculate(num1, op, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 == 0) {
                return 'Cannot divide by zero';
            } else {
                return num1 / num2;
            }
    }
}
