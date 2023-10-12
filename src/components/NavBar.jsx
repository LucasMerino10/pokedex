import PropTypes from "prop-types";

function NavBar({ pokemonList, pokemonSwitch }) {
    return (
        <nav>
            {pokemonList.map(pokemon => (
                <button key={pokemon.name} onClick={() => pokemonSwitch(pokemon)}>{pokemon.name}</button>
            ))}
        </nav>
    )
}

NavBar.propTypes = {
    pokemonList: PropTypes.array,
    pokemonSwitch: PropTypes.func
}

export default NavBar;
