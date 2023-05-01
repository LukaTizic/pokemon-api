import React from "react";

import { About, Evolution, Hero } from "../components";

const Home = () => {
  return (
    <div className='px-120px'>
      <Hero />
      <About />
      <Evolution />
    </div>
  );
};

export default Home;
