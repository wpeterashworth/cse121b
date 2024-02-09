const url = "https://pokeapi.co/api/v2/pokemon/ditto";
document.querySelector("#outputList");
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuff(data);
    }
}
function doStuff(data) {
    let output = document.querySelector("#output");
    results = data;
    let html = `<h2>${results.name}</h2> <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`
    output.innerHTML = html;
    console.log("first: ", results);
}

function doStuffList(data) {
    console.log(data);
    let pokeList = data.results;
    pokeList.forEach((pokemon) => {
        html = `<li>${pokeList.name}</li>`
        pokemon.innerHTML += html
    });
}

async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        doStuffList(data);
    }
}
getPokemon(url);
getPokemonList(urlList);
console.log("second: ", results);