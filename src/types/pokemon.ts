interface Pokemon {
  id: string;
  name: string;
  image: string;
  description: { ability: { name: string } }[];
  weight: number;
  height: number;
  abilities: { ability: { name: string } }[];
  sprites:
    | any
    | {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
}

export default Pokemon;
