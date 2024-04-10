import React, { Dispatch, MouseEventHandler } from "react";
import { ICategories } from "../interfaces";
import { Link, useParams } from "react-router-dom";

interface ICategoryProps {
  category: ICategories;
  checkBefore: Boolean;
  setCheckMark: Dispatch<React.SetStateAction<boolean>>;
}

export const Category = ({ category, setCheckMark, checkBefore }: ICategoryProps) => {
  const { id } = useParams();
  const toggleVisible: MouseEventHandler<HTMLAnchorElement> = (e) => {
    setCheckMark((preVal) => !preVal);
    
  };
  const checkIcon = <span className="material-symbols-outlined">check_small</span>;
  return (
    <>
      <Link id={id} onClick={(e) => toggleVisible} to={`/category/${category.id}`}>
        <h2 className="category">{category.category_name}</h2>
        {checkBefore === false ? null : checkIcon}
      </Link>
    </>
  );
};
