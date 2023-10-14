import PropTypes from "prop-types";
// import { useState } from "react";

function PokemonCard({ index, name, displayImage, imgSrc, imgShiny, type, shiny}) {

    // const [pokemonShiny, setPokemonShiny] = useState(shiny)

    const getBgColor = (type) => {
        const typeColor = {
            Plante: "card--lightgreen",
            Insecte: "card--lightgreen",
            Normal: "card--lightgray",
            Poison: "card--darkmagenta",
            Sol: "card--burlywood",
            Fée: "card--darkmagenta",
            Combat: "card--burlywood",
            Roche: "card--burlywood",
            Spectre: "card--darkmagenta",
            Glace: "card--lightblue",
            Dragon: "card--lightgray",
            Feu: "card--lightsalmon",
            Eau: "card--lightblue",
            Électrik: "card--khaki",
            Psy: "card--darkmagenta"
        }
        return typeColor[type];
    }

    // function shinySwitch() {
    //     if (pokemonShiny) {
    //         setPokemonShiny(false)
    //     }
    //     else {
    //         setPokemonShiny(true)
    //     }
    // }

    function getImage() {
        shiny ? displayImage = imgShiny : displayImage = imgSrc
        return displayImage
    }

    return (
        <figure className={"card " + getBgColor(type)} >
            <p className="card__p">{"n°" + index}</p>
            <img src={getImage()}
                className={shiny ? "card__img--shiny" : "card__img"}
                alt={name}
                // onClick={shinySwitch} 
                />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

PokemonCard.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    displayImage: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    imgShiny: PropTypes.string,
    type: PropTypes.string.isRequired,
    shiny: PropTypes.bool.isRequired,
}

export default PokemonCard;