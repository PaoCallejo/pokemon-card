import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface PokemonSimple {
  name: string;
  url: string;
}
export interface Pokemon {
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
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<{ results: any[] }, void>({
      query: () => "/pokemon?limit=100",
    }),

    getByName: builder.query<Pokemon, string>({
      query: (name: string) => `/pokemon/${name}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetByNameQuery } = pokemonApi;
