import React, { useContext, useState } from 'react';
import { RecipeUpdateContext } from '../../App';
import { IngredientType } from '../../Types/IngredientType.model';
import { RecipeType } from '../../Types/RecipeType.model';
import RecipeEditIngredient from '../Display/RecipeIngredientEdit';

interface Props {
  recipe: RecipeType;
}

const RecipeEdit: React.FC<Props> = ({ recipe }) => {
  const { name, ingredients, instructions, cookTime, id, servings } = recipe;

  const { handleRecipeChange } = useContext(RecipeUpdateContext);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const updatedVal = { [event.target.name]: event.target.value };
    const updatedRecipe = { ...recipe, ...updatedVal };
    handleRecipeChange(id, updatedRecipe);
  };

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit__input"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="cookTime" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          className="recipe-edit__input"
          value={cookTime}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          className="recipe-edit__input"
          value={servings}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          className="recipe-edit__input"
          id="instructions"
          value={instructions}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {ingredients.map((ingredient: IngredientType) => (
          <RecipeEditIngredient ingredient={ingredient} />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  );
};

export default RecipeEdit;
