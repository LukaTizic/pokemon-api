import React from "react";

import { FiArrowUpRight } from "react-icons/fi";

const PokemonsCard = ({ imgUrl, name }) => {
  return (
    <div className='group/item  text-[#c7c7c7] hover:text-white border-2 opacity-90 hover:opacity-100 hover:border-sky-400 flex flex-col justify-center items-center mt-5 rounded-xl	 relative  lg:min-h-[200px] xl:min-h-[250px]  '>
      <a href={`https://www.pokemon.com/us/pokedex/${name}`} target='_blank'>
        <img src={imgUrl} alt={name} className='  ' />
        <div className=' flex flex-row text-sky-400   group/edit invisible  group-hover/item:visible  absolute right-0  top-0  '>
          <p className='pr-1 bg-[#000300]'>More Info</p>
          <FiArrowUpRight className='text-xl font-bold' />
        </div>
      </a>
      <h2 className='absolute bottom-0.5'>{name}</h2>
    </div>
  );
};

export default PokemonsCard;
