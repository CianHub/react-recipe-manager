import { IngredientType } from './IngredientType.model';

export interface RecipeType {
  id: number;
  name: string;
  servings: number;
  cookTime: string;
  instructions: string;
  ingredients: IngredientType[];
}
