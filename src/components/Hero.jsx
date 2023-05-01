import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import pikachu from "../assets/images/pikachu.png";
import Button from "./Button";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-full flex-row items-align 2xl:flex justify-space-around items-center mt-10 lg:mt-40  2xl:mx-20 gap-5'>
        <img
          className='h-[500px] object-contain opacity-80 hover:opacity-95'
          src={pikachu}
          alt='pikachu'
        />
        <div className='flex flex-col items-center text-[#c7c7c7]'>
          <h2 className='  leading-[26px] lg:leading-[32px] text-center w-fit  text-[20px] lg:text-[26px] mt-[20px] lg:mt-[80px]  cursor-default 2xl:mr-[100px]'>
            Pokémon is a series of video games developed by Game Freak and
            published by Nintendo and The Pokémon Company under the Pokémon
            media franchise. It was created by{" "}
            <span className='underline'>Satoshi Tajiri</span> with assistance
            from <span className='underline hover:white '>Ken Sugimori</span>.
            The main series of role-playing video games (RPGs), referred as the
            "core series" by their developers, have continued on each generation
            of Nintendo's handhelds. The most recently released core series
            game, Pokémon <span className='text-red-800'>Scarlet</span> and{" "}
            <span className='text-purple-800'>Violet</span>, was released on
            November 18, 2022, for the Nintendo Switch.
          </h2>
          <div className='flex flex-row gap-10'>
            <Link to={"/pokemon"}>
              <Button title={"Search Pokemon"} />
            </Link>
            <Link to={"/allpokemons"}>
              <Button title={"Browse Pokemons"} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
