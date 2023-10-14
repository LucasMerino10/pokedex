import PropTypes from "prop-types";

function Checkbox({ checked, onChange, label, id, className }) {
    return (
        <>
            <input type="checkbox"
                id={id}
                className={className}
                checked={checked}
                label={label}
                onChange={(event) => onChange(event.target.checked)} />
            <label htmlFor={id} className="filters__label">{label}</label>
        </>
    )
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange:PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}

export default Checkbox