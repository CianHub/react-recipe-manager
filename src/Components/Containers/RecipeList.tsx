import React from 'react';
import Recipe from '../Display/Recipe';

interface Props {}

const RecipeList: React.FC<Props> = () => {
  return (
    <div>
      <Recipe />
      <Recipe />
    </div>
  );
};

export default RecipeList;
