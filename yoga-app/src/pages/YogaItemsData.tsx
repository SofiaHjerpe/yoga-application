import React, { useEffect, useState } from "react";
import { Categories } from "../components/Categories";
import { ICategories, IPoses } from "../interfaces";
import { useParams } from "react-router-dom";
import { YogaItems } from "../components/YogaItems";

export const YogaItemsData = () => {
  const { id } = useParams();
  const [categoriesFirst, setCategories] = useState<ICategories[]>([]);
  const [singleCategoryFirst, setSingleCategory] = useState<IPoses[]>([]);
  const fetchCategories = async () => {
    const response = await fetch("https://yoga-api-nzy4.onrender.com/v1/categories");
    const categories: ICategories[] = await response.json();

    setCategories(categories);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  
  const fetchCategoryById = async () => {
    const response = await fetch(`https://yoga-api-nzy4.onrender.com/v1/categories?id=${id}`);
    const poses: ICategories = await response.json();
   const allPoses = poses.poses
    setSingleCategory(allPoses);
  };
  useEffect(() => {
    fetchCategoryById();
  }, []);
  return (
    <div className="main-div">
      <Categories categories={categoriesFirst} />
      <h1 className="heading">Welcome to this Yoga website!</h1>
      <YogaItems poses={singleCategoryFirst} />
    </div>
  );
};
