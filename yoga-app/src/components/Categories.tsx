import React, { useContext } from "react";

import { Category } from "./Category";

import { YogaContext } from "../context/YogaContextProvider";
import { Level } from "./Level";

export const Categories = () => {
  const { categoriesFirst, levelsArray } = useContext(YogaContext);
  return (
    <div className="category-wrapper">
      <h1 className="heading">Categories</h1>
      <h2 className="category-heading">Type</h2>
      {categoriesFirst.map((category) => (
        <Category key={category.id} category={category} />
      ))}
      <h2 className="category-heading">Levels</h2>
      {levelsArray.map((level) => 
        <Level level={level} key={level.id}/>
      )}
    </div>
  );
};
