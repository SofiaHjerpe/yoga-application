import React, {  MouseEventHandler, useContext } from "react";
import { ICategories } from "../interfaces";
import { YogaContext } from "../context/YogaContextProvider";


interface ICategoryProps {
  category: ICategories;
}

export const Category = ({ category }: ICategoryProps) => {
 const {fetchPoseByCategory} = useContext(YogaContext)
  const handleOnClick = (category: string) => {
   fetchPoseByCategory(category);
  }

  return (
    <>
     
        <h2 onClick={()=> handleOnClick(category.category_name)} className="category">{category.category_name}</h2>
        <span style={{display: "none"}}
          className="material-symbols-outlined"
        >
          check_small
        </span>
      
    </>
  );
};
