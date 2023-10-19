import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import {getPokemonById, Pokemon} from "../utils/pokemonsApi";
import PokemonCard from "../Components/atoms/pokemonCard";

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState<Pokemon >({
        id: "",
        name: "",
        image: "",
        description: [],
        weight : 0
    });

    useEffect(() => {
        if ( id ) {
            getPokemonById(id).then(( pokemon) => {
                setPokemon( pokemon );
            });
        }
    }, );

    return (

        <div>
            <h1>Pokemon Card info</h1>
            <Box sx={{width: '100%'}}>

            </Box>
        </div>




    );
};
export default PokemonDetails;