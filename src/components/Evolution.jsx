import React from "react";

import charmander from "../assets/images/charmander.png";
import charizard from "../assets/images/charizard.png";
import charmeleon from "../assets/images/charmeleon.png";

import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Evolution = () => {
  return (
    <motion.div
      id='evolution'
      className=' flex-row  lg:flex-col justify-center items-center text-white  border-t-4  '
    >
      <h2
        className=' mt-[50px] 
      text-3xl md:text-4xl mb-[150px] flex justify-center cursor-default'
      >
        Evolution of Pokemons
      </h2>
      <motion.div
        variants={fadeIn("right", "spring", 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col md:flex-row justify-center items-center mb-[110px] gap-20'
      >
        <img
          src={charmander}
          alt='charmander'
          className='w-[400px] h-[400px] object-contain  '
        />
        <AiOutlineArrowDown className=' lg:hidden text-5xl ' />
        <AiOutlineArrowRight className='hidden md:inline text-5xl' />
        <img
          src={charmeleon}
          alt='charmeleon'
          className='w-[400px] h-[400px] object-contain'
        />
        <AiOutlineArrowRight className='text-5xl hidden md:inline' />
        <AiOutlineArrowDown className='text-5xl lg:hidden' />
        <img
          src={charizard}
          alt='charizard'
          className='w-[400px] h-[400px] object-contain mt-[-50px]'
        />
      </motion.div>
    </motion.div>
  );
};

export default Evolution;
