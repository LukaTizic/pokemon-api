import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import PokemonsCard from "./PokemonsCard";

const Pagination = ({ data }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };
  return (
    <div className='mb-[120px]'>
      <div className='grid sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-6  capitalize    mx-20 gap-2 '>
        {currentItems.map((pokemon) => (
          <PokemonsCard
            key={pokemon.id}
            name={pokemon.name}
            imgUrl={pokemon.sprites.other["official-artwork"].front_default}
          />
        ))}
      </div>
      <ReactPaginate
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
        containerClassName='flex items-center justify-center mt-20  text-gray-400 cursor-pointer '
        pageClassName='  border-gray-800 hover:text-white hover:text-white text-2xl p-[20px] flex items-center justify-center rounded-[10px] lg:mx-4'
        activeClassName='text-sky-400 '
        breakClassName='font-bold'
      />
    </div>
  );
};

export default Pagination;
