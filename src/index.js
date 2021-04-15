import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import superagent from 'superagent';
import PokeCard from './PokeCard';

export const Pokemon = () => {

  const [ pokedex, setPokedex ] = useState([]);

  const fetchPokemon = async () => {
    const response = await superagent.get('https://pokeapi.co/api/v2/pokemon?limit=8&offset=0');

    console.log(response);

    const urls = response.body.results.map(url => {
        return url.url;
    });

    console.log(urls);

    const extraData = await Promise.all(urls.map(async url => {
        const result = await superagent.get(url);
        return result.body;
    }))

    console.log(extraData);

    setPokedex(extraData);
  }

  useEffect(() => {
      if (pokedex.length === 0) {
          fetchPokemon();
      }
  })

  return (
    <>
      {
        pokedex.map((pokemon, index) => {
            return (<PokeCard key={pokemon.name} pokemonJson={pokemon}/>);
        })
      }
    </>
  )
}

ReactDOM.render(<Pokemon />, document.querySelector("#root"))