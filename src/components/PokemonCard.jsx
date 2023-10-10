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

export default PokemonCard;