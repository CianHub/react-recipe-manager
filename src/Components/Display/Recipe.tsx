import React from 'react';

interface Props {}

const Recipe: React.FC<Props> = () => {
  return (
    <div>
      <div>
        <h3>Plain Chicken</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div>
          <span>Servings:</span>
          <span>3</span>
        </div>
        <div>
          <span>Instructions:</span>
          <div>1: Salt on chicken</div>
          <div>2: Cook Chicken</div>
          <div>3: Eat Chicken</div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
