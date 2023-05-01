import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({ title }) => {
  return (
    <button
      type='button'
      className=' flex justify-end text-[20px] h-fit w-fit py-4 px-6 mt-10  text-[#c7c7c7] hover:text-white rounded-[32px] bg-[#21445e] hover:bg-[#2a587a]'
    >
      {title}
      <FiArrowUpRight className='pl-1 w-[30px] h-[30px] ' />
    </button>
  );
};

export default Button;
