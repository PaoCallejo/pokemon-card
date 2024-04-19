import React from "react";
import "./App.css";
import Index from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetails from "./pages/details";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/details/:name" element={<PokemonDetails />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
