
function NavBar({placeholder, pokemonList, setPokemonList}) {

    function handleChange(e) {
        const filterList = pokemonList.filter(pokemon => {
            if (pokemon.name.includes(e.target.value)) {
                return true
            }
        })
    }

    return (
        <input type="text" className="searchBar" placeholder={placeholder} onChange={handleChange}/>
    )
}



export default NavBar;
