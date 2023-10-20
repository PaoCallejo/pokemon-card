import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { getPokemonById, Pokemon } from "../utils/pokemonsApi";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  useEffect(() => {
    if (id) {
      getPokemonById(id).then((pokemon) => {
        setPokemon(pokemon);
      });
    }
  }, []);

  return (
    <div>
      {pokemon && (
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <div>
              <h1 style={{ textAlign: "center" }}>Pokemon Card info</h1>
              <Grid
                sx={{
                  backgroundColor: "lightgreen",
                }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <img src={pokemon.sprites["front_default"]} width="25%" />
              </Grid>

              <Typography
                variant="h5"
                color="black"
                sx={{
                  backgroundColor: "lightblue",
                }}
              >
                <strong>Name:</strong> {pokemon.name}
                <p>
                  <strong>Height:</strong> {pokemon.height}
                </p>
                <p>
                  <strong>Weight:</strong> {pokemon.weight}
                </p>
                <div>
                  <strong>
                    <p>Abilities:</p>
                  </strong>
                  <ul>
                    {pokemon.abilities &&
                      pokemon.abilities.map((ability, index) => (
                        <li>{ability.ability.name}</li>
                      ))}
                  </ul>
                </div>
              </Typography>

              <Typography
                variant="h5"
                color="black"
                sx={{
                  backgroundColor: "lightblue",
                }}
              >
                <div>
                  {pokemon.sprites &&
                    Object.keys(pokemon.sprites).map((positionImage, index) => (
                      <img
                        src={
                          pokemon.sprites[positionImage] &&
                          typeof pokemon.sprites[positionImage] == "string" &&
                          pokemon.sprites[positionImage]
                        }
                      />
                    ))}
                </div>
              </Typography>
            </div>
          </Grid>
        </Box>
      )}
    </div>
  );
};
export default PokemonDetails;
