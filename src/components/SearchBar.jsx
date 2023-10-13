import PropTypes from "prop-types"
import Checkbox from "./Checkbox"

function SearchBar({ placeholder, search, onChange, shiny, setShiny }) {

    function handleChange(e) {
        onChange(e.target.value)
    }

    function shinyCheck(e) {
        setShiny(e)
    }

    return (
        <nav className="filters">
            <input type="text" value={search} onChange={(event) => handleChange(event)} className="searchBar" placeholder={placeholder} />
            <Checkbox id="shiny" checked={shiny} onChange={shinyCheck} label="Shiny" className="checkbox" />
        </nav>
    )

}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    search: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    shiny: PropTypes.bool.isRequired,
    setShiny: PropTypes.func.isRequired
}

export default SearchBar