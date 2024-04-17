import React, { useEffect, useState } from "react";
import { ICategories } from "../interfaces";
import { Categories } from "../components/Categories";
import { Search } from "../components/Search";


export const MainPage = () => {
const [categoriesFirst, setCategories] = useState<ICategories[]>([]);

const fetchCategories = async () => {
  const response = await fetch("https://yoga-api-nzy4.onrender.com/v1/categories");
  const categories: ICategories[] = await response.json();

  setCategories(categories);
};
useEffect(() => {
  fetchCategories();
}, []);
  return (
    <div className="main-div">
      <Categories  />
      <div className="main-container-welcome">
        <h1 className="heading">Welcome to this Yoga website!</h1>
        <Search />
      </div>
    </div>
  );
};
