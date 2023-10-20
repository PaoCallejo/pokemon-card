import React from 'react';
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {Pokemon} from "../../../utils/pokemonsApi";
import {Link} from "react-router-dom";

const PokemonCard = ({data}: { data: Pokemon }) => {
    const urlDetail: string = "details/" + data.id;
    return (
        <Link to={urlDetail}>

            <Card sx={{
                maxWidth: 345,
                marginX: 5,
                marginY: 2
            }}>
                <CardActionArea>
                    <CardMedia
                        sx={{backgroundColor: 'lightyellow'}}
                        component="img"
                        height="140"
                        image={data.image}
                        alt="image not found"

                    />
                    <CardContent
                        sx={{backgroundColor: 'lightsalmon'}}
                    >
                        <Typography gutterBottom variant="h5" component="div" style={{color: 'gray'}}>
                            {data.name.toUpperCase()}
                        </Typography>
                        <Typography variant="body2" color="white">
                            Description: {data.description.slice(0, 2).map((ability, i) => (
                            i === 0 ? ability.ability.name : `, ${ability.ability.name}`
                        ))}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>

        </Link>
    );
}
export default PokemonCard;
