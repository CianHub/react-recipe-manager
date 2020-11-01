import React, { useContext } from 'react';
import { RecipeUpdateContext } from '../../App';
import { IngredientType } from '../../Types/IngredientType.model';
import { RecipeType } from '../../Types/RecipeType.model';
import RecipeEditIngredient from '../Display/RecipeIngredientEdit';

interface Props {
  recipe: RecipeType;
}

const RecipeEdit: React.FC<Props> = ({ recipe }) => {
  const { name, ingredients, instructions, cookTime, id, servings } = recipe;

  const { handleRecipeChange, selectRecipe } = useContext(RecipeUpdateContext);

  const handleIngredientChange = (id: number, ingredient: IngredientType) => {
    const newIngredients = [...ingredients];
    const index = newIngredients.findIndex(
      (ingFound: IngredientType) => ingFound.id === id
    );
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  };

  const handleChange = (newValue: any): void =>
    handleRecipeChange(id, {
      ...recipe,
      ...newValue,
    });

  const addIngredient = () => {
    const newIng: IngredientType = {
      id: ingredients.length + 2,
      name: '',
      amount: '',
    };
    handleChange({ ingredients: [...ingredients, newIng] });
  };

  const deleteIngredient = (id: number) => {
    const newIngs = ingredients.filter((ing: IngredientType) => ing.id !== id);
    handleChange({ ingredients: [...newIngs] });
  };

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          className="btn recipe-edit__remove-button"
          onClick={() => selectRecipe(0)}
        >
          &times;
        </button>
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
          onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
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
          onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
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
          onChange={(e) => handleChange({ [e.target.name]: +e.target.value })}
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          className="recipe-edit__input"
          id="instructions"
          value={instructions}
          onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
        ></textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {ingredients.map((ingredient: IngredientType) => (
          <RecipeEditIngredient
            ingredient={ingredient}
            key={ingredient.id + ingredient.name}
            handleIngredientChange={handleIngredientChange}
            deleteIngredient={deleteIngredient}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary" onClick={() => addIngredient()}>
          Add Ingredient
        </button>
      </div>
    </div>
  );
};

export default RecipeEdit;
