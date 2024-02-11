/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templeList.forEach(() => {
        const articleElement = document.createElement("article");
        let h3Element = document.createElement("h3");
        h3Element.textContent += this.templeName;
        const templeImage = document.createElement("img");
        templeImage.setAttribute("src", `${this.imageURL}`);
        templeImage.setAttribute("alt", `${this.location}`);
        articleElement.appendChild(templeImage);
        articleElement.appendChild(h3Element);
        templesElement.appendChild(articleElement);
        console.log(h3Element);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        let data = await response.json();
        templeList.push(data);
        displayTemples(templeList);
    }
}

/* reset Function */
function reset(templesElement) {
    templesElement.articleElement = "";
}

/* filterTemples Function */
function filterTemples() {
    reset(templesElement);
    let filter = document.querySelector("#filtered").value;
    switch(filter) {
        case "utah":
            displayTemples(templeList.filter(temple => temple.location.toLowerCase().includes("utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes("utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => temple.dedicated < 1950));
            break;
        case "all":
            displayTemples(temples.filter(temple => temple));
    }
}   

getTemples();
filterTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(temples)});