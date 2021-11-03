import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Card() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards?pageSize=10")
      .then((response) => setPokemon(response.data.data));
  }, []);

  const index = useParams().id;
  const f = pokemon.find((item) => {
    return item.id === index;
  });
  //{f.name}

  console.log(f);
  return <div>{pokemon.length ? <h1>{f.name}</h1> : <h1>Loading... </h1>}</div>;
}
