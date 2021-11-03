import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./style.css";

export default function Cards() {
  const [fav, setfav] = useState([]);

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards?pageSize=10")
      .then((response) => setPokemon(response.data.data));

    // const newFav = pokemon.map((poke, i) => {
    //   return {
    //     id: i,
    //     icon: "https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-star-vector-icon-png-image_355829.jpg",
    //   };
    // });
    // console.log(fav);

    //setFav(newFav);
  }, []);

  let history = useHistory();

  const viewCardPage = (id) => {
    //console.log(id);
    history.push(`/card/${id}`);
  };

  const setFav = (id) => {
    //https://icon-library.com/images/stars-icon-png/stars-icon-png-11.jpg
    const newFav = fav.map((item) => {
      if (item.id === id) {
        if (
          item.icon ===
          "https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-star-vector-icon-png-image_355829.jpg"
        )
          item.icon =
            "https://icon-library.com/images/stars-icon-png/stars-icon-png-11.jpg";
        else
          item.icon =
            "https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-star-vector-icon-png-image_355829.jpg";
      }
      return item;
    });

    setFav(newFav);
  };

  return (
    <>
      <button>Show favorite only </button>
      {
        <div className="cards">
          {pokemon.map((item, i) => {
            return (
              <div className="card" key={i}>
                <h2
                  key={i}
                  onClick={() => {
                    viewCardPage(item.id);
                  }}
                >
                  {item.name}
                </h2>
                <img
                  src={item.images.large}
                  alt={item.name}
                  className="img1"
                  onClick={() => {
                    viewCardPage(item.id);
                  }}
                />
                <button
                  onClick={() => {
                    setFav(i);
                  }}
                >
                  <img
                    src={
                      "https://icon-library.com/images/stars-icon-png/stars-icon-png-11.jpg"
                    }
                    alt="fav icon"
                    className="favicon"
                  />{" "}
                </button>
              </div>
            );
          })}
        </div>
      }
    </>
  );
}
