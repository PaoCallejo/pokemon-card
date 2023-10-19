import React from 'react';
import './App.css';
import Home from "./pages/home";
import Details from "./pages/details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonCard from "./Components/atoms/pokemonCard";
import PokemonDetails from "./pages/details";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/details/:id" element={<PokemonDetails />}/>
        </Routes>
    </BrowserRouter>
    );
}
export default App;
