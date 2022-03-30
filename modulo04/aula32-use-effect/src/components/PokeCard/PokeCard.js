import React, { useEffect } from "react";
import axios from "axios";

export default PokeCard = (props) => {

  const [pokemon, setPokemon] = useState([]);
  
  pegaPokemon =(pokeName)=>{
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon( response.data );
      })
      .catch(err => {
        console.log(err);
      });
}

useEffect(()=>{
  pegaPokemon()
 },[])

 useEffect(()=>{
  const pegaPokemonId= async ()=> {
    try {
      const response =await axios.get(``)
    }
  }
}
  
    // const pokemon = pokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  
}