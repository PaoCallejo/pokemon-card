import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PokeList = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {

       axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then(async (response) => {
                console.log(response)
                const results = response.data.results;
                const updatedResults = await Promise.all(
                    results.map(async (pokemon) => {
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
                    {pokemonList.map((pokemon, index) => (
                            <Grid item xs={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={pokemon.image}
                                            //image="/static/images/cards/contemplative-reptile.jpg"
                                            //alt="green iguana"//Name Pokemon
                                            alt = "image not found"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                name: {pokemon.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">

                                                    { pokemon.description.map((abilities, i) => (

                                                        <p>  ability:{i+1} {abilities.ability.name}</p>
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

