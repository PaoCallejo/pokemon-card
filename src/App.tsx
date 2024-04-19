import React from "react";
import "./App.css";
import Index from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetails from "./pages/details";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { pokemonApi } from "./utils/pokemonsApiRedux";

function App() {
  return (
    <BrowserRouter>
      <ApiProvider api={pokemonApi}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/details/:name" element={<PokemonDetails />} />
        </Routes>
      </ApiProvider>
    </BrowserRouter>
  );
}
export default App;
