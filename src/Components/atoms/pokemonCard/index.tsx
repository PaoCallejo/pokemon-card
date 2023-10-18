import React from 'react';
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {Pokemon} from "../../../utils/pokemonsApi";

const PokemonCard = ({data}: { data: Pokemon }) => {
    return (
        <Card sx={{maxWidth: 345, backgroundColor: 'lightblue'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image={data.image}
                    alt="image not found"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{color: 'blue'}}>
                        {data.name.toUpperCase()}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        <p>
                            Description: {data.description.slice(0, 2).map((ability, i) => (
                            i === 0 ? ability.ability.name : `, ${ability.ability.name}`
                        ))}
                        </p>
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default PokemonCard;
