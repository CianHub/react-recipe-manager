import React from 'react';
import { RecipeType } from '../Types/RecipeType.model';
import IngredientList from './IngredientList';

import '../../App.css';
interface Props {
  recipe: RecipeType;
  deleteRecipe: (id: number) => void;
}

const Recipe: React.FC<Props> = ({
  recipe: { id, name, servings, cookTime, instructions, ingredients },
  deleteRecipe,
}) => {
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button className="btn btn--danger" onClick={() => deleteRecipe(id)}>
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__instructions recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
