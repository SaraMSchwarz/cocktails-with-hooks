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

const useApi = () => {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCocktails = async () => {
      const results = await getData(search);
      setDrinks(results);
    };
    fetchCocktails();
  }, [search]);

  const doFetch = query => {
    setSearch(query);
  };

  return { drinks, doFetch };
};

function App() {
  const [cocktails, setCocktails] = useState("");
  const { drinks, doFetch } = useApi();

  return (
    <div className="App">
          <div className="Header">
            <h1 className="lead">Search for Cocktails by Ingredient</h1>
            <form
              onSubmit={e => {
                doFetch(cocktails);
                e.preventDefault();
              }}
            >
              <input
                placeholder="Search here"
                onChange={e => setCocktails(e.target.value)}
                value={cocktails}
              />
              <button type="submit">
              </button>
            </form>
          </div>
          <ul>
            {drinks.map(drink => (
              <li key={drink.title}>
                  <span>{recipe.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default App;
