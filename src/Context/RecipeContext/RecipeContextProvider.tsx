import React, { ReactElement, useReducer } from 'react';
import { RecipeContext } from './RecipeContext';
import { recipeReducer } from './RecipeReducer';
import { initialState } from './RecipeState';

interface Props {
  children: ReactElement;
}

const RecipeContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const context = { state, dispatch };
  return (
    <RecipeContext.Provider value={context}>{children}</RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
