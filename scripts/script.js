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
        firstNumber= '';
        return a;
    }
}


// console.log(operate('2', '/', '0'));

let display = document.querySelector('.display');

let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (currOperator == '') {
            firstNumber += button.innerText;
            display.innerText = firstNumber;
        }
        else {
            display.innerText = '';
            secondNumber += button.innerText;
            display.innerText = secondNumber;

        }
    });
});


let operatorKeys = document.querySelectorAll('.operator');

operatorKeys.forEach(operatorKey => {
    operatorKey.addEventListener('click', (e) => {
        // let x = (e.currentTarget).getAttribute('class');
        // console.log(x);
        oldOperator = currOperator;
        currOperator = operatorKey.innerText;
        if (firstNumber != '' && secondNumber != '' && oldOperator != '') {
            ans = operate(firstNumber, oldOperator, secondNumber);
            display.innerText = ans;
            if(currOperator != '='){
                firstNumber = ans;
                console.log(ans);
                ans = '';
                secondNumber = '';
            }
            else{
                console.log('viva la vida')
                let currnTrgt = (e.currentTarget).getAttribute('class');
                console.log(currnTrgt);
                if(currnTrgt == 'operator'){
                    firstNumber = ans;
                    console.log(ans);
                    ans = '';
                    secondNumber = '';
                    console.log('hi');
                }
                else{
                    firstNumber = '';
                    currOperator = '';
                    oldOperator = ''
                    secondNumber = '';
                    ans = '';
                }
            }
        }

    })
})

let clear = document.querySelector('.functn-btn-AC');

clear.addEventListener('click', () => {
    firstNumber = '';
    currOperator = '';
    oldOperator = ''
    secondNumber = '';
    ans = '';
    display.innerText = '0';
})