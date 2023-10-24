import { Pokemon } from "../../../utils/pokemonsApi";

export default interface PokemonCardProps {
  name: string;
  onClickPokemon(id: string): void;
}
