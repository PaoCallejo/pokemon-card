export interface Pokemon {
  id: string;
  name: string;
  image: string;
  description: { ability: { name: string } }[];
  weight: number;
  height: number;
  abilities: { ability: { name: string } }[];
  sprites:
    | any
    | {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
}
export const getPokemons = async (): Promise<Pokemon[]> => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const data = await response.json();
    const results = data.results;

    const updatedResults: Pokemon[] = await Promise.all(
      results.map(async (pokemon: { name: string; url: string }) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        const abilities = pokemonData.abilities.map(
          (ability: { ability: { name: string } }) => ability.ability.name,
        );
        return {
          id: pokemonData.id,
          name: pokemon.name,
          image: pokemonData.sprites.front_default,
          description: pokemonData.abilities,
          abilities: abilities,
          sprites: pokemonData.sprites,
        };
      }),
    );

    return updatedResults;
  } catch (error) {
    console.error("Error from PokeAPI: ", error);
    return [];
  }
};
export const getPokemonById = async (
  idPokemon: string,
): Promise<Pokemon | undefined> => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + idPokemon,
    );
    let responsePokemon = await response.json();
    return responsePokemon;
  } catch (error) {
    console.error("Error from PokeAPI: ", error);
    return undefined;
  }
};
