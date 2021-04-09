import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

//search by ingredient

const getData = async (search) => {
  const url = `www.thecocktaildb.com/api/json/v1/1/search.php?i=${search}`;

  const response = await fetch(url).catch(() =>
    console.log("Can’t access " + url + " response. Blocked by browser?")
  );
  const json = await response.json();
  return json.results;
};

function App() {
  const [cocktails, setCocktails] = useState("");
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch(`url`)
      .then((res) => res.json())
      .then((response) => {
        setDrinks(response.items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Find a cocktail recipe</h1>
      <input
        placeholder="write here"
        onChange={(e) => setCocktails(e.target.value)}
        value="cocktails"
      />
      <button type="submit">Search</button>
      <ul>
      {cocktails.map((cocktail) => (
        <li key{cocktail.title}></li>
      ))}
      </ul>
    </div>
  );
}

export default App;
