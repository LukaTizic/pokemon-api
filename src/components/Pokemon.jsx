import React from "react";
import axios from "axios";

import { AiOutlineSearch } from "react-icons/ai";

import { useState, useEffect } from "react";

const Pokemon = () => {
  const [search, setSearch] = useState("ditto");
  const [pokemonData, setPokemonData] = useState([]);

  const onClick = (e) => {
    setSearch(e.target.value);
  };

  const getPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );
      setPokemonData(response.data);
      setSearch("");
    } catch (error) {
      alert("Please provide value");
    }
  };
  console.log(pokemonData);
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className='flex flex-col justify-center  items-center'>
      <div className='flex flex-row justify-center'>
        <input
          className='placeholder:italic placeholder:text-slate-400 capitalize block w-[350px] bg-white  border border-slate-300 rounded-md py-2 px-5 pr-3 shadow-sm focus:outline-none focus:border-red focus:ring-sky-500 focus:ring-1 sm:text-sm'
          type='text'
          value={search}
          onChange={onClick}
          placeholder='Type specific pokemon here'
        />
        <button
          className='py-2 px-4 hover:bg-blue-500 text-white font-bold text-2xl rounded-lg shadow-md bg-blue-700 "'
          onClick={getPokemon}
        >
          <AiOutlineSearch />
        </button>
      </div>

      <div className='flex flex-col items-center '>
        <img
          className='min-h-[500px]'
          src={pokemonData.sprites?.other["official-artwork"].front_default}
          alt=''
        />
        <h1 className='mb-[150px] uppercase underline text-white text-4xl  '>
          {pokemonData.name}
        </h1>
      </div>
      <div>
        <h1 className='text-white w-full mb-[250px]'>
          Pokémon is set in the fictional Pokémon universe. There are numerous
          regions that have appeared in the various media of the Pokémon
          franchise. There are 9 main series regions set in the main series
          games: Kanto, Johto, Hoenn, Sinnoh/Hisui, Unova, Kalos, Alola, Galar,
          and Paldea. Each of the nine generations of the main series releases
          focuses on a new region. Every region consists of several cities and
          towns that the player must explore in order to overcome many waiting
          challenges, such as Gyms, Contests and villainous teams.
        </h1>
      </div>
    </div>
  );
};

export default Pokemon;
