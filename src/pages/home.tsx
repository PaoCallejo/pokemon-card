import React, {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {getPokemons, Pokemon} from "../utils/pokemonsApi";
import PokemonCard from "../Components/atoms/pokemonCard"

const Home = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {
        getPokemons().then((pokemons) => {
            setPokemonList(pokemons)
        });

    }, []);
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Pokemon Card List</h1>
            <Box sx={{width: '100%'}}>
                <Grid container rowSpacing={4} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    {pokemonList.map((pokemon) => (
                        <Grid item xs={4}>
                            <PokemonCard data={pokemon}></PokemonCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};
export default Home;