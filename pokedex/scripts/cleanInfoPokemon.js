function cleanInfoPokemon(dataPokemons) {

  const infoPokemon = dataPokemons.reduce( (acc, pokemon) => {
    return [...acc, {
      name: pokemon['forms'][0]['name'],
      life: pokemon['stats'][0]['base_stat'],
      attack: pokemon['stats'][1]['base_stat'],
      defense: pokemon['stats'][2]['base_stat'],
      specialAttack: pokemon['stats'][3]['base_stat'],
      specialDefense: pokemon['stats'][4]['base_stat'],
      speed: pokemon['stats'][5]['base_stat'],
      img: pokemon['sprites']['other']['dream_world']['front_default'],
      type: pokemon['types'][0]['type']['name'],
    }]
  },[])
  return infoPokemon
}

export default cleanInfoPokemon;