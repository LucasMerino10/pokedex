import PropTypes from "prop-types"

function SearchBar({ placeholder, search, onChange }) {

    function handleChange(e) {
        onChange(e.target.value)
    }

    return (
        <nav className="filters">
            <input type="text" value={search} onChange={(event) => handleChange(event)} className="searchBar" placeholder={placeholder} />
        </nav>
    )

}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    search: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SearchBar