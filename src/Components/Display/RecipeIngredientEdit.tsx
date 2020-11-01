import React from 'react';
import { IngredientType } from '../../Types/IngredientType.model';

interface Props {
  ingredient: IngredientType;
  handleIngredientChange: (id: number, ingredient: IngredientType) => void;
}

const RecipeEditIngredient: React.FC<Props> = ({
  ingredient,
  handleIngredientChange,
}) => {
  const { id, name, amount } = ingredient;

  const handleChange = (newValue: any): void => {
    console.log(newValue);
    handleIngredientChange(id, {
      ...ingredient,
      ...newValue,
    });
  };

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={name}
        name="name"
        onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={amount}
        name="amount"
        onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  );
};

export default RecipeEditIngredient;
