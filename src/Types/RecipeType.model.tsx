import { IngredientType } from './IngredientType.model';

export interface RecipeType {
  id: string;
  name: string;
  servings: number;
  cookTime: string;
  instructions: string;
  ingredients: IngredientType[];
}
