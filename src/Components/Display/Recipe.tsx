import React from 'react';
import { RecipeType } from '../Types/RecipeType.model';
import IngredientList from './IngredientList';

interface Props {
  recipe: RecipeType;
}

const Recipe: React.FC<Props> = ({
  recipe: { name, servings, instructions, ingredients },
}) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div>
          <span>Servings:</span>
          <span>{servings}</span>
        </div>
        <div>
          <span>Instructions:</span>
          <div>{instructions}</div>
        </div>
        <div>
          <span>Ingredients:</span>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
