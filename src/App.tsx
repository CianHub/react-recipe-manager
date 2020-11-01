import React from 'react';
import './App.css';
import RecipeList from './Components/Containers/RecipeList';
import { RecipeType } from './Components/Types/RecipeType.model';

function App() {
  return (
    <div className="App">
      <RecipeList recipes={mockRecipes} />
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
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 3,
    cookTime: '1:45',
    instructions: '1: Paprika on pork\n2: Cook pork\n3: Eat pork',
  },
];

export default App;
