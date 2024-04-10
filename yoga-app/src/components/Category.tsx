import React from "react";
import { ICategories } from "../interfaces";
import { Link } from "react-router-dom";

interface ICategoryProps {
  category: ICategories;
}
export const Category = ({ category }: ICategoryProps) => {
  return (
    <Link to={`/category/${category.id}`}>
      <h2 className="category">{category.category_name}</h2>
    </Link>
  );
};
