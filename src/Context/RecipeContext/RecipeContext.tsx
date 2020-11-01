import React, { createContext } from 'react';
import { RecipeType } from '../../Types/RecipeType.model';
import { Action } from './RecipeActions';
import { initialState } from './RecipeState';

export const RecipeContext = createContext<{
  state: { recipes: RecipeType[] };
  dispatch: (action: Action) => void;
}>({ state: initialState, dispatch: () => {} });
