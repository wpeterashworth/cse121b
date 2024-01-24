// const myArray = document.createElement("Array");
// myArray.innerText = (["Hello", "World"]);
// document.body.appendChild(myArray);
// myArray.pop(last);

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
