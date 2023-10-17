import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Pokemon {
    name: string;
    image: string;
    description: { ability: { name: string } }[];
}
const PokeList = () => {

   ///const [pokemonList, setPokemonList] = useState([]);
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {

       axios.get("https://pokeapi.co/api/v2/pokemon?limit=30")
            .then(async (response) => {
                console.log(response)
                const results = response.data.results;
                const updatedResults = await Promise.all(
                    results.map(async (pokemon: { name: string, url: string }) => {

                        const pokemonData = await axios.get(pokemon.url);
                        console.log(pokemonData)
                        return { name: pokemon.name, image: pokemonData.data.sprites.front_default, description: pokemonData.data.abilities};
                    })
                );
                setPokemonList(updatedResults);
            })
            .catch((error) => {
                console.error("Error fetching data from PokeAPI: ", error);
            });
    }, []);

    return (
        <div>
            <h1>Pokemon List</h1>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    {pokemonList.map((pokemon) => (
                            <Grid item xs={4}>
                                <Card sx={{ maxWidth: 345, backgroundColor: 'lightgreen' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={pokemon.image}
                                            alt = "image not found"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {pokemon.name.toUpperCase()}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">

                                                    { pokemon.description.map((abilities) => (
                                                        <p>  {abilities.ability.name}</p>
                                                    ))}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                    ))}
                </Grid>
            </Box>
        </div>

    );
};

export default PokeList;

