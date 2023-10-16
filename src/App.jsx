import PokemonCard from "./components/PokemonCard/PokemonCard";
import SearchBar from "./components/SearchBar/SearchBar";
import pokemonList from "./components/pokemonList";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import { useState } from "react";
import "./App.css";


function App() {

  const [search, setSearch] = useState("")
  const [shiny, setShiny] = useState(false)

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const visiblePokemonList = pokemonList.filter(pokemon => {
    if (search) {
      if ((!isNaN(search) && pokemon.numero.toString() === search) ||
        (search && removeAccents(pokemon.name.toLowerCase()).includes(removeAccents(search.toLowerCase())))) {
        return true
      }
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
        <ScrollButton onClick={handleClick} />
        {/* <button className="scrollButton" onClick={handleClick} ></button> */}

        {visiblePokemonList.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} index={index + 1} name={pokemon.name} displayImage="" imgSrc={pokemon.imgSrc} imgShiny={pokemon.imgShiny} type={pokemon.type} shiny={shiny} />
        ))}
      </main>
    </>
  )
}

export default App
