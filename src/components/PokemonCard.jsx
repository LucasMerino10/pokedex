function PokemonCard() {
    const pokemonList = [
        {
            name: "Bulbasaur",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        },
        {
            name: "Mew",
        },
    ];
    const pokemon = pokemonList[1];
    return (
        <figure className="card">
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc}
                className="card-img"/>
            ) : <p>???</p>}         
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}

export default PokemonCard;