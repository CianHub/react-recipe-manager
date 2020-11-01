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
  selectRecipe: (id: number) => void;
  handleRecipeChange: (id: number, recipe: RecipeType) => void;
}>({
  addRecipe: () => {},
  deleteRecipe: () => {},
  selectRecipe: () => {},
  handleRecipeChange: () => {},
});

function App() {
  const [recipes, setRecipes] = useState(mockRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number>();

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

  const selectedRecipe: RecipeType | undefined = recipes.find(
    (recipe: RecipeType) => recipe.id === selectedRecipeId
  );

  const addRecipe = (): void => {
    const newRecipe = {
      id: recipes.length + 2,
      name: '',
      servings: 0,
      cookTime: '',
      ingredients: [
        {
          id: 1,
          name: '',
          amount: '',
        },
      ],
      instructions: '',
    };

    setRecipes([...recipes, newRecipe]);
    selectRecipe(newRecipe.id);
  };

  const deleteRecipe = (id: number): void => {
    if (selectedRecipeId !== null && selectedRecipeId === id) {
      setSelectedRecipeId(0);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const selectRecipe = (id: number): void => setSelectedRecipeId(id);

  const handleRecipeChange = (id: number, recipe: RecipeType) => {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(
      (recipeFound: RecipeType) => recipeFound.id === id
    );
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  };

  const recipeContext = {
    addRecipe,
    deleteRecipe,
    selectRecipe,
    handleRecipeChange,
  };

  return (
    <RecipeUpdateContext.Provider value={recipeContext}>
      <div className="App">
        <RecipeList recipes={recipes} />
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe as RecipeType} />}
      </div>
    </RecipeUpdateContext.Provider>
  );
}

export default App;
