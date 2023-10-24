import React from "react";
import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetails from "./pages/details";
import Card from "./pages/home/Card";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { pokemonApi } from "./utils/pokemonsApiRedux";

function App() {
  return (
    <BrowserRouter>
      <ApiProvider api={pokemonApi}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/details/:name" element={<PokemonDetails />} />
        </Routes>
      </ApiProvider>
    </BrowserRouter>
  );
}

export default App;
