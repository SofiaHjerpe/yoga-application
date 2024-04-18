import React from "react";
import { Categories } from "../components/Categories";


import { YogaItems } from "../components/YogaItems";
import { Search } from "../components/Search";

export const YogaItemsData = () => {


  return (
    <div className="main-div animation ">
      <div className="categoriesAndImg">
        <Categories />
        <img className="yoga-image" src="./src/assets/yoga-pose25.png" alt="yoga-pose" />
      </div>

      <div className="main-container">
        <h1 className="heading">Welcome to this Yoga website!</h1>
        <div className="searchAndImg">
          <Search />
          <img className="yoga-image" src="./src/assets/meditation2.png" alt="meditation" />
        </div>
        <YogaItems />
      </div>
    </div>
  );
};
