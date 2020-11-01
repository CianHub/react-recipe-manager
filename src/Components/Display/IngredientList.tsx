import React from 'react';
import { IngredientType } from '../Types/IngredientType.model';
import Ingredient from './Ingredient';

interface Props {
  ingredients: IngredientType[];
}

const IngredientList: React.FC<Props> = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient: IngredientType) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientList;
