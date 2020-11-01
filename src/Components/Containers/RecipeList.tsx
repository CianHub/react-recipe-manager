import React, { useContext } from 'react';
import Recipe from '../Display/Recipe';
import { RecipeType } from '../../Types/RecipeType.model';
import { RecipeContext } from '../../Context/RecipeContext/RecipeContext';
import {
  ADD_RECIPE,
  DELETE_RECIPE,
} from '../../Context/RecipeContext/RecipeActions';

const RecipeList: React.FC = () => {
  const {
    state: { recipes },
    dispatch,
  } = useContext(RecipeContext);

  const addRecipe = () =>
    dispatch({
      type: ADD_RECIPE,
      payload: {
        recipe: {
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
        },
      },
    });

  const deleteRecipe = (id: number) =>
    dispatch({ type: DELETE_RECIPE, payload: { id } });

  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe: RecipeType) => (
          <Recipe
            deleteRecipe={deleteRecipe}
            key={recipe.id + recipe.name}
            recipe={recipe}
          />
        ))}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={() => addRecipe()}>
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
