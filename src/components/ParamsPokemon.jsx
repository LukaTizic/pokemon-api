import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const ParamsPokemon = () => {
  const { id } = useParams();
  console.log(id);
  const [paramsPokemon, setParamsPokemon] = useState();
  const [loading, setLoading] = useState(false);

  const getPokemon = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/` + id
      );
      setParamsPokemon(response.data);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getPokemon();
  }, []);

  console.log(id);
  return (
    <div>
      {!loading ? (
        <div className='flex flex-col justify-center items-center text-white capitalize '>
          <img
            className='min-h-[500px]'
            src={
              paramsPokemon?.sprites?.other["official-artwork"].front_default
            }
            alt={id}
          />
          <h1 className='mb-[250px]  text-xl '>{id}</h1>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ParamsPokemon;
