import React from 'react';
import Recipe from '../Display/Recipe';
import { RecipeType } from '../Types/RecipeType.model';

interface Props {
  recipes: RecipeType[];
}

const RecipeList: React.FC<Props> = ({ recipes }) => {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe: RecipeType) => (
          <Recipe key={recipe.id + recipe.name} recipe={recipe} />
        ))}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary">Add Recipe</button>
      </div>
    </div>
  );
};

export default RecipeList;
