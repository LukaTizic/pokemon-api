import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({ title }) => {
  return (
    <button
      type='button'
      className=' flex justify-end text-[20px] h-fit w-fit py-4 px-6 mt-10  text-[#c7c7c7] hover:text-[#000000] rounded-[32px]  bg-[#213e5e] hover:bg-[#588ac0] 	'
    >
      {title}
      <FiArrowUpRight className='pl-1 w-[30px] h-[30px] ' />
    </button>
  );
};

export default Button;
