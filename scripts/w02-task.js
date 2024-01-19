/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Peter Ashworth";
let currentYear = "2024";
let profilePicture = "images/picture_of_me.jpeg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");



/* Step 4 - Adding Content */
nameElement.innerHTML = (`<strong>${fullName}</strong>`);
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile Image of ${fullName}`)


/* Step 5 - Array */
favoriteFoods = ["pizza", "banana cream pie", "PB&J"];
foodElement.innerHTML += (`<br>${favoriteFoods}`);
anotherFavorite = ["chocolate "];
favoriteFoods.push(anotherFavorite);
foodElement.innerHTML += (`<br>${favoriteFoods}`);
favoriteFoods.shift();
foodElement.innerHTML += (`<br>${favoriteFoods}`);
favoriteFoods.pop();
foodElement.innerHTML += (`<br>${favoriteFoods}`);





