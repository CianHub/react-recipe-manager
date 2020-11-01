import React from 'react';
import { idGen } from '../../Helpers/helpers';
import { IngredientType } from '../../Types/IngredientType.model';
import Ingredient from './Ingredient';

interface Props {
  ingredients: IngredientType[];
}

const IngredientList: React.FC<Props> = ({ ingredients }) => {
  return (
    <div className="ingredient-grid">
      {ingredients.map((ingredient: IngredientType) => (
        <Ingredient key={idGen()} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientList;
