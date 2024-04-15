import React, { MouseEventHandler, useContext } from "react";
import { ICategories } from "../interfaces";
import { YogaContext } from "../context/YogaContextProvider";

interface ICategoryProps {
  category: ICategories;
}

export const Category = ({ category }: ICategoryProps) => {
  const { fetchPoseByCategory, setCheckmark, checkmark } = useContext(YogaContext);

  const handleOnClick = (category: string, id: number) => {
    fetchPoseByCategory(category);
    setCheckmark(id);
  };

  const styleNoCheck = { display: "none" };
  const styleOnCheck = { display: "block" };

  return (
    <>
      <div className="category-container">
        <h2 onClick={() => handleOnClick(category.category_name, category.id)} className="category">
          {category.category_name}
        </h2>
        <span
          style={checkmark === category.id ? styleOnCheck : styleNoCheck}
          className="material-symbols-outlined"
        >
          check_small
        </span>
      </div>
    </>
  );
};
