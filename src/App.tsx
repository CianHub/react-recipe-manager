import React, { useState } from 'react';
import './App.css';
import RecipeList from './Components/Containers/RecipeList';
import { RecipeType } from './Components/Types/RecipeType.model';

function App() {
  const [recipes, setRecipes] = useState(mockRecipes);

  const handleAddRecipe = (): void => {
    const newRecipe: RecipeType = {
      id: RecipeList.length + 1,
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

  return (
    <div className="App">
      <RecipeList recipes={recipes} addRecipe={handleAddRecipe} />
    </div>
  );
}

const mockRecipes: RecipeType[] = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1: Salt on chicken\n2: Cook chicken\n3: Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 entire chickens',
      },
      { id: 2, name: 'salt', amount: 'a lot' },
    ],
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 3,
    cookTime: '1:45',
    instructions: '1: Paprika on pork\n2: Cook pork\n3: Eat pork',
    ingredients: [
      {
        id: 3,
        name: 'Pork',
        amount: '2 entire pigs',
      },
      {
        id: 4,
        name: 'Paprika',
        amount: 'a little',
      },
    ],
  },
];

export default App;
