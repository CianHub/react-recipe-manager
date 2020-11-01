import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeEdit from './Components/Containers/RecipeEdit';
import RecipeList from './Components/Containers/RecipeList';
import { RecipeType } from './Types/RecipeType.model';

const LOCAL_STORAGE_KEY = 'reactRecipes.recipes';

export const mockRecipes: RecipeType[] = [
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

export const RecipeUpdateContext = React.createContext<{
  addRecipe: () => void;
  deleteRecipe: (id: number) => void;
}>({ addRecipe: () => {}, deleteRecipe: () => {} });

function App() {
  const [recipes, setRecipes] = useState(mockRecipes);

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      const foundRecipes = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY) as string
      );
      setRecipes(foundRecipes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (): void =>
    setRecipes([
      ...recipes,
      {
        id: recipes.length + 2,
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
      },
    ]);

  const deleteRecipe = (id: number): void =>
    setRecipes(recipes.filter((recipe) => recipe.id !== id));

  const recipeContextValue = {
    addRecipe,
    deleteRecipe,
  };

  return (
    <RecipeUpdateContext.Provider value={recipeContextValue}>
      <div className="App">
        <RecipeList recipes={recipes} />
        <RecipeEdit />
      </div>
    </RecipeUpdateContext.Provider>
  );
}

export default App;
