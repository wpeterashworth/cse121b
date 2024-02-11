/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = {};

/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const templeImage = document.createElement("img");
        templeImage.setAttribute("src", `${temple.imageUrl}`);
        templeImage.setAttribute("alt", `${temple.location}`);
        article.appendChild(templeImage);
        article.appendChild(h3);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
function reset() {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
function filterTemples() {
    reset();
    let filter = document.querySelector("#filtered").value;
    switch(filter) {
        case "utah":
            displayTemples(templeList.filter(temple => temple.location.toLowerCase().includes("utah")));
            break;
        case "notutah":
            displayTemples(templeList.filter(temple => temple.location.toLowerCase().includes("utah")));
            break;
        case "older":
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(templeList.filter(temple => temple));
    }
}   

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});