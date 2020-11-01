import { RecipeType } from '../../Types/RecipeType.model';
import {
  Action,
  ActionWithID,
  ActionWithIDAndRecipeType,
  ActionWithRecipeType,
  ADD_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
} from './RecipeActions';
import { initialState, RecipeState } from './RecipeState';

export const recipeReducer: React.Reducer<RecipeState, Action> = (
  state: RecipeState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ADD_RECIPE:
      const addRecipeAction = action as ActionWithRecipeType;
      return {
        ...state,
        recipes: [...state.recipes, addRecipeAction.payload.recipe],
      };

    case EDIT_RECIPE:
      const editRecipeAction = action as ActionWithIDAndRecipeType;
      const editRecipeState = state.recipes.filter(
        (recipe: RecipeType) => recipe.id !== editRecipeAction.payload.id
      );

      return {
        recipes: [...editRecipeState, editRecipeAction.payload.recipe],
      };

    case DELETE_RECIPE:
      const deleteRecipeAction = action as ActionWithID;
      const deleteRecipeState = state.recipes.filter(
        (recipe: RecipeType) => recipe.id !== deleteRecipeAction.payload.id
      );
      return { ...state, recipes: [...deleteRecipeState] };

    default:
      return state;
  }
};
