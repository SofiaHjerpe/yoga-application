import React, { useEffect, useState } from "react";
import { Categories } from "../components/Categories";
import { ICategories, IPoses } from "../interfaces";
import { useParams } from "react-router-dom";
import { YogaItems } from "../components/YogaItems";
import { Search } from "../components/Search";

export const YogaItemsData = () => {
  const { id } = useParams();
  const [categoriesFirst, setCategories] = useState<ICategories[]>([]);
  const [singleCategoryFirst, setSingleCategory] = useState<IPoses[]>([]);
  const [searchVal, setSearchVal] = useState("");
  const [filteredPoses, setFilteredPoses] = useState(singleCategoryFirst);

  let baseUrl: string = "https://yoga-api-nzy4.onrender.com/v1";

  const fetchCategories = async () => {
    const response = await fetch(`${baseUrl}/categories`);
    const categories: ICategories[] = await response.json();

    setCategories(categories);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategoryById = async () => {
    const response = await fetch(`${baseUrl}/categories?id=${id}`);
    const poses: ICategories = await response.json();
    const allPoses = poses.poses;
    setSingleCategory(allPoses);
  };
  useEffect(() => {
    fetchCategoryById();
  }, [id]);

  const filteredItems = singleCategoryFirst.filter((pose) =>
    pose.english_name.toLowerCase().includes(searchVal.toLowerCase())
  );
  return (
    <div className="main-div">
      <Categories categories={categoriesFirst} />
      <div className="main-container">
        <h1 className="heading">Welcome to this Yoga website!</h1>
        <Search
          setFilteredPoses={setFilteredPoses}
          filteredItems={filteredItems}
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          categories={categoriesFirst}
        />
        <YogaItems poses={singleCategoryFirst} />
        {filteredPoses.map((pose) => (
          <p> {pose.english_name}</p>
        ))}
      </div>
    </div>
  );
};
