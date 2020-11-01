import React, { useContext } from 'react';
import Recipe from '../Display/Recipe';
import { RecipeType } from '../../Types/RecipeType.model';
import { RecipeUpdateContext } from '../../App';

interface Props {
  recipes: RecipeType[];
}

const RecipeList: React.FC<Props> = ({ recipes }) => {
  const { addRecipe, deleteRecipe } = useContext(RecipeUpdateContext);

  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe: RecipeType) => (
          <Recipe
            deleteRecipe={deleteRecipe}
            key={recipe.id + recipe.name}
            recipe={recipe}
          />
        ))}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={() => addRecipe()}>
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
