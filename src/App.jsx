import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import pokemonList from "./components/pokemonList";
import { useState } from "react";
import "./App.css";


function App() {

  const [search, setSearch] = useState("")
  const [shiny, setShiny] = useState(false)

  const visiblePokemonList = pokemonList.filter(pokemon => {
    if (search && !pokemon.name.toLowerCase().includes(search)) {
      return false
    }
    return true
  })

return (
  <>
    <SearchBar placeholder="Pokemon Filter" search={search} onChange={setSearch} shiny={shiny} setShiny={setShiny} />
    <section className="container">
      {visiblePokemonList.map((pokemon, index) => (
        <PokemonCard key={pokemon.name} index={index+1} name={pokemon.name} displayImage="" imgSrc={pokemon.imgSrc} imgShiny={pokemon.imgShiny} type={pokemon.type} shiny={shiny} />
      ))}
    </section>
  </>
)
}

export default App
