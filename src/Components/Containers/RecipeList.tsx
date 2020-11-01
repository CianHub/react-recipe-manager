import React, { useContext } from 'react';
import Recipe from '../Display/Recipe';
import { RecipeType } from '../../Types/RecipeType.model';
import { RecipeUpdateContext } from '../../App';
import { idGen } from '../../Helpers/helpers';

interface Props {
  recipes: RecipeType[];
}

const RecipeList: React.FC<Props> = ({ recipes }) => {
  const { addRecipe } = useContext(RecipeUpdateContext);

  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe: RecipeType) => (
          <Recipe key={idGen()} recipe={recipe} />
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
