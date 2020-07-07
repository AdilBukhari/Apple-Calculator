const operators = document.getElementsByClassName("operator");
[...operators].forEach((operator) => {
    // if (document.getElementById('output').innerHTML === 'Error') {
    //     return;
    // }

    operator.addEventListener('click', function() {
        [...operators].forEach((optr) => {
            if (optr.value === 'true') {
                optr.style.color = 'white';
                optr.style.backgroundColor = '#ff9e0a';
                optr.value = false;
            }
        });
        this.value = true;
        this.style.backgroundColor = 'white';
        this.style.color = '#ff9e0a';

        let result = document.getElementById('result');
        if (result.innerHTML !== '0') {
            document.getElementById('output').innerHTML = result.innerHTML;
            result.innerHTML = '0';
        }
    });
});

const numerics = document.getElementsByClassName("numeric");
[...numerics].forEach((number) => {
    number.addEventListener('click', function() {
        let num = this.value;
        let output = document.getElementById('output');
        let currentNumber = output.innerHTML;

        // if (currentNumber === 'Error') {
        //     currentNumber = '0';
        // }

        let operating = false;

        [...operators].forEach((operator) => {
            if(operator.value === 'true') {
                output.innerHTML = num;
                document.getElementById('result').innerHTML = operate(parseInt(currentNumber), parseInt(num), operator.id);

                operator.style.color = 'white';
                operator.style.backgroundColor = '#ff9e0a';
                operator.value = 'false';

                operating = true;
            }
        });


        if (!operating){

            let decimalIndex = currentNumber.indexOf('.')
            if (this.id === 'decimal' && decimalIndex !== -1) {
                return;
            } else if (currentNumber.substr(decimalIndex).length > 1){
                return;
            }

            if (+currentNumber === 0) {
                currentNumber = this.value;
            } else {
                currentNumber += this.value;
            }

            output.innerHTML = currentNumber;
        }
    });
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
    document.getElementById('output').innerHTML = '0';
    document.getElementById('result').innerHTML = '0';
});

const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', function() {
    let output = document.getElementById('output');
    let currentNumber = output.innerHTML;

    currentNumber = currentNumber.slice(0, -1);

    if (currentNumber.length === 0) {
        currentNumber = '0';
    }
    output.innerHTML = currentNumber;
});

const equalsButton = document.getElementById('equal');
equalsButton.addEventListener('click', equate);

function equate() {
    document.getElementById('output').innerHTML = document.getElementById('result').innerHTML;
}

function operate(a, b, operator) {
    let result = 0;
    if (operator === 'add') {
        result = add(a, b);
    } else if (operator === "subtract") {
        result = subtract(a, b);
    } else if (operator === 'multiply') {
        result = multiply(a, b);
    } else if (operator === 'divide') {
        result = divide(a, b);
    }

    return result;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    // if (b !== 0) {
    //     return a / b;
    // } else {
    //     return 'Error';
    // }

    return a / b;
}