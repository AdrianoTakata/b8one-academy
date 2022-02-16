function renderCard(dataPokemons, mainContainer) {
  
  dataPokemons.forEach( (pokemon, index) => {
    let divCard = document.createElement('div');
    divCard.classList.add('card-container');
    divCard.classList.add(`card-${index}`);
    let figPokemon = document.createElement('figure');
    let imgPokemon = document.createElement('img');
    const urlImage = pokemon['img'];
    imgPokemon.src = urlImage;
    figPokemon.append(imgPokemon);
    divCard.append(figPokemon);
    mainContainer.append(divCard);
  });

}

export default renderCard;