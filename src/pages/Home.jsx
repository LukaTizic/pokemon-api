import React from "react";

import { About, Evolution, Footer, Hero } from "../components";

const Home = () => {
  return (
    <div className="px-120px">
      <Hero />
      <About />
      <Evolution />
      <Footer />
    </div>
  );
};

export default Home;
