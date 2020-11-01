import React from 'react';
import Recipe from '../Display/Recipe';
import { RecipeType } from '../Types/RecipeType.model';

interface Props {
  recipes: RecipeType[];
}

const RecipeList: React.FC<Props> = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe: RecipeType) => (
        <Recipe key={recipe.id + recipe.name} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
