import fetchJson from "./http.js";
import cleanInfoPokemon from "./cleanInfoPokemon.js";
import renderCard from "./renderCard.js";

const mainContainer = document.querySelector(".main-container");

async function main() {

  const idPokemon = Array.from(Array(151).keys()).map( item => {
    return item + 1;
  })

  console.log(idPokemon);
  const urlBase = "https://pokeapi.co/api/v2/pokemon/";
  const pokePromise = idPokemon.map( item => {
    const url = urlBase + item;
    return fetchJson(url);
  })

  let dataPokemons = await Promise.all(pokePromise);
  dataPokemons = cleanInfoPokemon(dataPokemons);
  renderCard(dataPokemons, mainContainer);
  console.log(dataPokemons);

}


main();