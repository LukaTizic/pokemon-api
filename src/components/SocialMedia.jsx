import React from "react";
import { motion } from "framer-motion";
import { socialVariants } from "../utils/motion";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <motion.div variants={socialVariants} initial='hidden' whileInView='show'>
      <div className='flex flex-col fixed left-0 top-[400px] text-[#c7c7c7] '>
        <a
          href='https://www.facebook.com/DonTheLunatic?mibextid=ZbWKwL'
          target='_blank'
        >
          <FaFacebookSquare className='text-[45px] hover:text-[50px] hover:text-white ' />
        </a>
        <a
          href='https://www.linkedin.com/in/luka-tizi%C4%87-529a1b240/'
          target='_blank'
        >
          <FaLinkedin className='text-[45px] hover:text-[50px] hover:text-white  ' />
        </a>
        <a href='https://github.com/LukaTizic' target='_blank'>
          <FaGithubSquare className='text-[45px] hover:text-[50px] hover:text-white ' />
        </a>
        <a href='https://www.instagram.com' target='_blank'>
          <FaInstagram className='text-[45px] hover:text-[50px] hover:text-white ' />
        </a>
      </div>
    </motion.div>
  );
};

export default SocialMedia;
