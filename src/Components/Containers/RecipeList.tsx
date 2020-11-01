import React from 'react';
import Recipe from '../Display/Recipe';

interface Props {}

const RecipeList: React.FC<Props> = () => {
  return (
    <Recipe>
      <Recipe />
      <Recipe />
    </Recipe>
  );
};

export default RecipeList;
