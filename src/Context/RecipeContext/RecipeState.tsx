import { RecipeType } from '../../Types/RecipeType.model';

export interface RecipeState {
  recipes: RecipeType[];
}

export const mockRecipes: RecipeType[] = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1: Salt on chicken\n2: Cook chicken\n3: Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 entire chickens',
      },
      { id: 2, name: 'salt', amount: 'a lot' },
    ],
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 3,
    cookTime: '1:45',
    instructions: '1: Paprika on pork\n2: Cook pork\n3: Eat pork',
    ingredients: [
      {
        id: 3,
        name: 'Pork',
        amount: '2 entire pigs',
      },
      {
        id: 4,
        name: 'Paprika',
        amount: 'a little',
      },
    ],
  },
];

export const initialState: RecipeState = {
  recipes: mockRecipes,
};