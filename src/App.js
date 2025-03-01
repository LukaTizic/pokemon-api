import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Footer, SocialMedia } from "./components";

import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";
import AllPokemons from "./pages/AllPokemons";
import ErrorPage from "./pages/ErrorPage";
import { ParamsPokemon } from "./components";

function App() {
  return (
    <div className="  lg:mx-[110px] sm:mx-[50px] mx-[50px]  ">
      <BrowserRouter>
        <Navbar />
        <SocialMedia />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonPage />} />
          <Route path="/pokemon/:id" element={<ParamsPokemon />} />
          <Route path="/allpokemons/" element={<AllPokemons />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
