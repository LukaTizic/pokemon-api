import React from "react";
import ReactPaginate from "react-paginate";
import PokemonsCard from "./PokemonsCard";

const Pagination = ({
  data = [],
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (event) => {
    onPageChange(event.selected);
  };

  return (
    <div className="mb-[120px]">
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 capitalize mx-20 gap-2">
        {data.length > 0 ? (
          data.map((pokemon) => (
            <PokemonsCard
              key={pokemon.id}
              name={pokemon.name}
              imgUrl={pokemon.sprites.other["official-artwork"].front_default}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No Pokémon available.</p>
        )}
      </div>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center mt-20 text-gray-400 cursor-pointer"
        pageClassName="border-gray-800 hover:text-white text-2xl p-[20px] flex items-center justify-center rounded-[10px] lg:mx-4"
        activeClassName="text-sky-400"
        breakClassName="font-bold"
        forcePage={currentPage}
      />
    </div>
  );
};

export default Pagination;
