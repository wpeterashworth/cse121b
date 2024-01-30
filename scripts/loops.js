myInfo = {
    name: "Peter Ashworth",
    photo: "images/picture_of_me.jpeg",
    favoriteFoods: ["Pizza", "Steak", "Cheeseburger", "Shrimp", "Bacon"],
    hobbies: ["Games", "Coding", "Family"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "1 year",
      },
      {
        place: "Clayton, CA",
        length: "21 years",
      },
      {
        place: "Any Other Place",
        length: "0 years",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];


function favoriteFoodsLoop(food) {
    let foodItem = document.createElement("li");
    foodItem.textContent = food;
    document.querySelector("#favorite-foods").appendChild(foodItem);
};

myInfo.favoriteFoods.forEach(favoriteFoodsLoop);

function placesLived() {
    document.querySelector("#places-lived").innerHTML = myInfo.placesLived
    .map((place) => `<dt>${place.place}</dt><dd>${place.length}</dd>`)
}

myInfo.placesLived.forEach(placesLived);

// or 

// function mapFoods(food) {
//     let foodItem = document.createElement("li");
//     foodItem.textContent = food;
//     document.querySelector("#favorite-foods").appendChild(foodItem);
//     return foodItem;
// };

// const foodListItems = myInfo.favoriteFoods.map(mapFoods);
// console.log(myInfo.favoriteFoods.join(""));



  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);
  