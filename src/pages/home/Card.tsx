import { useGetByNameQuery } from "../../utils/pokemonsApiRedux";

const Card = ({ name }: { name: string }) => {
  const { data } = useGetByNameQuery(name);
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
