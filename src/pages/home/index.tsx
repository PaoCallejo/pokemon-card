import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PokemonCard from "../../components/atoms/pokemonCard";
import { useNavigate } from "react-router-dom";
import { useGetAllPokemonsQuery } from "../../redux/services/pokemon";
import PokemonSimple from "../../types/pokemonSimple";

const Index = (): any => {
  const navigate = useNavigate();
  const { data } = useGetAllPokemonsQuery();
  let pokemonList: PokemonSimple[] = [];
  if (data) {
    const results = data!.results;
    pokemonList = results.map((pokemon: PokemonSimple) => {
      return {
        name: pokemon.name,
        url: pokemon.url,
      };
    });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pokemon Card List</h1>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {pokemonList &&
            pokemonList.map((pokemon, index) => (
              <Grid key={index} item xs={4}>
                <PokemonCard
                  name={pokemon.name}
                  onClickPokemon={() => {
                    navigate(`/details/${pokemon.name}`);
                  }}
                ></PokemonCard>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};
export default Index;
