export interface Pokemon {
    name: string;
    image: string;
    description: { ability: { name: string } }[];
}
export const getPokemons = async (): Promise<Pokemon[]> => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await response.json();
        const results = data.results;

        const updatedResults: Pokemon[] = await Promise.all(
            results.map(async (pokemon: { name: string, url: string }) => {
                const pokemonResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonResponse.json();
                return {
                    name: pokemon.name, image: pokemonData.sprites.front_default, description: pokemonData.abilities,
                };
            })
        );

        return updatedResults;

    } catch (error) {
        console.error("Error from PokeAPI: ", error);
        return [];
    }
};
