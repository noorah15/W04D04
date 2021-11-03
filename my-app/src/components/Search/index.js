import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function Search() {
  const [cities, setCity] = useState([
    {
      id: 1,
      name: "riyadh",
      img: "https://content.r9cdn.net/rimg/dimg/7d/60/488863c5-city-35744-16935f1b104.jpg?crop=true&width=1366&height=768&xhint=1725&yhint=1010",
    },
    {
      id: 2,
      name: "tokyo",
      img: "https://www.urtrips.com/wp-content/uploads/2019/03/Where-is-Tokyo-2.jpg",
    },
    {
      id: 3,
      name: "new york",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmpireStateNewYokCity.jpg/1200px-EmpireStateNewYokCity.jpg",
    },
  ]);

  const serach = useParams().target.toLowerCase();
  let history = useHistory();

  const viewCardPage = (id) => {
    //console.log(id);
    history.push(`/card/${id}`);
  };

  return (
    <div className="cards">
      {cities.map((item) => {
        if (item.name.includes(serach))
          return (
            <div
              className="card"
              key={item.id}
              onClick={() => {
                viewCardPage(item.id);
              }}
            >
              <h2 key={item.id}>{item.name}</h2>
              <img src={item.img} alt={item.name} className="img1" />
            </div>
          );
      })}
    </div>
  );
}
