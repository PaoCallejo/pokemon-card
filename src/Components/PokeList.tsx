import React, {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {getPokemons, Pokemon} from "../utils/pokemonsApi";




const PokeList = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {
        getPokemons().then((
            pokemons
        ) => {
            setPokemonList(pokemons)
        });

    }, []);
    return (
        <div>
            <h1>Pokemon List</h1>
            <Box sx={{width: '100%'}}>
                <Grid container rowSpacing={4} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    {pokemonList.map((pokemon) => (
                        <Grid item xs={4}>
                            <Card sx={{maxWidth: 345, backgroundColor: 'lightblue'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={pokemon.image}
                                        alt="image not found"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" style={{color: 'blue'}}>
                                            {pokemon.name.toUpperCase()}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{color: 'black'}}>
                                            Ability: {pokemon.description[0].ability.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{color: 'black'}}>
                                            Description: none
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

