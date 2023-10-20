import React from 'react';
import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PokemonDetails from "./pages/details";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/details/:id" element={<PokemonDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
