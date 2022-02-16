async function fetchPokemon() {

  const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
  const response = await fetch(urlBase);
  const responseJson = await response.json();
  return responseJson.results;

}

async function fetchPokemonData(pokemons) {

  const pokemonsData = [];

  for (const pokemon of pokemons){
    const response =  await fetch(pokemon.url);
    const responseJson = await response.json();
    pokemonsData.push(responseJson);
  }

  return pokemonsData
}

function cleanPokemons(){
  const ulContainer = document.querySelector('.pokemons-list');
  ulContainer.innerHTML = "";
}

function handleSearchInput(event, pokemonsData) {

  const value = event.target.value;
  const currentPokemon = pokemonsData.find( pokemon => pokemon['forms'][0]['name'] === value.toLowerCase());
  if (currentPokemon){
    cleanPokemons();
    renderPokemons([currentPokemon]);
  } else {
    cleanPokemons();
    renderPokemons(pokemonsData);
  }
  
}


async function main() {

  const pokemons = await fetchPokemon();

  const pokemonsData = await fetchPokemonData(pokemons);

  renderPokemons(pokemonsData);

  const searchInput = document.querySelector(".search-input");
  searchInput.addEventListener("change", (event) => handleSearchInput(event, pokemonsData))

}

main();

function renderPokemons(pokemons) {

  pokemons.forEach( (pokemon) => {

    const pokemonInfo = {
      name: pokemon['forms'][0]['name'],
      life: pokemon['stats'][0]['base_stat'],
      attack: pokemon['stats'][1]['base_stat'],//pokemon.stats.find(item => item.stats.name === "attack"),
      defense: pokemon['stats'][2]['base_stat'],
      specialAttack: pokemon['stats'][3]['base_stat'],
      specialDefense: pokemon['stats'][4]['base_stat'],
      speed: pokemon['stats'][5]['base_stat'],
      img: pokemon['sprites']['other']['dream_world']['front_default'],
      type: pokemon['types'][0]['type']['name'],
    }

    const ulContainer = document.querySelector('.pokemons-list');

    const liContainer = document.createElement('li');
    liContainer.classList.add('pokemons-item');
    const divCard = document.createElement('div');
    divCard.classList.add('pokemons-card');
    liContainer.append(divCard);

    // Image of Card
    const divImage = document.createElement('div');
    divImage.classList.add('pokemons-card-image-container');
    const imageContainer = document.createElement('img');
    imageContainer.src = pokemonInfo.img;
    divImage.append(imageContainer);
    divCard.append(divImage);
    liContainer.append(divCard);
    ulContainer.append(liContainer);
    // title of card
    const divInfo = document.createElement('div');
    divInfo.classList.add('pokemons-card-info');
    const h3Tlite = document.createElement('h3');
    h3Tlite.classList.add('pokemons-card-name');
    h3Tlite.innerText = `${pokemonInfo.name}`;
    const spanType = document.createElement('span');
    spanType.classList.add('pokemons-card-type');
    spanType.innerText = `${pokemonInfo.type}`;
    divInfo.append(h3Tlite, spanType);
    divCard.append(divInfo);
    // attributes
    const ulAttributes = document.createElement("ul");
    ulAttributes.classList.add("pokemons-card-attributes");
    const liAttributes = document.createElement("li");
    liAttributes.classList.add("pokemons-card-attributes-item");
    ulAttributes.append(liAttributes);
    divCard.append(ulAttributes);

    buildProgressBar("HP", pokemonInfo.life, liAttributes);
    buildProgressBar("Attack", pokemonInfo.attack, liAttributes);
    buildProgressBar("Defense", pokemonInfo.defense, liAttributes);
    buildProgressBar("Special-Attack", pokemonInfo.specialAttack, liAttributes);
    buildProgressBar("Special-Defense", pokemonInfo.specialDefense, liAttributes);
    buildProgressBar("Speed", pokemonInfo.speed, liAttributes);

  })
}

function buildProgressBar(name, value, liAttributes) {

  if (value > 100){
    value = 100;
  }

  const spanStatus = document.createElement("span");
  spanStatus.classList.add("pokemons-card-attributes-name");
  spanStatus.innerText = `${name}`;
  const divProgress = document.createElement("div");
  divProgress.classList.add("pokemons-card-attributes-progress");
  const divProgressBar = document.createElement("div");
  divProgressBar.classList.add("pokemons-card-attributes-progress-bar");
  divProgressBar.style.width = `${value}%`;
  divProgress.append(divProgressBar)
  liAttributes.append(spanStatus, divProgress);

}