import React from 'react';
import { RecipeType } from '../Types/RecipeType.model';

interface Props {
  recipe: RecipeType;
}

const Recipe: React.FC<Props> = ({ recipe }) => {
  return (
    <div>
      <div>
        <h3>{recipe.name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div>
          <span>Servings:</span>
          <span>{recipe.servings}</span>
        </div>
        <div>
          <span>Instructions:</span>
          <div>{recipe.instructions}</div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
