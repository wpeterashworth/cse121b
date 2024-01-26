// const myArray = document.createElement("Array");
// myArray.innerText = (["Hello", "World"]);
// document.body.appendChild(myArray);
// myArray.pop(last);

// let firstName = "Antonia";
// let lastName = "Francesca";

// // function fullName(firstName, lastName) {
// //     return (`${firstName} ${lastName}`);
// // }

// // const fullName = function(firstName, lastName) {
// //     return (`${firstName} ${lastName}`);
// // }

// const fullName = (firstName, lastName) => {
//     return (`${firstName} ${lastName}`);
// }

// document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);

let names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];
let namesB = names.filter(name => name.charAt(0) === "B");
console.log(namesB);
let namesLength = names.map(lengthOfName => lengthOfName.length);
console.log(namesLength);
let averageLength = names.reduce((total, value) => total + value.length, 0) / names.length;
console.log(averageLength);