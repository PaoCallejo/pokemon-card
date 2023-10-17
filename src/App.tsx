import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeList from "./Components/PokeList";
import Card from "./Components/Card";

function App() {
    return (
        <div className="App">
            <PokeList />
           <Card />
        </div>
    );
}
export default App;
