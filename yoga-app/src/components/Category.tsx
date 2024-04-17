import React, { MouseEventHandler, useContext } from "react";
import { ICategories } from "../interfaces";
import { YogaContext } from "../context/YogaContextProvider";

interface ICategoryProps {
  category: ICategories;
}

export const Category = ({ category }: ICategoryProps) => {
  const { fetchPoseByCategory, setCheckmark, checkmark, setHideAllPoses } = useContext(YogaContext);

  const handleOnClick = (id: number) => {
    fetchPoseByCategory(id);
    setCheckmark(id);
    setHideAllPoses((preVal) => !preVal);
  };

  const styleNoCheck = { display: "none" };
  const styleOnCheck = { display: "block" };

  return (
    <>
      <div className="category-container">
        <h2 onClick={() => handleOnClick(category.id)} className="category">
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
