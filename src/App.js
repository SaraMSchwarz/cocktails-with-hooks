import React, { useState, useEffect } from 'react';

function App() {
  const [cocktails, setCocktails] = React.useState('');
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
