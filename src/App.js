import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Footer, SocialMedia } from "./components";

import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";
import AllPokemons from "./pages/AllPokemons";

function App() {
  return (
    <div className='  lg:mx-[110px] sm:mx-[50px] mx-[50px]  '>
      <BrowserRouter>
        <Navbar />
        <SocialMedia />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/pokemon' element={<PokemonPage />} />
          <Route path='/allpokemons/' element={<AllPokemons />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
