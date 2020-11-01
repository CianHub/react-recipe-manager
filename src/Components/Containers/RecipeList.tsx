import React from 'react';
import Recipe from '../Display/Recipe';
import { RecipeType } from '../../Types/RecipeType.model';

interface Props {
  recipes: RecipeType[];
  addRecipe: () => void;
  deleteRecipe: (id: number) => void;
}

const RecipeList: React.FC<Props> = ({ recipes, addRecipe, deleteRecipe }) => {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe: RecipeType) => (
          <Recipe
            key={recipe.id + recipe.name}
            recipe={recipe}
            deleteRecipe={deleteRecipe}
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
