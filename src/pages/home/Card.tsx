import React, { useEffect, useState } from "react";

import {
  PokemonSimple,
  useGetAllPokemonsQuery,
  useGetByNameQuery,
  Pokemon,
} from "../../utils/pokemonsApiRedux";

const Card = ({ name }: { name: string }) => {
  const { data } = useGetByNameQuery(name);
  console.log(data);

  return (
    <div>
      {data ? (
        <div>
          <p>Name: {data.name}</p>
          <p>Weight: {data.weight}</p>
          <p>Height: {data.height}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
