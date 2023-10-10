import PropTypes from "prop-types";

function PokemonCard(props) {
    const { pokemon } = props;
    //const pokemon = pokemonList[1];
    return (
        <figure className="card">
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc}
                className="card-img"
                alt={pokemon.name}/>
            ) : <p>???</p>}         
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    })
}

export default PokemonCard;