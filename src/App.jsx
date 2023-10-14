import PokemonCard from "./components/PokemonCard/PokemonCard";
import SearchBar from "./components/SearchBar/SearchBar";
import pokemonList from "./components/pokemonList";
import ScrollButton from "./components/scrollButton/ScrollButton";
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

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <SearchBar placeholder="Pokemon Filter" search={search} onChange={setSearch} shiny={shiny} setShiny={setShiny} />
      <main className="container">
        <ScrollButton onClick={handleClick}/>
        {/* <button className="scrollButton" onClick={handleClick} ></button> */}

        {visiblePokemonList.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} index={index + 1} name={pokemon.name} displayImage="" imgSrc={pokemon.imgSrc} imgShiny={pokemon.imgShiny} type={pokemon.type} shiny={shiny} />
        ))}
      </main>
    </>
  )
}

export default App
