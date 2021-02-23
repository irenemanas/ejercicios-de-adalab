import "../style/App.scss";
import React from "react";
import pokemons from "../data/data.json";
import PokemonList from "./PokemonList";

class App extends React.Component {
  render() {
    return <PokemonList pokemons={pokemons} />;
  }
}

export default App;
