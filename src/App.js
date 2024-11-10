import React, { useEffect, useState } from 'react';
import './App.css';
import { Recipes } from './components/Recipes';

const App = () => {
  const App_ID = '9ff29d68';
  const App_Key = '89abcae244c3c516fda165e68bdcf99f';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <h1 className="title">Search Recipes</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.uri}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
