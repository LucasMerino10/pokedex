import PropTypes from "prop-types";
// import { useState } from "react";

function PokemonCard({ index, name, displayImage, imgSrc, imgShiny, type, shiny}) {

    // const [pokemonShiny, setPokemonShiny] = useState(shiny)

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
            <p>{"n°" + index}</p>
            <img src={getImage()}
                className={"card-img "}
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