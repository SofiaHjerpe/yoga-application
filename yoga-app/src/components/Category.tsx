import React, {  MouseEventHandler } from "react";
import { ICategories } from "../interfaces";
import { Link} from "react-router-dom";

interface ICategoryProps {
  category: ICategories;
}

export const Category = ({ category }: ICategoryProps) => {
  const toggleVisible: MouseEventHandler<HTMLAnchorElement> = (e) => {
    
  };

  return (
    <>
      <Link
        id={String(category.id)}
        onClick={(e) => toggleVisible}
        to={`/category/${category.id}`}
      >
        <h2 className="category">{category.category_name}</h2>
        <span style={{display: "none"}}
          className="material-symbols-outlined"
        >
          check_small
        </span>
      </Link>
    </>
  );
};
