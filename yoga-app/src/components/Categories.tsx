import React, { useContext} from "react";

import { Category } from "./Category";

import { YogaContext } from "../context/YogaContextProvider";


export const Categories = () => {
  const {categoriesFirst} = useContext(YogaContext);
  return (
    <div className="category-wrapper">
      <h1 className="heading">Categories</h1>
      <h2 className="category-heading">Type</h2>
      {categoriesFirst.map((category) => (
        <Category key={category.id} category={category} />
      ))}
      
    </div>
  );
};
