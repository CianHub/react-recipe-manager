import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeEdit from './Components/Containers/RecipeEdit';
import RecipeList from './Components/Containers/RecipeList';
import { idGen } from './Helpers/helpers';
import { RecipeType } from './Types/RecipeType.model';

const LOCAL_STORAGE_KEY = 'reactRecipes.recipes';

export const mockRecipes: RecipeType[] = [
  {
    id: idGen(),
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1: Salt on chicken\n2: Cook chicken\n3: Eat chicken',
    ingredients: [
      {
        id: idGen(),
        name: 'Chicken',
        amount: '2 entire chickens',
      },
      { id: idGen(), name: 'salt', amount: 'a lot' },
    ],
  },
  {
    id: idGen(),
    name: 'Plain Pork',
    servings: 3,
    cookTime: '1:45',
    instructions: '1: Paprika on pork\n2: Cook pork\n3: Eat pork',
    ingredients: [
      {
        id: idGen(),
        name: 'Pork',
        amount: '2 entire pigs',
      },
      {
        id: idGen(),
        name: 'Paprika',
        amount: 'a little',
      },
    ],
  },
];

export const RecipeUpdateContext = React.createContext<{
  addRecipe: () => void;
  deleteRecipe: (id: string) => void;
  selectRecipe: (id: string) => void;
  handleRecipeChange: (id: string, recipe: RecipeType) => void;
}>({
  addRecipe: () => {},
  deleteRecipe: () => {},
  selectRecipe: () => {},
  handleRecipeChange: () => {},
});

function App() {
  const [recipes, setRecipes] = useState(mockRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>();

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
    const newRecipe: RecipeType = {
      id: idGen(),
      name: '',
      servings: 0,
      cookTime: '',
      ingredients: [
        {
          id: idGen(),
          name: '',
          amount: '',
        },
      ],
      instructions: '',
    };

    setRecipes([...recipes, newRecipe]);
    selectRecipe(newRecipe.id);
  };

  const deleteRecipe = (id: string): void => {
    if (selectedRecipeId !== null && selectedRecipeId === id) {
      setSelectedRecipeId('');
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const selectRecipe = (id: string): void => setSelectedRecipeId(id);

  const handleRecipeChange = (id: string, recipe: RecipeType) => {
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
