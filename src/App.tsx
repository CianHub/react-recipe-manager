import React, { useState } from 'react';
import './App.css';
import RecipeList from './Components/Containers/RecipeList';
import { RecipeType } from './Types/RecipeType.model';

function App() {
  const [recipes, setRecipes] = useState(mockRecipes);

  const handleAddRecipe = (): void => {
    const newRecipe: RecipeType = {
      id: RecipeList.length + 2,
      name: 'Name',
      servings: 1,
      cookTime: '1:00',
      ingredients: [
        {
          id: 1,
          name: 'Chicken',
          amount: '2 entire chickens',
        },
      ],
      instructions: 'instruct',
    };

    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (id: number): void => {
    const newRecipes = recipes.filter((recipe: RecipeType) => recipe.id !== id);

    setRecipes(newRecipes);
  };

  return (
    <div className="App">
      <RecipeList
        recipes={recipes}
        addRecipe={handleAddRecipe}
        deleteRecipe={handleDeleteRecipe}
      />
    </div>
  );
}

export default App;
