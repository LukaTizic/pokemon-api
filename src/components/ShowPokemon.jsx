import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import { Loading, Pagination } from "../components";

const ShowPokemon = () => {
  const [dataCache, setDataCache] = useState({});
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const fetchPokemonData = async (page) => {
    const offset = page * itemsPerPage;
    const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
    );
    const result = await resp.json();

    const poke = result.results;
    let pokemon = [];
    for (let i = 0; i < poke.length; i++) {
      const element = poke[i];
      const respSingle = await fetch(element.url);
      const singlePoke = await respSingle.json();
      pokemon.push(singlePoke);
    }
    return pokemon;
  };

  const loadPageData = async (page) => {
    setLoading(true);
    if (dataCache[page]) {
      setCurrentData(dataCache[page]);
    } else {
      const pokemon = await fetchPokemonData(page);
      setDataCache((prevCache) => ({ ...prevCache, [page]: pokemon }));
      setCurrentData(pokemon);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPageData(currentPage);
  }, [currentPage]);

  return (
    <motion.div variants={footerVariants} initial="hidden" whileInView="show">
      {!loading ? (
        <Pagination
          data={currentData}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={120}
          onPageChange={(page) => setCurrentPage(page)}
        />
      ) : (
        <Loading />
      )}
    </motion.div>
  );
};

export default ShowPokemon;
