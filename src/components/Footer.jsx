import React from "react";

import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className='flex items-center justify-center flex-wrap gap-4 mt-[20px] mb-10 '
    >
      <p className='font-normal text-[14px] text-white opacity-50 '>
        Copyright © 2023 - 2023{" "}
        <a href='https://www.instagram.com/alutza7/' target='_blank'>
          Alutza
        </a>
        . All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
