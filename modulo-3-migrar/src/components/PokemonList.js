import "../style/App.scss";
import React from "react";
import Pokemon from "./Pokemon";

class PokemonList extends React.Component {
  render() {
    const item = this.props.pokemons.map((pokemonItem) => {
      return (
        <li key={pokemonItem.id}>
          <Pokemon pokProp={pokemonItem} />
        </li>
      );
    });
    return (
      <div>
        <ul>{item}</ul>
      </div>
    );
  }
}

export default PokemonList;
