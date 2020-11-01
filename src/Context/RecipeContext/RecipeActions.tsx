import { RecipeType } from '../../Types/RecipeType.model';

export const ADD_RECIPE = 'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export type ACTION_TYPES =
  | typeof ADD_RECIPE
  | typeof EDIT_RECIPE
  | typeof DELETE_RECIPE;

export interface Action {
  type: ACTION_TYPES;
  payload: { id?: number; recipe?: RecipeType };
}

export interface ActionWithID {
  type: ACTION_TYPES;
  payload: { id: number };
}

export interface ActionWithRecipeType {
  type: ACTION_TYPES;
  payload: { recipe: RecipeType };
}

export interface ActionWithIDAndRecipeType {
  type: ACTION_TYPES;
  payload: { id: number; recipe: RecipeType };
}
