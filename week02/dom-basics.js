const newSection = document.createElement("section");
newSection.innerHTML = ("<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>");
document.body.appendChild(newSection);

const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "images/sand_dunes.jpeg");
newImage.setAttribute("alt", "Some Sand Dunes");
document.body.appendChild(newImage);