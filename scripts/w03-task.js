/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2
}
function addNumbers() {

    let addNumber1 = parseFloat(document.querySelector("#add1").value);
    let addNumber2 = parseFloat(document.querySelector("#add2").value);
    let sum = add(addNumber1, addNumber2); {
        return document.querySelector("#sum").value = sum;
    }
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2) {
    return number1 - number2
}

const subtractNumbers = function() {
    let subtractNumber1 = parseFloat(document.querySelector("#subtract1").value);
    let subtractNumber2 = parseFloat(document.querySelector("#subtract2").value);
    let difference = subtract(subtractNumber1, subtractNumber2); {
        return document.querySelector("#difference").value = difference;
    }
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2
}

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    let product = multiply(multiplyNumber1, multiplyNumber2); {
        return document.querySelector("#product").value = product;
    }
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2
}

function divideNumbers() {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    let quotient = divide(divideNumber1, divideNumber2); {
        return document.querySelector("#quotient").value = quotient;
    }
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */


function getTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    if (document.getElementById("member").checked) {
        subtotal = subtotal - subtotal * 0.2;
    }
    else {
        total = subtotal;
    }
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
arrayVariable = document.querySelector("#array");
/* Output Odds Only Array */
const oddNumbers = document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 === 1)
/* Output Evens Only Array */
const evenNumbers = document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0)
/* Output Sum of Org. Array */
const sum = document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
const product = document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2)
/* Output Sum of Multiplied by 2 Array */
const totalSum = document.querySelector("#sumOfMultiplied").innerHTML = sum * 2;