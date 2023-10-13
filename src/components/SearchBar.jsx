import PropTypes from "prop-types"
import Checkbox from "./Checkbox"
import Input from "./Input"

function SearchBar({ placeholder, search, onChange, shiny, setShiny }) {

    function handleChange(e) {
        onChange(e)
    }

    function shinyCheck(e) {
        setShiny(e)
    }

    return (
        <header className="filters">
            <Input search={search} onChange={handleChange} className="filters__input" placeholder={placeholder}/>
            <Checkbox id="shiny" checked={shiny} onChange={shinyCheck} label="Shiny" className="filtlers__checkbox" />
        </header>
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