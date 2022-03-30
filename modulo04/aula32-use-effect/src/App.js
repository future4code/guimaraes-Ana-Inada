import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

export default function App(props) {
  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokname] = useState(0);

  const changePokeName = (event) => {
    setPokname(event.target.value);
  };
  useEffect(() => {
    const fetchPokelist = async () => {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=151`
        );
        setPokelist(data);
      } catch (e) {
        console.log(e);
      }
    };
    if (setPokelist) fetchPokelist();
  }, []);
  return (
    <div className="App">
      {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}
