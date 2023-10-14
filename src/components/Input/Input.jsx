import PropTypes from "prop-types";

function Input({ search, onChange, className, placeholder }) {
    return (
        <input type="text"
            value={search}
            onChange={(event) => onChange(event.target.value)}
            className={className}
            placeholder={placeholder} />
    )
}

Input.propTypes = {
    search: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default Input