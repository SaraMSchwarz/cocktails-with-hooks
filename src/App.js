import React, { useState, useEffect } from "react";

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
    </div>
  );
}

export default App;
