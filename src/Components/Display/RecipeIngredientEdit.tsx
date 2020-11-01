import React from 'react';
import { IngredientType } from '../../Types/IngredientType.model';

interface Props {
  ingredient: IngredientType;
}

const RecipeEditIngredient: React.FC<Props> = ({
  ingredient: { name, amount },
}) => {
  return (
    <>
      <input className="recipe-edit__input" type="text" value={name} />
      <input className="recipe-edit__input" type="text" value={amount} />
      <button className="btn btn--danger">&times;</button>
    </>
  );
};

export default RecipeEditIngredient;
