const myArray = document.createElement("Array");
myArray.innerText = (["Hello", "World"]);
document.body.appendChild(myArray);
myArray.pop(last);

let firstName = "Antonia";
let lastName = "Francesca";

// function fullName(firstName, lastName) {
//     return (`${firstName} ${lastName}`);
// }

// const fullName = function(firstName, lastName) {
//     return (`${firstName} ${lastName}`);
// }

const fullName = (firstName, lastName) => {
    return (`${firstName} ${lastName}`);
}

document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);

let names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];
let namesB = names.filter(name => name.charAt(0) === "B");
console.log(namesB);
let namesLength = names.map(lengthOfName => lengthOfName.length);
console.log(namesLength);
let averageLength = names.reduce((total, value) => total + value.length, 0) / names.length;
console.log(averageLength);



// LOOPS :

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for (score of studentReport) {
//     if (score < LIMIT) {
//         console.log(score);
//     }
// }


// let i = 0;
// while (i < studentReport.length) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
//     i++;
// }

// studentReport.forEach(function (score) {
//     if (score < LIMIT) {
//         console.log(score);
//     }
// });

// for (let i in studentReport) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i])
//     }
// }


// callback functions :

// function calculate(a = 2, b = 3, result) {
//     result = displayResult(a + b);
//     return result;
//   }
  
// function displayResult(result) {
//     console.log('The result is: ' + result);
//   }

// calculate();