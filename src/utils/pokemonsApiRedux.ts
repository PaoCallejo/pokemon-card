import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Pokemon from "../types/pokemon";

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
