import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon } from "../../types";

// Define a service using a base URL and expected endpoints

const URL = "https://pokeapi.co/api/v2";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetByNameQuery, useGetAllPokemonsQuery } = pokemonApi;
