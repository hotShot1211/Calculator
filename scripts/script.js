function add(a, b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return Number(a) - Number(b);
}

function multiply(a, b){
    return Number(a) * Number(b);
}

function divide(a, b){
    return Number(a) / Number(b);
    // if(b != 0){
    // }
    // else{
    //     return NaN;
    // }
}

function operate(a, operator,c){
    if(operator == '+'){
        return add(a, c);
    }
    if(operator == '-'){
        return subtract(a, c);
    }
    if(operator == '*'){
        return multiply(a, c);
    }
    if(operator == '/'){
        return divide(a, c);
    }
}


console.log(operate('2', '/', '0'));