import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {

    const getBgColor = (type) => {
        const typeColor = {
            Plante: "card-bg-lightgreen",
            Insecte: "card-bg-lightgreen",
            Normal: "card-bg-lightgrey",
            Poison: "card-bg-lightpurple",
            Sol: "card-bg-lightbrown",
            Fée: "card-bg-lightpurple",
            Combat: "card-bg-lightbrown",
            Roche: "card-bg-lightbrown",
            Spectre: "card-bg-lightpurple",
            Glace: "card-bg-lightblue",
            Dragon: "card-bg-lightgrey",
            Feu: "card-bg-lightsalmon",
            Eau: "card-bg-lightblue",
            Électrik: "card-bg-lightyellow",
            Psy: "card-bg-lightpurple"
        }
        return typeColor[type];
    }

    return (
        <figure className={"card " + getBgColor(pokemon.type)}>
            <img src={pokemon.imgSrc}
                className={"card-img "}
                alt={pokemon.name}/>
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
        type: PropTypes.string.isRequired
    })
}

export default PokemonCard;