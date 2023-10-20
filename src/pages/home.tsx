import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { getPokemonById, getPokemons, Pokemon } from "../utils/pokemonsApi";
import PokemonCard from "../Components/atoms/pokemonCard";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons().then((pokemons) => {
      setPokemonList(pokemons);
    });
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pokemon Card List</h1>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {pokemonList.map((pokemon) => (
            <Grid item xs={4}>
              <PokemonCard
                data={pokemon}
                onClickPokemon={() => {
                  navigate(`/details/${pokemon.id}`);
                }}
              ></PokemonCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
export default Home;
