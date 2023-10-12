import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import pokemonList from "./components/pokemonList";
import { useState } from "react";
import "./App.css";


function App() {

  const [search, setSearch] = useState("")

  const visiblePokemonList = pokemonList.filter(pokemon => {
    if (search && !pokemon.name.toLowerCase().includes(search)) {
      return false
    }
    return true
  })

return (
  <>
    <SearchBar placeholder="Pokemon Filter" search={search} onChange={setSearch} />
    <section className="container">
      {visiblePokemonList.map(pokemon => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </section>
  </>
)
}

export default App
