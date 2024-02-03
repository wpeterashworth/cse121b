/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Peter Ashworth",
    photo: "images/picture_of_me.jpeg",
    favoriteFoods: ["Pizza", "Chocolate Muffins", "Fried Chicken", "Steak", "Lobster", "PB&J Sandwich"],
    hobbies: ["Basketball", "Spending Time with Family", "Cooking", "Video Games", "Composing Music"],
    placesLived: []
};

myProfile.placesLived.push({
    place: "Clayton, CA", 
    length: "21 years",
})

myProfile.placesLived.push({
    place: "Rexburg, ID",
    length: "1 year"
})

function updateOtherInfo(myProfile) {
    document.querySelector("#name").textContent = myProfile.name;
    document.querySelector("#photo").setAttribute("src", myProfile.photo);
    document.querySelector("#photo").setAttribute("alt", myProfile.name);
    myProfile.favoriteFoods.forEach(food => {
        let li = document.createElement("li");
        li.textContent = food;
        document.querySelector("#favorite-foods").appendChild(li);
    });
    myProfile.hobbies.forEach(hobby => {
        let li = document.createElement("li");
        li.textContent = hobby;
        document.querySelector("#hobbies").appendChild(li);
    });
    myProfile.placesLived.forEach(element => {
        let dt = document.createElement("dt");
        let dd = document.createElement("dd");
        dt.textContent = element.place;
        dd.textContent = element.length;
        document.querySelector("#places-lived").appendChild(dt);
        document.querySelector("#places-lived").appendChild(dd);
    });
}

updateOtherInfo(myProfile);



/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


