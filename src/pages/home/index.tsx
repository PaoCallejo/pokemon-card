import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PokemonCard from "../../components/atoms/pokemonCard";
import { useNavigate } from "react-router-dom";
import {
  useGetAllPokemonsQuery,
  useLazyGetAllPokemonsQuery,
} from "../../redux/services/pokemonSlice";
import PokemonSimple from "../../types/pokemonSimple";
import { useEffect } from "react";
import { Button } from "@mui/material";

const Index = (): any => {
  const navigate = useNavigate();
  const { data } = useGetAllPokemonsQuery();
  const [getPokemons, { data: lazyData }] = useLazyGetAllPokemonsQuery();

  let pokemonList: PokemonSimple[] = [];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pokemon Card List</h1>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data?.results &&
            data?.results.map((pokemon, index) => (
              <Grid key={index} item xs={4}>
                <PokemonCard
                  name={pokemon.name}
                  onClickPokemon={() => {
                    navigate(`/details/${pokemon.name}`);
                  }}
                ></PokemonCard>
              </Grid>
            ))}
          <Grid>
            <Button
              variant="contained"
              onClick={() => {
                getPokemons();
              }}
            >
              LAZY LOAD
            </Button>
          </Grid>
        </Grid>

        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {lazyData?.results &&
            lazyData?.results.map((pokemon, index) => (
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
