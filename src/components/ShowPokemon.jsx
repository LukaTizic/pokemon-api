import React from "react";

import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

import { useState, useEffect } from "react";
import { Pagination } from "../components";

const ShowPokemon = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=120&offset=0`
      );
      const data = await resp.json();
      const poke = data.results;
      let pokemon = [];
      console.log(poke);
      for (let index = 0; index < poke.length; index++) {
        const element = poke[index];
        let respSingle = await fetch(element.url);
        let singlePoke = await respSingle.json();
        pokemon.push(singlePoke);
      }
      setData(pokemon);
    };

    getData();
  }, []);

  return (
    <motion.div variants={footerVariants} initial='hidden' whileInView='show'>
      <Pagination data={data} />
    </motion.div>
  );
};

export default ShowPokemon;
