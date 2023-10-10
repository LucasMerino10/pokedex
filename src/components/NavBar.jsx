import PropTypes from "prop-types";

function NavBar({pokemonIndexDown, pokemonIndexUp}) {
    return (
        <nav className="indexButtons">
            <button onClick={pokemonIndexDown}>Précédent</button>
            <button onClick={pokemonIndexUp}>Suivant</button>
        </nav>
    )
}

NavBar.propTypes = {
    pokemonIndexDown: PropTypes.func.isRequired,
    pokemonIndexUp: PropTypes.func.isRequired
}

export default NavBar;
