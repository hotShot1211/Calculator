let firstNumber = '';
let currOperator = '';
let oldOperator = ''
let secondNumber = '';
let ans = '';

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (b != 0) {
        return Number(a) / Number(b);
    }
    else {
        return 'You are better thant his!';
    }
}

function operate(a, operator, c) {
    console.log(a);
    console.log(operator);
    console.log(c);

    if (operator == '+') {
        return add(a, c);
    }
    if (operator == '-') {
        return subtract(a, c);
    }
    if (operator == '*') {
        return multiply(a, c);
    }
    if (operator == '/') {
        return divide(a, c);
    }
    if (operator == '=') {

        return a;
    }
}


let display = document.querySelector('.display');

let buttons = document.querySelectorAll('.btn-cntnr div');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let currClass = button.getAttribute('class');
        if (currClass == 'btn') {
            if (currOperator == '=') {
                firstNumber = '';
                currOperator = '';
                oldOperator = ''
                secondNumber = '';
                ans = '';
            }
            if (currOperator == '') {
                firstNumber += button.innerText;
                display.innerText = firstNumber;
                console.log('x:' + firstNumber);
            }
            else {
                display.innerText = '';
                secondNumber += button.innerText;
                display.innerText = secondNumber;
                console.log('y:' + secondNumber);
            }
        }
        else {
            if (firstNumber == '') {
                return;
            }
            if (currOperator == '') {
                currOperator = button.innerText;
            }
            else {
                oldOperator = currOperator;
                currOperator = button.innerText;
                ans = operate(firstNumber, oldOperator, secondNumber);
                console.log(ans);
                display.innerText = ans;
                secondNumber = '';

                firstNumber = ans;

            }
        }

    })
})

let cnsl = document.querySelector('.functn-btn-clr');
cnsl.addEventListener('click', () => {
    console.log(firstNumber);
    console.log(oldOperator);
    console.log(secondNumber);
    console.log(currOperator);
})
