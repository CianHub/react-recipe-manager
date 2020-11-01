import React, { useContext, useState } from 'react';
import './App.css';
import RecipeList from './Components/Containers/RecipeList';
import { RecipeContext } from './Context/RecipeContext/RecipeContext';
import RecipeContextProvider from './Context/RecipeContext/RecipeContextProvider';
import { RecipeType } from './Types/RecipeType.model';

function App() {
  return (
    <RecipeContextProvider>
      <div className="App">
        <RecipeList />
      </div>
    </RecipeContextProvider>
  );
}

export default App;
