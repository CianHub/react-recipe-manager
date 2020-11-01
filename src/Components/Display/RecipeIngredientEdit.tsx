import React from 'react';

interface Props {}

const RecipeEditIngredient: React.FC<Props> = () => {
  return (
    <>
      <input className="recipe-edit__input" type="text" />
      <input className="recipe-edit__input" type="text" />
      <button className="btn btn--danger">&times;</button>
    </>
  );
};

export default RecipeEditIngredient;
