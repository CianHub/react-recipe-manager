import React from 'react';
import { IngredientType } from '../../Types/IngredientType.model';

interface Props {
  ingredient: IngredientType;
}

const Ingredient: React.FC<Props> = ({ ingredient: { name, amount } }) => {
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  );
};

export default Ingredient;
