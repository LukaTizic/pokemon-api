import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <div
      id='about'
      className='mt-[100px] lg:mt-[220px] border-t-4 flex flex-col justify-center items-center mb-[80px]'
    >
      <p className='text-white mt-[50px] text-4xl cursor-default'>
        About Pokemons
      </p>
      <h2 className='  text-[#c7c7c7] leading-[26px] lg:leading-[32px] text-center w-fit lg:w-[950px] text-[20px] lg:text-[26px] mt-[80px] cursor-default '>
        The original Pokémon is a role-playing game based around building a
        small team of monsters to battle other monsters in a quest to become the
        best. Pokémon are divided into types, such as water and fire, each with
        different strengths. Battles between them can be likened to the simple
        hand game rock-paper-scissors. For example, to gain an advantage over a
        Pokémon that cannot beat an opponent’s Charizard character because of a
        weakness to fire, a player might substitute a water-based Pokémon. With
        experience, Pokémon grow stronger, gaining new abilities. By defeating
        Gym Leaders and obtaining Gym Badges, trainers garner acclaim.
      </h2>
      <a href='https://en.wikipedia.org/wiki/Pok%C3%A9mon' target='_blank'>
        <Button title={"More Info"} />
      </a>
    </div>
  );
};

export default About;
