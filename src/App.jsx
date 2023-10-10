import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import "./App.css";

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

const [pokemonIndex, setPokemonIndex] = useState(0);

const pokemonIndexDown = () => {
  if (pokemonIndex > 0) {
    setPokemonIndex(pokemonIndex-1);
  }
}

const pokemonIndexUp = () => {
  if (pokemonIndex < pokemonList.length - 1) {
    setPokemonIndex(pokemonIndex+1);
  }
}
  return (
    <main className="container">
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <div className="indexButtons">
        <button onClick={pokemonIndexDown}>Précédent</button>
        <button onClick={pokemonIndexUp}>Suivant</button>
      </div>
    </main>
  )
}

export default App
