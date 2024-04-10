import React, { useState } from "react";
import { ICategories } from "../interfaces";
import { Category } from "./Category";
interface ICategoriesProps {
  categories: ICategories[];
}
export const Categories = ({ categories }: ICategoriesProps) => {
  const [checkBefore, setCheckMark] = useState(Boolean);

  return (
    <div className="category-wrapper">
      <h1 className="heading">Categories</h1>
      <h2 className="category-heading">Type</h2>
      {categories.map((category) => (
        <Category key={category.id} checkBefore={checkBefore} setCheckMark={setCheckMark} category={category} />
      ))}
      <h2 className="category-heading">Level</h2>
    </div>
  );
};
