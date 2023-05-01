import React from "react";

import { Link } from "react-router-dom";
import { navLinks } from "../utils/navLinks";
import logo from "../assets/images/logo.png";
import pokemon from "../assets/images/pokemon.png";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className=' text-[#c7c7c7] flex py-6 justify-center lg:justify-between items-center'
    >
      <Link to={"/"}>
        <img
          src={pokemon}
          alt='pokemon'
          className=' hidden lg:inline h-[50px] object-contain cursor-pointer pr-[30px] opacity-90 hover:opacity-100'
        />
      </Link>
      <Link to={"/"}>
        <img
          src={logo}
          alt='logo'
          className=' hidden lg:inline object-contain h-[60px] cursor-pointer pr-[30px] opacity-90 hover:opacity-100'
        />
      </Link>
      <div>
        <ul className=' flex justify-between items-center flex-1 gap-4  pr-[30px] '>
          {navLinks.map((id) => (
            <li
              className='divide-x  pr-5 border-r-2 hover:border-b-2 hover:text-white'
              key={id.id}
            >
              <Link to={`/${id.id}`}>{id.title} </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
