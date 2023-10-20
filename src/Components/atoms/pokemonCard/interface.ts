import {Pokemon} from "../../../utils/pokemonsApi";

export default interface PokemonCardProps{
    data: Pokemon;
    onClickPokemon(id:string): void
}