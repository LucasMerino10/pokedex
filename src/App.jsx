import PokemonCard from "./components/PokemonCard";
import pokemonList from "./components/pokemonList";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import "./App.css";

function App() {


  const [pokemon, setPokemon] = useState(pokemonList[0]);

  const pokemonSwitch = (pokemon) => {
    setPokemon(pokemon);
    pokemon.name === "pikachu" ? alert("pika pikachu !!!") : "";
  }

  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  )


  return (
    <>
      <NavBar pokemonList={pokemonList} pokemonSwitch={pokemonSwitch} />
      <PokemonCard pokemon={pokemon} />
    </>
  )
}

export default App
