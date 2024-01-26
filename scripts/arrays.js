// const steps = ["one", "two", "three"];
// const stepsHtml = steps.map(function(step) {
//     return `<li>${step}</li>`;
// });
// document.getElementById("#myList").innerHTML = stepsHtml.join();



let grades = ["A", "B", "A"];
function convertGradesToPoints(grade) {
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    return points;
}



const gpaPoints = grades.map(convertGradesToPoints);
console.log(gpaPoints);
let totalGPA = gpaPoints.reduce((total, grade) => total + grade) /grades.length;
console.log(totalGPA);

let fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
let longFruits = fruits.filter(fruit => fruit.length > 6);
console.log(longFruits);



let myArray = [12, 34, 21, 54];
const luckyNumber = 21;
if (myArray.indexOf(luckyNumber) === 2) {
    console.log(`Hi, you found the lucky number! ${luckyNumber}!`)
}
