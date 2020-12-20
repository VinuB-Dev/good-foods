import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  sweet: [
    { name: "jamoon⭐", rating: "10/10" },
    { name: "laddo", rating: "9/10" },
    { name: "carrot halwa", rating: "8/10" },
    { name: "peda", rating: "7/10" }
  ],
  spicy: [
    { name: "pakoda", rating: "9/10" },
    { name: "bonda", rating: "9/10" },
    { name: "gobi manchurian", rating: "8/10" },
    { name: "paneer chilli", rating: "7/10" }
  ],
  FastFood: [
    { name: "burger", rating: "9/10" },
    { name: "pizza", rating: "7/10" },
    { name: "wraps", rating: "7/10" }
  ]
};

const foods = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("sweet");

  function genreClickHandler(food) {
    setMeaning(food);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="food-bowl">
          🍲
        </span>
        Good Foods
      </h1>
      <p>Have a look at my favourite foods</p>
      <div className="button-section">
        {foods.map((food) => (
          <button
            className="food-button"
            key={food}
            onClick={() => genreClickHandler(food)}
          >
            {food}
          </button>
        ))}
      </div>
      <hr />
      <ul>
        {foodDictionary[meaning].map(function (food) {
          return (
            <div key={food.name}>
              <section className="foodoutput">
                <button className="food-description-button">
                  <div id="medium-text"> {food.name}</div>
                  <div id="small-text">{food.rating}</div>
                  <hr />
                </button>
              </section>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
